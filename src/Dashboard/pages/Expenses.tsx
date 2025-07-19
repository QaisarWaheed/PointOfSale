import { useState } from "react";
import {
  Group,
  Title,
  Button,
  Table,
  Paper,
  Stack,
  Text,
  TextInput,
  Select,
  NumberInput,
} from "@mantine/core";
import type { JSX } from "react";
import CustomDateInput from "../../components/CustomDateInput";

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

const Expenses = (): JSX.Element => {
  const [search, setSearch] = useState("");

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
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value);
  };

  return (
    <>
      <Stack mt={20}>
        <Group justify="space-between" mb="md">
          <Stack gap={0} ml={20}>
            <Title order={2} c={"white"}>
              Staff & Office Expenses
            </Title>
          </Stack>
          <Group>
            <Button
              w={150}
              color="#1C1B22"
              style={{
                border: "1px solid grey",
              }}
            >
              Export PDF
            </Button>
            <Button
              w={150}
              color="#1C1B22"
              style={{
                border: "1px solid grey",
              }}
            >
              Export Excel
            </Button>
            <Button color="#ffffff" c="black" w={150}>
              Add Expense
            </Button>
          </Group>
        </Group>
      </Stack>
      <Paper bg={"#09090B"} withBorder h={200}>
        <Paper bg={"#09090B"} mt={15} ml={20} mr={20}>
          <Stack gap={0}>
            <Title order={3} c={"white"}>
              Add New Expense
            </Title>
            <Text c={"#A1A1AA"} size="sm">
              Record a new staff or office expense.
            </Text>
          </Stack>
          <Group justify="space-between">
            <TextInput
              styles={{
                input: {
                  backgroundColor: "transparent",
                  color: "#FFFFFF",
                  border: "1px solid #27272A",
                },
              }}
              variant="filled"
              label="Person"
              c={"white"}
              w={360}
              placeholder="Enter name"
            />
            <Select
              styles={{
                input: {
                  backgroundColor: "transparent",
                  color: "#FFFFFF",
                  border: "1px solid #27272A",
                },
              }}
              c={"white"}
              w={360}
              label="Category"
              placeholder="Select Category"
              data={["Office Supplies", "Travel", "Ultilities", "Rent"]}
            />
            <CustomDateInput mt={23} />
            <NumberInput
              styles={{
                input: {
                  backgroundColor: "transparent",
                  color: "#FFFFFF",
                  border: "1px solid #27272A",
                },
              }}
              c={"white"}
              w={360}
              label="Amount"
              placeholder="0.00"
            />
          </Group>
          <Group justify="flex-end" mt={10}>
            <Button color="#ffffff" c="black" w={140}>
              Submit Expense
            </Button>
          </Group>
        </Paper>
      </Paper>
      <Paper withBorder bg={"#111111ff"} radius="md" mt={20}>
        <Stack gap={0} ml={20} mt={20}>
          <Title order={3} c={"white"}>
            Expense Report
          </Title>
          <Text c={"#A1A1AA"}>Overview of all recorded expenses.</Text>
          <TextInput
            w={600}
            styles={{
              input: {
                backgroundColor: "transparent",
                color: "#FFFFFF",
                border: "1px solid #27272A",
              },
            }}
            placeholder="Search challans..."
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

export default Expenses;
