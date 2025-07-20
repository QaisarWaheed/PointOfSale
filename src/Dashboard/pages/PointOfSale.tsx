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
  Table
} from '@mantine/core';
import { useState } from "react";

const PointOfSale = () => {
  const [discount, setDiscount] = useState<number | "">(0);
  const [notes, setNotes] = useState("");

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      gap="md"
      p="md"
      h="100vh"
      bg="#121212"
      style={{ overflow: "auto" }}
    >
      {/* Left Side - Add Product */}
      <Box
        w={{ base: "100%", md: "60%" }}
        bg="#1C1B22"
        p="md"
        style={{ borderRadius: 8 }}
      >
        <Stack gap="md">
          <Title order={3}>Add Product</Title>

          <TextInput
            label="Scanner Code"
            placeholder="Scanner output or enter code here / SKU"
          />

          <TextInput
            label="Products"
            placeholder="Type or select product"
          />

          <Group grow>
            <TextInput label="Category" placeholder="Category" />
            <NumberInput label="Sale Price" placeholder="0" />
          </Group>

          <Group grow>
            <NumberInput label="Discount %" placeholder="0" />
            <NumberInput label="Discount Price" placeholder="0" />
          </Group>

          <Group justify="space-between" wrap="wrap">
            <Button w={180} mt="xl" color="dark">
              Enter Item Code
            </Button>
            <Button w={180} mt="xl" color="red">
              Delete Item
            </Button>
            <Button w={180} mt="xl" color="green">
              Add Item
            </Button>
          </Group>
        </Stack>
      </Box>

      {/* Right Side - Current Order */}
      <Box
        w={{ base: "100%", md: "40%" }}
        bg="#1A1A1A"
        p="md"
        style={{ borderRadius: 8 }}
      >
        <Stack gap="md">
          <Title order={3} c="white">
            Current Order
          </Title>

          {/* Customer */}
          <Box>
            <Text fw={500} size="sm" mb={4}>
              Customer
            </Text>
            <Select
              placeholder="Walk-in Customer"
              data={["Walk-in Customer", "Registered Customer"]}
              w="100%"
              styles={{
                input: {
                  backgroundColor: "#111",
                  color: "white",
                  borderColor: "#333",
                },
                dropdown: {
                  backgroundColor: "#1A1A1A",
                },
              }}
            />
          </Box>

          {/* Table */}
          <Table verticalSpacing="sm" striped withTableBorder withColumnBorders>
            <thead style={{ backgroundColor: "#1A1A1A", color: "#ccc" }}>
              <tr>
                <th>Item</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={5} style={{ textAlign: "center", color: "#aaa" }}>
                  No items in cart. Add products from the left panel.
                </td>
              </tr>
            </tbody>
          </Table>

          {/* Discount input */}
          <Flex align="center" gap="sm">
            <Text fw={500} size="sm" style={{ minWidth: 100 }}>
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
              styles={{
                input: {
                  backgroundColor: "#111",
                  color: "white",
                  borderColor: "#333",
                },
              }}
            />
          </Flex>

          {/* Notes input */}
          <Box>
            <Text fw={500} size="sm" mb={4}>
              Notes
            </Text>
            <TextInput
              placeholder="Add order notes..."
              value={notes}
              onChange={(e) => setNotes(e.currentTarget.value)}
              w="100%"
              styles={{
                input: {
                  backgroundColor: "#111",
                  color: "white",
                  borderColor: "#333",
                },
              }}
            />
          </Box>

          <Divider my="sm" color="#333" />

          {/* Summary Section */}
          <Stack gap={4}>
            <Flex justify="space-between">
              <Text>Subtotal:</Text>
              <Text>$0.00</Text>
            </Flex>
            <Flex justify="space-between">
              <Text>Discount ({discount || 0}%):</Text>
              <Text>-${(0).toFixed(2)}</Text>
            </Flex>
            <Flex justify="space-between">
              <Text>Tax (18% GST):</Text>
              <Text>$0.00</Text>
            </Flex>

            <Divider my="sm" color="#333" />

            <Flex justify="space-between">
              <Text fw={700} size="xl">
                Total:
              </Text>
              <Text fw={700} size="xl">
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
