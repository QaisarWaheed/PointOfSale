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
  Menu,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useNavigate, useLocation } from "react-router";
import { SegmentedControl } from "@mantine/core";
import {
  IconCirclePlus,
  IconSearch,
  IconDots,
  IconEdit,
  IconTrash,
} from "@tabler/icons-react";

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
      return (
        <Badge color="gray" variant="outline">
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
    date: 20231026,
    amount: "$1500.00",
    status: "low-stock",
    action: "...",
  },
  {
    invoiceNo: "SI-002",
    customer: "Beta Solutions",
    date: 20231027,
    amount: "$2300.00",
    status: "in-stock",
    action: "...",
  },
  {
    invoiceNo: "SI-003",
    customer: "Gamma Ltd",
    date: 20231028,
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

  const handleButtonChange = (val: string) => {
    const typedVal = val as "sale" | "purchase";
    setValue(typedVal);
    navigate(typedVal === "sale" ? "sale" : "/purchase");
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
        e.currentTarget.style.backgroundColor = "#27272A";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "transparent";
      }}
    >
      <Table.Td c="#A1A1AA">{element.invoiceNo}</Table.Td>
      <Table.Td c="#A1A1AA">{element.customer}</Table.Td>
      <Table.Td c="#A1A1AA">{element.date}</Table.Td>
      <Table.Td c="#A1A1AA">{element.amount}</Table.Td>
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
              onClick={() => alert(`Edit ${element.invoiceNo}`)}
            >
              Edit
            </Menu.Item>
            <Menu.Item
              leftSection={<IconTrash size={16} />}
              color="red"
              onClick={() => alert(`Delete ${element.invoiceNo}`)}
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
      <Stack mt={20}>
        <Group
          justify="space-between"
          align={isMobile ? "start" : "center"}
          mb="md"
          wrap="wrap"
        >
          <Stack gap={0} ml={isMobile ? 0 : 20}>
            <Title order={2} c="white">
              Invoicing
            </Title>
          </Stack>
          <Group wrap="wrap">
            <Button color="#27272A" size="sm">
              Export
            </Button>
            <Button
              color="#ffffff"
              c="black"
              size="sm"
              w={isMobile ? "100%" : 150}
              onClick={() => navigate("/dashboard/create-invoice")}
              leftSection={<IconCirclePlus size={18} />}
            >
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
          placeholder="Search invoices..."
          value={search}
          onChange={handleSearchChange}
          radius="md"
          leftSection={<IconSearch size={18} />}
        />
      </Group>

      <Paper
        style={{
          border: "1px solid #27272A",
        }}
        bg="#111111"
        radius="md"
        mt={20}
        p="sm"
      >
        <Stack gap={0} ml={20} mt={20}>
          <Title order={3} c="white">
            Sales Invoices
          </Title>
          <Text c="#A1A1AA">Manage your sales invoices.</Text>
        </Stack>

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
