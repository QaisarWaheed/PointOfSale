import { useState } from "react";
import { Group, Title, Button, Table, Paper, Stack, Text } from "@mantine/core";
import type { JSX } from "react";
import { SegmentedControl } from "@mantine/core";
import { useNavigate, useLocation } from "react-router";
import { DateInput } from "@mantine/dates";
import CustomDateInput from "../../components/CustomDateInput";
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
    type: "	Inflow",
    amount: "$80.00",
  },
];

type Table = {
  Date: string;
  totalInflow: string;
  totalOutflow: string;
  netflow: string;
};

const table: Table[] = [
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
  const [value, setValue] = useState<"dailyReport" | "monthlyReport">(
    location.pathname === "/monthlyReport" ? "monthlyReport" : "dailyReport"
  );
  const handleButtonChange = (val: "dailyReport" | "monthlyReport") => {
    setValue(val);
    navigate(val === "dailyReport" ? "dailyReport" : "/monthlyReport");
  };
  const rows = elements.map((element) => (
    <Table.Tr
      key={element.date}
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
      <Table.Td c={"#A1A1AA"}>{element.date}</Table.Td>
      <Table.Td c={"#A1A1AA"}>{element.description}</Table.Td>
      <Table.Td c={"#A1A1AA"}>{element.type}</Table.Td>
      <Table.Td c={"#A1A1AA"}>{element.amount}</Table.Td>
    </Table.Tr>
  ));

  const row = table.map((table) => (
    <Table.Tr
      key={table.Date}
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
      <Table.Td c={"#A1A1AA"}>{table.Date}</Table.Td>
      <Table.Td c={"#A1A1AA"}>{table.totalInflow}</Table.Td>
      <Table.Td c={"#A1A1AA"}>{table.totalOutflow}</Table.Td>
      <Table.Td c={"#A1A1AA"}>{table.netflow}</Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Stack mt={20}>
        <Group justify="space-between" mb="md">
          <Stack gap={0} ml={20}>
            <Title order={2} c={"white"}>
              Cash Flow Management
            </Title>
          </Stack>
          <Button color="#ffffff" c="black" w={150}>
            Manual Entry
          </Button>
        </Group>
      </Stack>
      <Paper bg={"#09090B"} withBorder>
        <Paper bg={"#09090B"}>
          <Stack gap={0} ml={20} mt={20}>
            <Title order={3} c={"white"}>
              Cash Register
            </Title>
            <Text c={"#A1A1AA"} size="sm">
              Current cash balance and recent transactions.
            </Text>
          </Stack>

          <Stack mt={20} ml={20}>
            <Title order={2} c={"white"}>
              Current Cash Balance:
            </Title>
          </Stack>
          <Table
            horizontalSpacing="xl"
            verticalSpacing="md"
            highlightOnHover
            c={"white"}
            bg={"#09090B"}
          >
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Date</Table.Th>
                <Table.Th>Description</Table.Th>
                <Table.Th>Type</Table.Th>
                <Table.Th>Amount</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </Paper>
      </Paper>
      <Group justify="Space-between" mt={35}>
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
          data={[
            { label: "Daily Report", value: "dailyReport" },
            { label: "Monthly Report", value: "monthlyReport" },
          ]}
        />
        <Group bg={"red"}>
          <CustomDateInput mt={0} />
          <Button
            w={100}
            color="#09090B"
            style={{
              border: "1px solid gray",
            }}
          >
            Filter
          </Button>
        </Group>
      </Group>
      <Paper withBorder bg={"#09090B"} radius="md" mt={20}>
        <Stack gap={0} ml={20} mt={20}>
          <Title order={3} c={"white"}>
            Daily Cash Flow Summary
          </Title>
          <Text c={"#A1A1AA"}>Net cash movement per day.</Text>
        </Stack>
        <Table
          horizontalSpacing="xl"
          verticalSpacing="md"
          highlightOnHover
          c={"white"}
          bg={"#09090B"}
        >
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Date</Table.Th>
              <Table.Th>Total Inflow</Table.Th>
              <Table.Th>Total Outflow</Table.Th>
              <Table.Th>Net Flow</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{row}</Table.Tbody>
        </Table>
      </Paper>
    </>
  );
};

export default CashFlow;
