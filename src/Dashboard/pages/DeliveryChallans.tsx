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
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import type { JSX } from "react";

type Status = "in-stock" | "low-stock" | "out-of-stock";

type Element = {
  challanNo: string;
  Customer: string;
  date: number;
  totalItem: number;
  status: Status;
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
    challanNo: "DC-001",
    Customer: "Acme Corp",
    date: 20231026,
    totalItem: 1,
    status: "low-stock",
    action: "...",
  },
  {
    challanNo: "DC-002",
    Customer: "Beta Solutions",
    date: 20231027,
    totalItem: 10,
    status: "in-stock",
    action: "...",
  },
  {
    challanNo: "DC-003",
    Customer: "Gamma Ltd",
    date: 20231028,
    totalItem: 0,
    status: "out-of-stock",
    action: "...",
  },
  {
    challanNo: "DC-004",
    Customer: "Delta Inc",
    date: 20231029,
    totalItem: 8,
    status: "in-stock",
    action: "...",
  },
];

const DeliveryChallans = (): JSX.Element => {
  const [search, setSearch] = useState("");
  const isMobile = useMediaQuery("(max-width: 768px)");

  const rows = elements.map((element) => (
    <Table.Tr
      key={element.challanNo}
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
      <Table.Td c={"#A1A1AA"}>{element.challanNo}</Table.Td>
      <Table.Td c={"#A1A1AA"}>{element.Customer}</Table.Td>
      <Table.Td c={"#A1A1AA"}>{element.date}</Table.Td>
      <Table.Td c={"#A1A1AA"}>{element.totalItem}</Table.Td>
      <Table.Td c={"#A1A1AA"}>
        <StatusBadge status={element.status} />
      </Table.Td>
      <Table.Td c={"#A1A1AA"}>{element.action}</Table.Td>
    </Table.Tr>
  ));

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value);
  };

  return (
    <>
      <Stack mt={20} px={isMobile ? "md" : 40}>
        <Group justify="space-between" mb="md" align="flex-start" wrap="wrap">
          <Stack gap={0}>
            <Title order={2} c={"white"}>
              Delivery Challans
            </Title>
          </Stack>

          <Group gap="xs" mt={isMobile ? "sm" : 0} wrap="wrap">
            <Button color="#27272A" fullWidth={isMobile}>
              Export
            </Button>
            <Button
              color="#ffffff"
              c="black"
              w={isMobile ? "100%" : 150}
              fullWidth={isMobile}
            >
              Create Challan
            </Button>
          </Group>
        </Group>
      </Stack>

      <Paper withBorder bg={"#111111ff"} radius="md" mt={20} mx={isMobile ? "md" : 40} p="md">
        <Stack gap="sm">
          <Title order={3} c={"white"}>
            Challan List
          </Title>
          <Text c={"#A1A1AA"}>Track your delivery challans.</Text>

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
          />
        </Stack>

        <ScrollArea mt="md">
          <Table
            highlightOnHover
            c={"white"}
            bg={"#111111ff"}
            verticalSpacing="md"
            horizontalSpacing={"md"}
            striped
            withTableBorder
          >
            <Table.Thead>
              <Table.Tr>
                <Table.Th>ChallanNo</Table.Th>
                <Table.Th>Customer</Table.Th>
                <Table.Th>Date</Table.Th>
                <Table.Th>TotalItem</Table.Th>
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

export default DeliveryChallans;
