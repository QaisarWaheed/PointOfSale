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
  Menu,
} from "@mantine/core";
import type { JSX } from "react";
import { useNavigate } from "react-router-dom";
import {
  IconCirclePlus,
  IconSearch,
  IconDots,
  IconEdit,
  IconTrash,
} from "@tabler/icons-react";

type Status = "in-stock" | "low-stock" | "out-of-stock";

type Element = {
  name: string;
  sku: string;
  hsCode: number;
  stock: number;
  price: string;
  supplier: string;
  status: Status;
};

const StatusBadge = ({ status }: { status: Status }) => {
  switch (status) {
    case "in-stock":
      return <Badge color="dark">In Stock</Badge>;
    case "low-stock":
      return <Badge color="red">Low Stock</Badge>;
    case "out-of-stock":
      return (
        <Badge color="gray" variant="outline">
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
  },
  {
    name: "Wireless Mouse",
    sku: "WM-005",
    hsCode: 8471.3,
    stock: 10,
    price: "$25",
    supplier: "AccessoryHub",
    status: "in-stock",
  },
  {
    name: "Mechanical Keyboard",
    sku: "MK-010",
    hsCode: 8471.3,
    stock: 0,
    price: "$90",
    supplier: "KeyMasters",
    status: "out-of-stock",
  },
  {
    name: "USB-C Hub",
    sku: "UH-003",
    hsCode: 8471.3,
    stock: 8,
    price: "$40",
    supplier: "ConnectAll",
    status: "in-stock",
  },
];

const Inventory = (): JSX.Element => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filtered = elements.filter((e) =>
    e.name.toLowerCase().includes(search.toLowerCase())
  );

  const rows = filtered.map((element) => (
    <Table.Tr
      key={element.name}
      style={{
        cursor: "pointer",
        transition: "background-color 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#27272A";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "transparent";
      }}
    >
      <Table.Td c="#A1A1AA">{element.name}</Table.Td>
      <Table.Td c="#A1A1AA">{element.sku}</Table.Td>
      <Table.Td c="#A1A1AA">{element.hsCode}</Table.Td>
      <Table.Td c="#A1A1AA">{element.stock}</Table.Td>
      <Table.Td c="#A1A1AA">{element.price}</Table.Td>
      <Table.Td c="#A1A1AA">{element.supplier}</Table.Td>
      <Table.Td c="#A1A1AA">
        <StatusBadge status={element.status} />
      </Table.Td>
      <Table.Td c="#A1A1AA">
        <Menu shadow="md" width={150} position="bottom-end">
          <Menu.Target>
            <Button variant="subtle" color="gray" px={8}>
              <IconDots size={18} />
            </Button>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item
              leftSection={<IconEdit size={16} />}
              onClick={() => alert(`Edit ${element.name}`)}
            >
              Edit
            </Menu.Item>
            <Menu.Item
              leftSection={<IconTrash size={16} />}
              color="red"
              onClick={() => alert(`Delete ${element.name}`)}
            >
              Delete
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Stack mt={20} px="md">
        <Group justify="space-between" mb="md" wrap="wrap">
          <Stack gap={0}>
            <Title order={2} c="white">
              Inventory Management
            </Title>
          </Stack>
          <Group>
            <Button color="#27272A">Export</Button>
            <Button
              onClick={() => navigate("/dashboard/add-product")}
              color="#ffffff"
              c="black"
              w={150}
              leftSection={<IconCirclePlus size={18} />}
            >
              Add Product
            </Button>
          </Group>
        </Group>
      </Stack>

      <Paper
        style={{
          border: "1px solid #27272A",
        }}
        bg="#111111ff"
        radius="md"
        mt={20}
        px="md"
        py="lg"
      >
        <Stack gap="xs">
          <Title order={3} c="white">
            Product List
          </Title>
          <Text c="#A1A1AA">Manage your products and their stock levels.</Text>
          <TextInput
            w="100%"
            styles={{
              input: {
                backgroundColor: "transparent",
                color: "#FFFFFF",
                border: "1px solid #27272A",
              },
            }}
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.currentTarget.value)}
            radius="md"
            mb="md"
            leftSection={<IconSearch size={18} />}
          />
        </Stack>

        <div style={{ overflowX: "auto" }}>
          <Table
            horizontalSpacing="md"
            verticalSpacing="md"
            highlightOnHover
            c="white"
            bg="#111111ff"
            style={{ minWidth: "850px" }}
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
        </div>
      </Paper>
    </>
  );
};

export default Inventory;
