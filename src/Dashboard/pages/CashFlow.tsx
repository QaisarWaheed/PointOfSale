import { useState } from "react";
import {
  Group,
  Title,
  Button,
  Table,
  Paper,
  Stack,
  Text,
  Menu,
  ActionIcon,
} from "@mantine/core";
import { ScrollArea } from "@mantine/core";
import type { JSX } from "react";
import { SegmentedControl } from "@mantine/core";
import { useNavigate, useLocation } from "react-router";
import { useMediaQuery } from "@mantine/hooks";
import CustomDateInput from "../../components/CustomDateInput";
import {
  IconCirclePlus,
  IconDots,
  IconEdit,
  IconTrash,
} from "@tabler/icons-react";

type Element = {
  date: string;
  description: string;
  type: string;
  amount: string;
};

const elements: Element[] = [
  {
    date: "2023-11-01",
    description: "Cash Sale INV-005",
    type: "Inflow",
    amount: "$150.00",
  },
  {
    date: "2023-11-01",
    description: "Office Supplies Purchase",
    type: "Outflow",
    amount: "$300.00",
  },
  {
    date: "2023-10-31",
    description: "Bank Deposit",
    type: "Inflow",
    amount: "$80.00",
  },
];

type TableSummary = {
  Date: string;
  totalInflow: string;
  totalOutflow: string;
  netflow: string;
};

const table: TableSummary[] = [
  {
    Date: "2023-11-01",
    totalInflow: "$1500.00",
    totalOutflow: "$200.00",
    netflow: "$1300.00",
  },
  {
    Date: "2023-10-31",
    totalInflow: "$1500.00",
    totalOutflow: "$200.00",
    netflow: "$1300.00",
  },
  {
    Date: "2023-10-30",
    totalInflow: "$1500.00",
    totalOutflow: "$200.00",
    netflow: "$1300.00",
  },
];

const CashFlow = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [value, setValue] = useState<"dailyReport" | "monthlyReport">(
    location.pathname === "/monthlyReport" ? "monthlyReport" : "dailyReport"
  );

  const handleButtonChange = (val: "dailyReport" | "monthlyReport") => {
    setValue(val);
    navigate(val === "dailyReport" ? "dailyReport" : "/monthlyReport");
  };

  // Row for Cash Register Table
  const rows = elements.map((element) => (
    <Table.Tr
      key={element.date}
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
      <Table.Td c={"#A1A1AA"}>{element.date}</Table.Td>
      <Table.Td c={"#A1A1AA"}>{element.description}</Table.Td>
      <Table.Td c={"#A1A1AA"}>{element.type}</Table.Td>
      <Table.Td c={"#A1A1AA"}>{element.amount}</Table.Td>
      <Table.Td>
        <Menu shadow="md" width={150}>
          <Menu.Target>
            <ActionIcon variant="subtle" color="gray">
              <IconDots size={18} />
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item leftSection={<IconEdit size={16} />}>Edit</Menu.Item>
            <Menu.Item color="red" leftSection={<IconTrash size={16} />}>
              Delete
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Table.Td>
    </Table.Tr>
  ));

  // Row for Daily Cash Flow Summary
  const row = table.map((table) => (
    <Table.Tr
      key={table.Date}
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
      <Table.Td c={"#A1A1AA"}>{table.Date}</Table.Td>
      <Table.Td c={"#A1A1AA"}>{table.totalInflow}</Table.Td>
      <Table.Td c={"#A1A1AA"}>{table.totalOutflow}</Table.Td>
      <Table.Td c={"#A1A1AA"}>{table.netflow}</Table.Td>
      <Table.Td>
        <Menu shadow="md" width={150}>
          <Menu.Target>
            <ActionIcon variant="subtle" color="gray">
              <IconDots size={18} />
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item leftSection={<IconEdit size={16} />}>Edit</Menu.Item>
            <Menu.Item color="red" leftSection={<IconTrash size={16} />}>
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
          align={isMobile ? "stretch" : "center"}
          mb="md"
          wrap="wrap"
          gap="sm"
        >
          <Stack gap={0} ml={isMobile ? 0 : 20}>
            <Title order={2} c="white">
              Cash Flow Management
            </Title>
          </Stack>
          <Button
            color="#ffffff"
            c="black"
            w={isMobile ? "100%" : 150}
            leftSection={<IconCirclePlus size={18} />}
          >
            Manual Entry
          </Button>
        </Group>
      </Stack>

      <Paper
        bg="#09090B"
        style={{
          border: "1px solid #27272A",
        }}
        radius={"md"}
      >
        <Paper bg="#09090B">
          <Stack gap={0} ml={20} mt={20}>
            <Title order={3} c="white">
              Cash Register
            </Title>
            <Text c="#A1A1AA" size="sm">
              Current cash balance and recent transactions.
            </Text>
          </Stack>

          <Stack mt={20} ml={20}>
            <Title order={2} c="white">
              Current Cash Balance:
            </Title>
          </Stack>

          <ScrollArea type="auto">
            <Table
              horizontalSpacing="md"
              verticalSpacing="md"
              highlightOnHover
              c="white"
              bg="#09090B"
              miw={isMobile ? 600 : undefined}
            >
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Date</Table.Th>
                  <Table.Th>Description</Table.Th>
                  <Table.Th>Type</Table.Th>
                  <Table.Th>Amount</Table.Th>
                  <Table.Th>Actions</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>{rows}</Table.Tbody>
            </Table>
          </ScrollArea>
        </Paper>
      </Paper>

      <Group
        justify="space-between"
        mt={25}
        wrap="wrap"
        gap="md"
        align={isMobile ? "stretch" : "center"}
      >
        <SegmentedControl
          value={value}
          onChange={(val: any) => handleButtonChange(val)}
          w={isMobile ? "100%" : 300}
          radius={5}
          mb={5}
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
          data={[
            { label: "Daily Report", value: "dailyReport" },
            { label: "Monthly Report", value: "monthlyReport" },
          ]}
        />

        <Group wrap="wrap" gap="sm">
          <CustomDateInput mt={0} />
          <Button
            w={isMobile ? "100%" : 100}
            color="#09090B"
            style={{
              border: "1px solid #27272A",
            }}
          >
            Filter
          </Button>
        </Group>
      </Group>

      <Paper
        style={{
          border: "1px solid #27272A",
        }}
        bg="#09090B"
        radius="md"
        mt={5}
      >
        <Stack gap={0} ml={20} mt={20}>
          <Title order={3} c="white">
            Daily Cash Flow Summary
          </Title>
          <Text c="#A1A1AA">Net cash movement per day.</Text>
        </Stack>

        <ScrollArea type="auto">
          <Table
            horizontalSpacing="md"
            verticalSpacing="md"
            highlightOnHover
            c="white"
            bg="#09090B"
            miw={isMobile ? 600 : undefined}
          >
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Date</Table.Th>
                <Table.Th>Total Inflow</Table.Th>
                <Table.Th>Total Outflow</Table.Th>
                <Table.Th>Net Flow</Table.Th>
                <Table.Th>Actions</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{row}</Table.Tbody>
          </Table>
        </ScrollArea>
      </Paper>
    </>
  );
};

export default CashFlow;
