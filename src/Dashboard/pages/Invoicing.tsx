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
  ScrollArea,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
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
      return <Badge color="dark">Delivered</Badge>;
    case "low-stock":
      return <Badge color="red">Pending</Badge>;
    case "out-of-stock":
      return <Badge color="gray" variant="outline">Cancelled</Badge>;
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

const Invoicing = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [value, setValue] = useState<"sale" | "purchase">(
    location.pathname === "/purchase" ? "purchase" : "sale"
  );

  const handleButtonChange = (val: "sale" | "purchase") => {
    setValue(val);
    navigate(val === "sale" ? "sale" : "/purchase");
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
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

  return (
    <>
      <Stack mt={20}>
        <Group justify="space-between" align={isMobile ? "start" : "center"} mb="md" wrap="wrap">
          <Stack gap={0} ml={isMobile ? 0 : 20}>
            <Title order={2} c="white">
              Invoicing
            </Title>
          </Stack>
          <Group wrap="wrap">
            <Button color="#27272A" size="sm">
              Export
            </Button>
            <Button color="#ffffff" c="black" size="sm" w={isMobile ? "100%" : 150}>
              Create Invoice
            </Button>
          </Group>
        </Group>
      </Stack>

      <Group justify="space-between" mt={10} wrap="wrap">
        <SegmentedControl
          w={isMobile ? "100%" : 300}
          radius={5}
          mb={10}
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
          w={isMobile ? "100%" : 250}
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

      <Paper withBorder bg={"#111111"} radius="md" mt={20} p="sm">
        <Stack gap={0} ml={20} mt={20}>
          <Title order={3} c="white">
            Sales Invoices
          </Title>
          <Text c="#A1A1AA">Manage your sales invoices.</Text>
        </Stack>

        {/* Responsive Scrollable Table */}
        <ScrollArea type="auto" scrollbars="xy" mt={20}>
          <Table
            horizontalSpacing="md"
            verticalSpacing="md"
            highlightOnHover
            c="white"
            bg="#111111"
            miw={600}
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
        </ScrollArea>
      </Paper>
    </>
  );
};

export default Invoicing;
