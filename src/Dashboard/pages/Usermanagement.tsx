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
  PasswordInput,
  Select,
} from "@mantine/core";
import type { JSX } from "react";

type Element = {
  userId: string;
  name: string;
  email: string;
  role: string;
  action: string;
};

const elements: Element[] = [
  {
    userId: "U-001",
    name: "Admin User",
    email: "admin@example.com",
    role: "Admin",
    action: "...",
  },
  {
    userId: "U-002",
    name: "Accountant A",
    email: "	accountant@example.com",
    role: "	Accountant",
    action: "...",
  },
  {
    userId: "U-003",
    name: "Sales Operator 1",
    email: "sales1@example.com",
    role: "	Sales Operator",

    action: "...",
  },
  {
    userId: "U-004",
    name: "Staff Member",
    email: "sales1@example.com",
    role: "Staff",
    action: "...",
  },
];

const UserManagement = (): JSX.Element => {
  const [search, setSearch] = useState("");
  const rows = elements.map((element) => (
    <Table.Tr
      key={element.userId}
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
      <Table.Td c={"#A1A1AA"}>{element.userId}</Table.Td>
      <Table.Td c={"#A1A1AA"}>{element.name}</Table.Td>
      <Table.Td c={"#A1A1AA"}>{element.email}</Table.Td>
      <Table.Td c={"#A1A1AA"}>{element.role}</Table.Td>
      <Table.Td c={"#A1A1AA"}>{element.action}</Table.Td>
    </Table.Tr>
  ));
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value);
  };

  return (
    <>
      <Paper withBorder bg={"#111111ff"} radius="md" mt={20}>
        <Stack gap={0} ml={20} mt={20}>
          <Title order={3} c={"white"}>
            User List
          </Title>
          <Text c={"#A1A1AA"}>Manage user accounts and assign roles.</Text>
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
          horizontalSpacing="lg"
          verticalSpacing="lg"
          highlightOnHover
          c={"white"}
          bg={"#111111ff"}
        >
          <Table.Thead>
            <Table.Tr>
              <Table.Th>User ID</Table.Th>
              <Table.Th>Name</Table.Th>
              <Table.Th>Email</Table.Th>
              <Table.Th>Role</Table.Th>
              <Table.Th>Actions</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Paper>
      <Paper bg={"#09090B"} withBorder mt={30}>
        <Title ml={20} order={3} c={"white"} mt={20}>
          Add/Edit User
        </Title>
        <Text ml={20} c={"#A1A1AA"}>
          Create a new user or modify an existing one.
        </Text>
        <Group justify="space-between" ml={20} mr={20}>
          <TextInput
            styles={{
              input: {
                backgroundColor: "#09090B",
                border: "1px solid #27272A",
              },
            }}
            label="Name"
            placeholder="Enter name"
            w={760}
            c="white"
          />
          <TextInput
            styles={{
              input: {
                backgroundColor: "#09090B",
                color: "#FFFFFF",
                border: "1px solid #27272A",
              },
            }}
            label="Email"
            placeholder="user@example.com"
            w={760}
            c="white"
          />
        </Group>
        <Group justify="space-between" ml={20} mr={20}>
          <PasswordInput
            styles={{
              input: {
                backgroundColor: "#09090B",
                color: "#FFFFFF",
                border: "1px solid #27272A",
              },
            }}
            label="Password"
            placeholder="********"
            w={760}
            c="white"
          />
          <Select
            styles={{
              input: {
                backgroundColor: "#09090B",
                color: "#FFFFFF",
                border: "1px solid #27272A",
              },
            }}
            label="Role"
            placeholder="Select role"
            data={["Admin", "Accountant", "Sales Operator", "Staff"]}
            w={760}
            c="white"
          />
        </Group>
        <Group justify="flex-end" mt={20} mr={20} mb={20}>
          <Button
            color="#09090B"
            style={{
              border: "1px solid grey",
            }}
          >
            Cancel
          </Button>
          <Button color="#ffffff" c="black" w={110}>
            Save User
          </Button>
        </Group>
      </Paper>
    </>
  );
};

export default UserManagement;
