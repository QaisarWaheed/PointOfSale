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
  Box,
  Menu,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import type { JSX } from "react";
import {
  IconCirclePlus,
  IconDots,
  IconEdit,
  IconSearch,
  IconTrash,
} from "@tabler/icons-react";

type Status = "in-stock" | "low-stock" | "out-of-stock";

type Element = {
  accountId: string;
  name: string;
  type: string;
  status: Status;
  lastActivity: number;
  action: string;
};

const StatusBadge = ({ status }: { status: Status }) => {
  switch (status) {
    case "in-stock":
      return (
        <Badge color="dark" variant="filled" radius="sm">
          Delivered
        </Badge>
      );
    case "low-stock":
      return (
        <Badge color="red" variant="filled" radius="sm">
          Pending
        </Badge>
      );
    case "out-of-stock":
      return (
        <Badge color="gray" variant="outline" radius="sm">
          Cancelled
        </Badge>
      );
    default:
      return null;
  }
};

const elements: Element[] = [
  {
    accountId: "C-001",
    name: "Acme Corp",
    type: "Customer",
    status: "low-stock",
    lastActivity: 20231101,
    action: "...",
  },
  {
    accountId: "V-001",
    name: "Supplier A",
    type: "Vendor",
    status: "in-stock",
    lastActivity: 20231029,
    action: "...",
  },
  {
    accountId: "C-002",
    name: "Beta Solutions",
    type: "Customer",
    status: "out-of-stock",
    lastActivity: 20231027,
    action: "...",
  },
  {
    accountId: "V-002",
    name: "Manufacturer X",
    type: "Vendor",
    status: "in-stock",
    lastActivity: 20231025,
    action: "...",
  },
];

const Accounts = (): JSX.Element => {
  const [search, setSearch] = useState("");
  const isMobile = useMediaQuery("(max-width: 768px)");

  const rows = elements.map((element) => (
    <Table.Tr
      key={element.accountId}
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
      <Table.Td c="#A1A1AA">{element.accountId}</Table.Td>
      <Table.Td c="#A1A1AA">{element.name}</Table.Td>
      <Table.Td c="#A1A1AA">{element.type}</Table.Td>
      <Table.Td c="#A1A1AA">
        <StatusBadge status={element.status} />
      </Table.Td>
      <Table.Td c="#A1A1AA">{element.lastActivity}</Table.Td>
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
              onClick={() => alert(`Edit ${element.accountId}`)}
            >
              Edit
            </Menu.Item>
            <Menu.Item
              leftSection={<IconTrash size={16} />}
              color="red"
              onClick={() => alert(`Delete ${element.accountId}`)}
            >
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
      <Stack mt={20}>
        <Group justify="space-between" mb="md" wrap="wrap" px="md">
          <Stack gap={0}>
            <Title order={2} c="white">
              Company / Customer / Vendor Accounts
            </Title>
          </Stack>
          <Group gap="sm" mt={isMobile ? "md" : 0}>
            <Button color="#27272A">Export</Button>
            <Button
              color="#ffffff"
              c="black"
              w={150}
              leftSection={<IconCirclePlus size={18} />}
            >
              Add Account
            </Button>
          </Group>
        </Group>
      </Stack>

      <Paper
        style={{
          border: "1px solid #27272A",
        }}
        bg="#111111ff"
        radius="md"
        mt={20}
        px="md"
      >
        <Stack gap={0} mt={20}>
          <Title order={3} c="white">
            Account List
          </Title>
          <Text c="#A1A1AA">Manage your customer and vendor accounts.</Text>

          <TextInput
            mt={5}
            w={isMobile ? "100%" : 600}
            styles={{
              input: {
                backgroundColor: "transparent",
                color: "#FFFFFF",
                border: "1px solid #27272A",
              },
            }}
            placeholder="Search accounts..."
            value={search}
            onChange={handleSearchChange}
            radius="md"
            mb="md"
            leftSection={<IconSearch size={18} />}
          />
        </Stack>

        <Box style={{ overflowX: "auto" }}>
          <Table
            horizontalSpacing="md"
            verticalSpacing="md"
            highlightOnHover
            c="white"
            bg="#111111ff"
            miw={isMobile ? 600 : "auto"}
          >
            <Table.Thead>
              <Table.Tr>
                <Table.Th>AccountId</Table.Th>
                <Table.Th>Name</Table.Th>
                <Table.Th>Type</Table.Th>
                <Table.Th>Outstanding</Table.Th>
                <Table.Th>Last Activity</Table.Th>
                <Table.Th>Actions</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </Box>
      </Paper>
    </>
  );
};

export default Accounts;
