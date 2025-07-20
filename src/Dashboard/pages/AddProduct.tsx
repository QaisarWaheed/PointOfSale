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
  
} from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";

const AddProduct = () => {
  return (
    <Box p="md" maw={1200} mx="auto">
     
      <Group justify="space-between" align="center" mb="lg">
        <Group>
          <Button variant="default" size="sm" leftSection={<IconArrowLeft size={16} />}> </Button>
          <Title order={3}>Add New Product</Title>
        </Group>

        <Group>
          <Button variant="default">Cancel</Button>
          <Button color="dark">Save Product</Button>
        </Group>
      </Group>

      <Flex
        direction={{ base: "column", md: "row" }}
        gap="lg"
        align="stretch"
      >
       
        <Box
          p="lg"
         
          bg="white"
          style={{ flex: 2 }}
         
        >
          <Stack gap="xs">
            <Title order={4}>Product Details</Title>
            <Text size="sm" c="dimmed">
              Fill in the basic information about your product.
            </Text>

            <TextInput label="Product Name" placeholder="e.g., Laptop Pro" />

            <Flex gap="md" direction={{ base: "column", sm: "row" }}>
              <TextInput label="SKU" placeholder="e.g., LP-001" w="100%" />
              <TextInput label="HS Code" placeholder="e.g., 8471.30.00" w="100%" />
            </Flex>

            <Textarea label="Description" placeholder="Product description..." minRows={4} />
          </Stack>
        </Box>

        
        <Box
          p="lg"
            
          bg="white"
          style={{ flex: 1, minWidth: 280 }}
          
        >
          <Stack gap="xs">
            <Title order={4}>Product Organization</Title>

            <Select
              label="Supplier"
              placeholder="Select supplier"
              data={["Supplier A", "Supplier B"]}
            />

            <NumberInput
               label="Weight (kg)"
               placeholder="0.00"
               step={0.01}
               min={0}
               w="100%"
            />
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default AddProduct;
