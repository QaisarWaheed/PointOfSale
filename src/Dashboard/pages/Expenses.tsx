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
  Menu,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import type { JSX } from "react";
import CustomDateInput from "../../components/CustomDateInput";
import {
  IconCirclePlus,
  IconSearch,
  IconDots,
  IconEdit,
  IconTrash,
  IconFileText,
} from "@tabler/icons-react";

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
    date: 20231026,
    amount: "$150.00",
    action: "...",
  },
  {
    expenseId: "E-002",
    person: "Beta Solutions",
    category: "Travel",
    date: 20231027,
    amount: "$300.00",
    action: "...",
  },
  {
    expenseId: "E-003",
    person: "Gamma Ltd",
    category: "Utilities",
    date: 20231028,
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
        e.currentTarget.style.backgroundColor = "#27272A";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "transparent";
      }}
    >
      <Table.Td c="#A1A1AA">{element.expenseId}</Table.Td>
      <Table.Td c="#A1A1AA">{element.person}</Table.Td>
      <Table.Td c="#A1A1AA">{element.category}</Table.Td>
      <Table.Td c="#A1A1AA">{element.date}</Table.Td>
      <Table.Td c="#A1A1AA">{element.amount}</Table.Td>
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
              onClick={() => alert(`Edit ${element.expenseId}`)}
            >
              Edit
            </Menu.Item>
            <Menu.Item
              leftSection={<IconTrash size={16} />}
              color="red"
              onClick={() => alert(`Delete ${element.expenseId}`)}
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
      <Stack mt={20} px={isSmallScreen ? 10 : 20}>
        <Group justify="space-between" mb="md" wrap="wrap">
          <Title order={2} c="white">
            Staff & Office Expenses
          </Title>
          <Group gap="xs" wrap="wrap">
            <Button
              variant="subtle"
              w={140}
              color="white"
              style={{
                border: "1px solid #262629",
              }}
              leftSection={<IconFileText size={18} />}
            >
              Export PDF
            </Button>
            <Button
              variant="subtle"
              w={140}
              color="white"
              style={{
                border: "1px solid #262629",
              }}
              leftSection={<IconFileText size={18} />}
            >
              Export Excel
            </Button>
            <Button
              color="#ffffff"
              c="black"
              w={150}
              leftSection={<IconCirclePlus size={16} />}
            >
              Add Expense
            </Button>
          </Group>
        </Group>
      </Stack>

      <Paper
        bg="#09090B"
        withBorder
        radius="md"
        p={isSmallScreen ? 10 : 20}
        style={{
          border: "1px solid #27272A",
        }}
      >
        <Stack>
          <Title order={3} c="white">
            Add New Expense
          </Title>
          <Text c="#A1A1AA" size="sm">
            Record a new staff or office expense.
          </Text>

          <Grid gutter={isSmallScreen ? "sm" : "md"}>
            <Grid.Col span={{ base: 11, sm: 5, md: 3 }}>
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
                c="white"
              />
            </Grid.Col>

            <Grid.Col span={{ base: 11, sm: 5, md: 3 }}>
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
                c="white"
              />
            </Grid.Col>

            <Grid.Col span={{ base: 11, sm: 5, md: 3 }}>
              <CustomDateInput mt={25} />
            </Grid.Col>

            <Grid.Col span={{ base: 11, sm: 5, md: 3 }}>
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
                c="white"
              />
            </Grid.Col>
          </Grid>

          <Group justify="flex-end" mt={10}>
            <Button color="#ffffff" c="black" w={140}>
              Submit Expense
            </Button>
          </Group>
        </Stack>
      </Paper>

      <Paper
        style={{
          border: "1px solid #27272A",
        }}
        bg="#09090B"
        radius="md"
        mt={20}
        p="md"
      >
        <Stack gap={0}>
          <Title order={3} c="white" ml={4}>
            Expense Report
          </Title>
          <Text c="#A1A1AA" ml={4}>
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
            placeholder="Search expenses..."
            value={search}
            onChange={handleSearchChange}
            radius="md"
            mb="md"
            leftSection={<IconSearch size={18} />}
          />

          <div style={{ overflowX: "auto" }}>
            <Table
              horizontalSpacing="md"
              verticalSpacing="md"
              highlightOnHover
              c="white"
              bg="#09090B"
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
