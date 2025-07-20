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
  Grid,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
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
    category: "Travel",
    date: 2023 - 10 - 27,
    amount: "$300.00",
    action: "...",
  },
  {
    expenseId: "E-003",
    person: "Gamma Ltd",
    category: "Utilities",
    date: 2023 - 10 - 28,
    amount: "$80.00",
    action: "...",
  },
];

const Expenses = (): JSX.Element => {
  const [search, setSearch] = useState("");
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value);
  };

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

  return (
    <>
      <Stack mt={20} px={isSmallScreen ? 10 : 20}>
        <Group justify="space-between" mb="md" wrap="wrap">
          <Title order={2} c="white">
            Staff & Office Expenses
          </Title>
          <Group gap="xs" wrap="wrap">
            <Button w={140} color="#1C1B22" style={{ border: "1px solid grey" }}>
              Export PDF
            </Button>
            <Button w={140} color="#1C1B22" style={{ border: "1px solid grey" }}>
              Export Excel
            </Button>
            <Button color="white" c="black" w={140}>
              Add Expense
            </Button>
          </Group>
        </Group>
      </Stack>

      
      <Paper bg="#09090B" withBorder radius="md" p={isSmallScreen ? 10 : 20}>
        <Stack>
          <Title order={3} c="white">
            Add New Expense
          </Title>
          <Text c="#A1A1AA" size="sm">
            Record a new staff or office expense.
          </Text>

          <Grid gutter={isSmallScreen ? "sm" : "md"}>
            <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
              <TextInput
                label="Person"
                placeholder="Enter name"
                styles={{
                  input: {
                    backgroundColor: "transparent",
                    color: "#fff",
                    border: "1px solid #27272A",
                  },
                }}
              />
            </Grid.Col>

            <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
              <Select
                label="Category"
                placeholder="Select Category"
                data={["Office Supplies", "Travel", "Utilities", "Rent"]}
                styles={{
                  input: {
                    backgroundColor: "transparent",
                    color: "#fff",
                    border: "1px solid #27272A",
                  },
                }}
              />
            </Grid.Col>

            <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
              <CustomDateInput mt={23} />
            </Grid.Col>

            <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
              <NumberInput
                label="Amount"
                placeholder="0.00"
                styles={{
                  input: {
                    backgroundColor: "transparent",
                    color: "#fff",
                    border: "1px solid #27272A",
                  },
                }}
              />
            </Grid.Col>
          </Grid>

          <Group justify="flex-end" mt={10}>
            <Button color="white" c="black" w={140}>
              Submit Expense
            </Button>
          </Group>
        </Stack>
      </Paper>

      
      <Paper withBorder bg={"#111111ff"} radius="md" mt={20} p="md">
  <Stack gap={0}>
    <Title order={3} c={"white"} ml={4}>
      Expense Report
    </Title>
    <Text c={"#A1A1AA"} ml={4}>
      Overview of all recorded expenses.
    </Text>

    <TextInput
      w="100%"
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

    <div style={{ overflowX: "auto" }}>
      <Table
        horizontalSpacing="md"
        verticalSpacing="md"
        highlightOnHover
        c="white"
        bg="#111111ff"
        style={{ minWidth: "800px" }} 
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
    </div>
  </Stack>
</Paper>

    </>
  );
};

export default Expenses;
