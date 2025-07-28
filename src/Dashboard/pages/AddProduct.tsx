import {
  Box,
  Button,
  Group,
  NumberInput,
  Select,
  Stack,
  Text,
  Textarea,
  TextInput,
  Title,
  Flex,
  Paper,
} from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useNavigate } from "react-router";
const AddProduct = () => {
  const navigate = useNavigate();
  const inputStyles = {
    input: {
      backgroundColor: "transparent",
      color: "#FFFFFF",
      border: "1px solid #27272A",
    },
    label: { color: "#A1A1AA" },
  };
  return (
    <Box p="md" mx="auto">
      <Group justify="space-between" align="center" mb="lg">
        <Group>
          <Button
            onClick={() => navigate("/dashboard/inventory")}
            leftSection={<IconArrowLeft size={16} />}
            p={0}
            bg={"#1C1B22"}
          ></Button>
          <Title c="white" order={3}>
            Add New Product
          </Title>
        </Group>

        <Group>
          <Button variant="default">Cancel</Button>
          <Button color="dark">Save Product</Button>
        </Group>
      </Group>

      <Flex
        w={"100%"}
        gap={"md"}
        direction={{ base: "column", md: "row" }}
        align="stretch"
      >
        <Box
          mt={"md"}
          p="lg"
          bg="#09090B"
          style={{ flex: 2, border: "1px solid #27272A", borderRadius: "10px" }}
        >
          <Stack w={"100%"} gap="lg">
            <Title order={4} c={"white"}>
              Product Details
            </Title>
            <Text size="sm" c="dimmed">
              Fill in the basic information about your product.
            </Text>

            <TextInput
              label="Product Name"
              placeholder="e.g., Laptop Pro"
              styles={{
                input: {
                  backgroundColor: "transparent",
                  color: "#fff",
                  border: "1px solid #27272A",
                },
              }}
              c={"white"}
            />

            <Flex gap="md" direction={{ base: "column", sm: "row" }}>
              <TextInput
                label="SKU"
                placeholder="e.g., LP-001"
                w="100%"
                styles={{
                  input: {
                    backgroundColor: "transparent",
                    color: "#fff",
                    border: "1px solid #27272A",
                  },
                }}
                c={"white"}
              />
              <TextInput
                label="HS Code"
                placeholder="e.g., 8471.30.00"
                w="100%"
                styles={{
                  input: {
                    backgroundColor: "transparent",
                    color: "#fff",
                    border: "1px solid #27272A",
                  },
                }}
                c={"white"}
              />
            </Flex>

            <Textarea
              label="Description"
              placeholder="Product description..."
              minRows={4}
              styles={{
                input: {
                  backgroundColor: "transparent",
                  color: "#fff",
                  border: "1px solid #27272A",
                },
              }}
              c={"white"}
            />
          </Stack>
        </Box>

        <Box
          h={220}
          mt={"md"}
          p="lg"
          bg="#09090B"
          style={{
            flex: 1,
            minWidth: 280,
            border: "1px solid #27272A",
            borderRadius: "10px",
          }}
          c={"white"}
        >
          <Stack gap="xs">
            <Title order={4}>Product Organization</Title>

            <Select
              label="Supplier"
              placeholder="Select supplier"
              data={["Supplier A", "Supplier B"]}
              styles={{
                input: {
                  backgroundColor: "transparent",
                  color: "#fff",
                  border: "1px solid #27272A",
                },
              }}
            />

            <NumberInput
              label="Weight (kg)"
              placeholder="0.00"
              step={0.01}
              min={0}
              w="100%"
              styles={{
                input: {
                  backgroundColor: "transparent",
                  color: "#fff",
                  border: "1px solid #27272A",
                },
              }}
            />
          </Stack>
        </Box>
      </Flex>
      <Paper
        mt={40}
        p={20}
        w={"54vw"}
        radius={10}
        style={{
          border: "1px solid #27272A",
        }}
        bg={"#09090B"}
      >
        <Title order={3} c={"white"}>
          Pricing & Stock
        </Title>
        <Group grow mt={10}>
          <NumberInput
            label="Purchase Price"
            placeholder="0.00"
            styles={inputStyles}
          />
          <NumberInput
            label="Current Stock"
            placeholder="0"
            styles={inputStyles}
          />
        </Group>

        <Group grow>
          <NumberInput
            label="Sale Price"
            placeholder="0.00"
            styles={inputStyles}
          />
          <NumberInput
            label="Minimum Stock Alert"
            placeholder="0"
            styles={inputStyles}
          />
        </Group>
      </Paper>
    </Box>
  );
};

export default AddProduct;
