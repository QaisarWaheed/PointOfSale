import {
  Stack,
  Title,
  TextInput,
  NumberInput,
  Group,
  Button,
  Divider,
  Flex,
  Box,
  Select,
  Text,
  Table,
} from "@mantine/core";
import { useState } from "react";

const PointOfSale = () => {
  const [discount, setDiscount] = useState<number | "">(0);
  const [notes, setNotes] = useState("");

  const inputStyles = {
    input: {
      backgroundColor: "transparent",
      color: "#FFFFFF",
      border: "1px solid #27272A",
    },
    label: { color: "#A1A1AA" },
  };

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      gap="md"
      bg="#1C1B22"
      style={{
        alignItems: "flex-start",
      }}
      mt={15}
    >
      <Box
        w={{ base: "100%", md: "60%" }}
        bg="#09090B"
        p="md"
        style={{
          borderRadius: 8,
          border: "1px solid #27272A",
        }}
      >
        <Stack gap="md">
          <Title order={3} c="white">
            Add Product
          </Title>

          <TextInput
            label="Scanner Code"
            placeholder="Scanner output or enter code here / SKU"
            styles={inputStyles}
          />

          <TextInput
            label="Products"
            placeholder="Type or select product"
            styles={inputStyles}
          />

          <Group grow>
            <TextInput
              label="Category"
              placeholder="Category"
              styles={inputStyles}
            />
            <NumberInput
              label="Sale Price"
              placeholder="0"
              styles={inputStyles}
            />
          </Group>

          <Group grow>
            <NumberInput
              label="Discount %"
              placeholder="0"
              styles={inputStyles}
            />
            <NumberInput
              label="Discount Price"
              placeholder="0"
              styles={inputStyles}
            />
          </Group>

          <Group justify="space-between" wrap="wrap">
            <Button
              w={180}
              mt="xl"
              color="#09090B"
              style={{ border: "1px solid #27272A" }}
            >
              Enter Item Code
            </Button>
            <Button w={180} mt="xl" color="red">
              Delete Item
            </Button>
            <Button variant="white" w={180} mt="xl" c="black">
              Add Item
            </Button>
          </Group>
        </Stack>
      </Box>

      <Box
        w={{ base: "100%", md: "40%" }}
        bg="#09090B"
        p="md"
        style={{
          borderRadius: 8,
          border: "1px solid #27272A",
        }}
      >
        <Stack gap="md">
          <Title order={3} c="white">
            Current Order
          </Title>

          <Box>
            <Text fw={500} size="sm" mb={4} c="#A1A1AA">
              Customer
            </Text>
            <Select
              placeholder="Walk-in Customer"
              data={["Walk-in Customer", "Registered Customer"]}
              w="100%"
              styles={inputStyles}
            />
          </Box>

          <Table
            verticalSpacing="sm"
            highlightOnHover
            c="white"
            bg={"#111111ff"}
            style={{
              border: "1px solid #27272A",
            }}
          >
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Item</Table.Th>
                <Table.Th>Qty</Table.Th>
                <Table.Th>Price</Table.Th>
                <Table.Th>Total</Table.Th>
                <Table.Th>Actions</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              <Table.Tr>
                <Table.Td colSpan={5} ta={"center"} c={"dimmed"}>
                  No items in cart. Add products from the left panel.
                </Table.Td>
              </Table.Tr>
            </Table.Tbody>
          </Table>

          <Flex align="center" gap="sm">
            <Text fw={500} size="sm" style={{ minWidth: 100 }} c="#A1A1AA">
              Discount (%)
            </Text>
            <NumberInput
              value={discount}
              onChange={(val) => {
                if (typeof val === "number" || val === "") {
                  setDiscount(val);
                }
              }}
              min={0}
              max={100}
              w={100}
              hideControls
              styles={inputStyles}
            />
          </Flex>

          <Box>
            <Text fw={500} size="sm" mb={4} c="#A1A1AA">
              Notes
            </Text>
            <TextInput
              placeholder="Add order notes..."
              value={notes}
              onChange={(e) => setNotes(e.currentTarget.value)}
              w="100%"
              styles={inputStyles}
            />
          </Box>

          <Divider my="sm" color="#27272A" />

          <Stack gap={4}>
            <Flex justify="space-between">
              <Text c="white">Subtotal:</Text>
              <Text c="white">$0.00</Text>
            </Flex>
            <Flex justify="space-between">
              <Text c="white">Discount ({discount || 0}%):</Text>
              <Text c="white">-${(0).toFixed(2)}</Text>
            </Flex>
            <Flex justify="space-between">
              <Text c="white">Tax (18% GST):</Text>
              <Text c="white">$0.00</Text>
            </Flex>

            <Divider my="sm" color="#27272A" />

            <Flex justify="space-between">
              <Text fw={700} size="xl" c="white">
                Total:
              </Text>
              <Text fw={700} size="xl" c="white">
                $0.00
              </Text>
            </Flex>
          </Stack>
        </Stack>
      </Box>
    </Flex>
  );
};

export default PointOfSale;
