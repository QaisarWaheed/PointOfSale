import { Group, Title, Button, Table, Paper, Stack, Text } from "@mantine/core";
import type { JSX } from "react";

type Element = {
  expenseId: string;
  person: string;
  category: string;
  date: number;
  amount: string;
  action: string;
};

const elements: Element[] = [
  {
    expenseId: "E-001",
    person: "Acme Corp",
    category: "Office Supplies",
    date: 2023 - 10 - 26,
    amount: "$150.00",
    action: "...",
  },
  {
    expenseId: "E-002",
    person: "Beta Solutions",
    category: "	Travel",
    date: 2023 - 10 - 27,
    amount: "$300.00",
    action: "...",
  },
  {
    expenseId: "E-003",
    person: "Gamma Ltd",
    category: "	Utilities",
    date: 2023 - 10 - 28,
    amount: "$80.00",
    action: "...",
  },
];

const CashFlow = (): JSX.Element => {
  const rows = elements.map((element) => (
    <Table.Tr
      key={element.expenseId}
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
      <Table.Td c={"#A1A1AA"}>{element.expenseId}</Table.Td>
      <Table.Td c={"#A1A1AA"}>{element.person}</Table.Td>
      <Table.Td c={"#A1A1AA"}>{element.category}</Table.Td>
      <Table.Td c={"#A1A1AA"}>{element.date}</Table.Td>
      <Table.Td c={"#A1A1AA"}>{element.amount}</Table.Td>
      <Table.Td c={"#A1A1AA"}>{element.action}</Table.Td>
    </Table.Tr>
  ));

  const row = elements.map((element) => (
    <Table.Tr
      key={element.expenseId}
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
      <Table.Td c={"#A1A1AA"}>{element.expenseId}</Table.Td>
      <Table.Td c={"#A1A1AA"}>{element.person}</Table.Td>
      <Table.Td c={"#A1A1AA"}>{element.category}</Table.Td>
      <Table.Td c={"#A1A1AA"}>{element.date}</Table.Td>
      <Table.Td c={"#A1A1AA"}>{element.amount}</Table.Td>
      <Table.Td c={"#A1A1AA"}>{element.action}</Table.Td>
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
        <Paper ml={"20"} bg={"#09090B"}>
          <Stack gap={0}>
            <Title order={3} c={"white"}>
              Cash Register
            </Title>
            <Text c={"#A1A1AA"} size="sm">
              Current cash balance and recent transactions.
            </Text>
          </Stack>

          <Stack mt={20}>
            <Title order={2} c={"white"}>
              Current Cash Balance:
            </Title>
          </Stack>
          <Table
            horizontalSpacing="sm"
            verticalSpacing="sm"
            highlightOnHover
            c={"white"}
            bg={"#09090B"}
          >
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Expense ID</Table.Th>
                <Table.Th>Person</Table.Th>
                <Table.Th>Category</Table.Th>
                <Table.Th>Date</Table.Th>
                <Table.Th>Amount</Table.Th>
                <Table.Th>Actions</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{row}</Table.Tbody>
          </Table>
        </Paper>
      </Paper>

      <Paper withBorder bg={"#09090B"} radius="md" mt={20}>
        <Stack gap={0} ml={20} mt={20}>
          <Title order={3} c={"white"}>
            Daily Cash Flow Summary
          </Title>
          <Text c={"#A1A1AA"}>Net cash movement per day.</Text>
        </Stack>
        <Table
          horizontalSpacing="sm"
          verticalSpacing="sm"
          highlightOnHover
          c={"white"}
          bg={"#09090B"}
        >
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Expense ID</Table.Th>
              <Table.Th>Person</Table.Th>
              <Table.Th>Category</Table.Th>
              <Table.Th>Date</Table.Th>
              <Table.Th>Amount</Table.Th>
              <Table.Th>Actions</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Paper>
    </>
  );
};

export default CashFlow;
