import React, { useState } from "react";
import Inventory from "../../pages/Inventory";

type Status = "in-stock" | "low-stock" | "out-of-stock";
type Supplier = {
  name: string;
  company: string;
  email: string;
};
interface Inventory {
  name: string;
  sku: string;
  hsCode: number;
  stock: number;
  price: string;
  supplier: Supplier;
  status: Status;
  action: string;
}

interface InventoryContextType {
  product: Inventory | null;
  AddProduct: () => void;
  RemoveProduct: () => void;
  UpdateProduct: () => void;
}

const InventoryContext = React.createContext<InventoryContextType | undefined>(
  undefined
);

export const InventoryContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [product, setProduct] = useState<Inventory | null>(null);

  const AddProduct = () => {
    const newProduct = setProduct(product);
    return newProduct;
  };
  const UpdateProduct = () => {};

  const RemoveProduct = () => {
    setProduct(null);
  };

  return (
    <InventoryContext.Provider
      value={{ product, AddProduct, UpdateProduct, RemoveProduct }}
    >
      {children}
    </InventoryContext.Provider>
  );
};

export const useInventoryContext = () => {
  const context = React.useContext(InventoryContext);
  if (!context) {
    throw new Error("useInventory must be used within useInventoryProvider");
  }
  return context;
};
