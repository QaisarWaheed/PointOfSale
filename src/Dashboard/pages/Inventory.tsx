import { useState } from "react";
import {
  Group,
  Title,
  Button,
  Table,
  Badge,
  Paper,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import type { JSX } from "react";

type Status = "in-stock" | "low-stock" | "out-of-stock";

type Element = {
  name: string;
  sku: string;
  hsCode: number;
  stock: number;
  price: string;
  supplier: string;
  status: Status;
  action: string;
};

const StatusBadge = ({ status }: { status: Status }) => {
  switch (status) {
    case "in-stock":
      return (
        <Badge color="dark" variant="filled" radius="sm">
          In Stock
        </Badge>
      );
    case "low-stock":
      return (
        <Badge color="red" variant="filled" radius="sm">
          Low Stock
        </Badge>
      );
    case "out-of-stock":
      return (
        <Badge color="gray" variant="outline" radius="sm">
          Out of Stock
        </Badge>
      );
    default:
      return null;
  }
};

const elements: Element[] = [
  {
    name: "Laptop Pro",
    sku: "LP-001",
    hsCode: 8471.3,
    stock: 1,
    price: "$1200",
    supplier: "TechCorp",
    status: "low-stock",
    action: "...",
  },
  {
    name: "Wireless Mouse",
    sku: "WM-005",
    hsCode: 8471.3,
    stock: 10,
    price: "$25",
    supplier: "AccessoryHub",
    status: "in-stock",
    action: "...",
  },
  {
    name: "Mechanical Keyboard",
    sku: "MK-010",
    hsCode: 8471.3,
    stock: 0,
    price: "$90",
    supplier: "KeyMasters",
    status: "out-of-stock",
    action: "...",
  },
  {
    name: "USB-C Hub",
    sku: "UH-003",
    hsCode: 8471.3,
    stock: 8,
    price: "$40",
    supplier: "ConnectAll",
    status: "in-stock",
    action: "...",
  },
];

const Inventory = (): JSX.Element => {
  const [search, setSearch] = useState("");
  const rows = elements.map((element) => (
    <Table.Tr
      key={element.name}
      style={{
        cursor: "pointer",
        transition: "background-color 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#656b74ff";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "transparent";
      }}
    >
      <Table.Td c={"#A1A1AA"}>{element.name}</Table.Td>
      <Table.Td c={"#A1A1AA"}>{element.sku}</Table.Td>
      <Table.Td c={"#A1A1AA"}>{element.hsCode}</Table.Td>
      <Table.Td c={"#A1A1AA"}>{element.stock}</Table.Td>
      <Table.Td c={"#A1A1AA"}>{element.price}</Table.Td>
      <Table.Td c={"#A1A1AA"}>{element.supplier}</Table.Td>
      <Table.Td c={"#A1A1AA"}>
        <StatusBadge status={element.status} />
      </Table.Td>
      <Table.Td c={"#A1A1AA"}>{element.action}</Table.Td>
    </Table.Tr>
  ));
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value);
  };

  return (
    <>
      <Stack mt={20}>
        <Group justify="space-between" mb="md">
          <Stack gap={0} ml={20}>
            <Title order={2} c={"white"}>
              Inventory Management
            </Title>
          </Stack>
          <Group>
            <Button color="#27272A">Export</Button>
            <Button color="#ffffff" c="black" w={150}>
              Add Product
            </Button>
          </Group>
        </Group>
      </Stack>
      <Paper withBorder bg={"#111111ff"} radius="md" mt={20}>
        <Stack gap={0} ml={20} mt={20}>
          <Title order={3} c={"white"}>
            Product List
          </Title>
          <Text c={"#A1A1AA"}>
            Manage your products and their stock levels.
          </Text>
          <TextInput
            w={600}
            styles={{
              input: {
                backgroundColor: "transparent",
                color: "#FFFFFF",
                border: "1px solid #27272A",
              },
            }}
            placeholder="Search by name..."
            value={search}
            onChange={handleSearchChange}
            radius="md"
            mb="md"
          />
        </Stack>
        <Table
          horizontalSpacing="xl"
          verticalSpacing="xl"
          highlightOnHover
          c={"white"}
          bg={"#111111ff"}
        >
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Element name</Table.Th>
              <Table.Th>SKU</Table.Th>
              <Table.Th>HSCode</Table.Th>
              <Table.Th>Stock</Table.Th>
              <Table.Th>Price</Table.Th>
              <Table.Th>Supplier</Table.Th>
              <Table.Th>Status</Table.Th>
              <Table.Th>Actions</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Paper>
    </>
  );
};

export default Inventory;
