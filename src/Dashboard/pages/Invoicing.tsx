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
import { useNavigate, useLocation } from "react-router";
import { SegmentedControl } from "@mantine/core";
type Status = "in-stock" | "low-stock" | "out-of-stock";

type Element = {
  invoiceNo: string;
  customer: string;
  date: number;
  amount: string;
  status: Status;
  action: string;
};

const StatusBadge = ({ status }: { status: Status }) => {
  switch (status) {
    case "in-stock":
      return (
        <Badge color="dark" variant="filled" radius="sm">
          Delivered
        </Badge>
      );
    case "low-stock":
      return (
        <Badge color="red" variant="filled" radius="sm">
          Pending
        </Badge>
      );
    case "out-of-stock":
      return (
        <Badge color="gray" variant="outline" radius="sm">
          Cancelled
        </Badge>
      );
    default:
      return null;
  }
};

const elements: Element[] = [
  {
    invoiceNo: "SI-001",
    customer: "Acme Corp",
    date: 2023 - 10 - 26,
    amount: "$1500.00",
    status: "low-stock",
    action: "...",
  },
  {
    invoiceNo: "SI-002",
    customer: "Beta Solutions",
    date: 2023 - 10 - 27,
    amount: "$2300.00",
    status: "in-stock",
    action: "...",
  },
  {
    invoiceNo: "SI-003",
    customer: "Gamma Ltd",
    date: 2023 - 10 - 28,
    amount: "$800.00",
    status: "out-of-stock",
    action: "...",
  },
];

const Invoicing = (): JSX.Element => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const [value, setValue] = useState<"sale" | "purchase">(
    location.pathname === "/purchase" ? "purchase" : "sale"
  );
  const handleButtonChange = (val: "sale" | "purchase") => {
    setValue(val);
    navigate(val === "sale" ? "sale" : "/purchase");
  };
  const rows = elements.map((element) => (
    <Table.Tr
      key={element.invoiceNo}
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
      <Table.Td c={"#A1A1AA"}>{element.invoiceNo}</Table.Td>
      <Table.Td c={"#A1A1AA"}>{element.customer}</Table.Td>
      <Table.Td c={"#A1A1AA"}>{element.date}</Table.Td>
      <Table.Td c={"#A1A1AA"}>{element.amount}</Table.Td>
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
              Invoicing
            </Title>
          </Stack>
          <Group>
            <Button color="#27272A">Export</Button>
            <Button color="#ffffff" c="black" w={150}>
              Create Invoice
            </Button>
          </Group>
        </Group>
      </Stack>
      <Group justify="space-between" mt={10}>
        <SegmentedControl
          w={300}
          radius={5}
          mb={5}
          styles={{
            root: {
              backgroundColor: "#27272A",
              border: "1px solid #374151",
            },
            label: {
              color: "#ffffff",
            },
            indicator: {
              backgroundColor: "#111111",
            },
          }}
          value={value}
          onChange={handleButtonChange}
          data={[
            { label: "Sales", value: "sale" },
            { label: "Purchase", value: "purchase" },
          ]}
        />

        <TextInput
          w={250}
          styles={{
            input: {
              backgroundColor: "#111111",
              color: "#FFFFFF",
              border: "1px solid #27272A",
            },
          }}
          placeholder="Search challans..."
          value={search}
          onChange={handleSearchChange}
          radius="md"
        />
      </Group>
      <Paper withBorder bg={"#111111ff"} radius="md" mt={20}>
        <Stack gap={0} ml={20} mt={20}>
          <Title order={3} c={"white"}>
            Sales Invoices
          </Title>
          <Text c={"#A1A1AA"}>Manage your sales invoices.</Text>
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
              <Table.Th>InvoiceNo</Table.Th>
              <Table.Th>Customer</Table.Th>
              <Table.Th>Date</Table.Th>
              <Table.Th>Amount</Table.Th>
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

export default Invoicing;
