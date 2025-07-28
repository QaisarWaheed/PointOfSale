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
  Flex,
  useMantineTheme,
  Menu,
  ActionIcon,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import type { JSX } from "react";
import { IconSearch, IconDots, IconEdit, IconTrash } from "@tabler/icons-react";

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
    email: "accountant@example.com",
    role: "Accountant",
    action: "...",
  },
  {
    userId: "U-003",
    name: "Sales Operator 1",
    email: "sales1@example.com",
    role: "Sales Operator",
    action: "...",
  },
  {
    userId: "U-004",
    name: "Staff Member",
    email: "staff@example.com",
    role: "Staff",
    action: "...",
  },
];

const UserManagement = (): JSX.Element => {
  const [search, setSearch] = useState("");
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const rows = elements.map((element) => (
    <Table.Tr
      key={element.userId}
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
      <Table.Td c="#A1A1AA">{element.userId}</Table.Td>
      <Table.Td c="#A1A1AA">{element.name}</Table.Td>
      <Table.Td c="#A1A1AA">{element.email}</Table.Td>
      <Table.Td c="#A1A1AA">{element.role}</Table.Td>
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

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value);
  };

  return (
    <>
      {/* User List */}
      <Paper
        style={{
          border: "1px solid #27272A",
        }}
        bg="#09090B"
        radius="md"
        mt="md"
        p="md"
      >
        <Stack gap="sm">
          <Title order={3} c="white">
            User List
          </Title>
          <Text c="#A1A1AA">Manage user accounts and assign roles.</Text>
          <TextInput
            w="100%"
            styles={{
              input: {
                backgroundColor: "transparent",
                color: "#FFFFFF",
                border: "1px solid #27272A",
              },
            }}
            placeholder="Search users..."
            value={search}
            onChange={handleSearchChange}
            radius="md"
            mb="md"
            leftSection={<IconSearch size={18} />}
          />
        </Stack>

        <div style={{ overflowX: "auto" }}>
          <Table
            horizontalSpacing="md"
            verticalSpacing="md"
            highlightOnHover
            c="white"
            bg="#09090B"
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
        </div>
      </Paper>

      {/* Add/Edit User Form */}
      <Paper
        bg="#09090B"
        mt="xl"
        p="md"
        style={{
          border: "1px solid #27272A",
        }}
      >
        <Stack gap="xs">
          <Title order={3} c="white">
            Add/Edit User
          </Title>
          <Text c="#A1A1AA">Create a new user or modify an existing one.</Text>
        </Stack>

        <Flex direction={isMobile ? "column" : "row"} gap="md" mt="md" mb="md">
          <TextInput
            flex={1}
            label="Name"
            placeholder="Enter name"
            styles={{
              input: {
                backgroundColor: "#09090B",
                color: "#FFFFFF",
                border: "1px solid #27272A",
              },
            }}
            c="white"
          />
          <TextInput
            flex={1}
            label="Email"
            placeholder="user@example.com"
            styles={{
              input: {
                backgroundColor: "#09090B",
                color: "#FFFFFF",
                border: "1px solid #27272A",
              },
            }}
            c="white"
          />
        </Flex>

        <Flex direction={isMobile ? "column" : "row"} gap="md" mb="md">
          <PasswordInput
            flex={1}
            label="Password"
            placeholder="Create Password"
            styles={{
              input: {
                backgroundColor: "#09090B",
                color: "#FFFFFF",
                border: "1px solid #27272A",
              },
            }}
            c="white"
          />
          <Select
            flex={1}
            label="Role"
            placeholder="Select role"
            data={["Admin", "Accountant", "Sales Operator", "Staff"]}
            styles={{
              input: {
                backgroundColor: "#09090B",
                color: "#FFFFFF",
                border: "1px solid #27272A",
              },
            }}
            c="white"
          />
        </Flex>

        <Group justify="flex-end" mt="md">
          <Button
            color="#09090B"
            style={{
              border: "1px solid grey",
            }}
          >
            Cancel
          </Button>
          <Button color="#ffffff" c="black">
            Save User
          </Button>
        </Group>
      </Paper>
    </>
  );
};

export default UserManagement;
