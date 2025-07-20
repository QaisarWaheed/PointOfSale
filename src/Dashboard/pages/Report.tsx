import { useState } from "react";
import {
  Button,
  Select,
  Group,
  Title,
  Paper,
  Text,
  Stack,
  Flex,
  SegmentedControl,
} from "@mantine/core";

const Report = () => {
  const [value, setValue] = useState("react");

  return (
    <Stack gap="lg" mt={20}>
      {/* Top header section */}
      <Flex direction={{ base: "column", sm: "row" }} justify="space-between" wrap="wrap" gap="md">
        <Title order={3} c="white">
          Report Center
        </Title>
        <Group justify="flex-end" wrap="wrap">
          <Button
            w={150}
            color="#09090B"
            style={{ border: "1px solid grey" }}
          >
            Export PDF
          </Button>
          <Button
            w={150}
            color="#09090B"
            style={{ border: "1px solid grey" }}
          >
            Export Excel
          </Button>
        </Group>
      </Flex>

      {/* Filter section */}
      <Flex direction={{ base: "column", md: "row" }} justify="space-between" wrap="wrap" gap="md">
        <SegmentedControl
          radius={5}
          styles={{
            root: { backgroundColor: "#27272A" },
            label: { color: "#ffffff" },
            indicator: { backgroundColor: "#111111" },
          }}
          value={value}
          onChange={setValue}
          data={[
            { label: "Stock", value: "stock" },
            { label: "Sales", value: "sales" },
            { label: "GST", value: "gst" },
          ]}
          defaultValue="stock"
          transitionDuration={500}
        />
        <Group wrap="wrap">
          <Select
            styles={{
              input: {
                backgroundColor: "#09090B",
                color: "#FFFFFF",
                border: "1px solid #27272A",
              },
            }}
            w={150}
            c="white"
            placeholder="Company"
            data={["All Companies", "Acme Corp", "Beta", "Beta Solutions"]}
          />
          <Select
            styles={{
              input: {
                backgroundColor: "#09090B",
                color: "#FFFFFF",
                border: "1px solid #27272A",
              },
            }}
            w={150}
            c="white"
            placeholder="Product"
            data={["All Products", "Product A", "Product B"]}
          />
          <Button color="#ffffff" c="black" w={150}>
            Apply Filters
          </Button>
        </Group>
      </Flex>

      {/* Report Section */}
      <Paper mt={5} bg="#09090B" withBorder>
        <Stack p="md" gap="sm">
          <SegmentedControl
            radius={5}
            styles={{
              root: { backgroundColor: "#27272A" },
              label: { color: "#ffffff" },
              indicator: { backgroundColor: "#111111" },
            }}
            value={value}
            onChange={setValue}
            data={[
              { label: "P & L", value: "pl" },
              { label: "Cash Summary", value: "cashSummer" },
            ]}
            defaultValue="stock"
            transitionDuration={500}
          />
          <Title order={3} c="white" mt={10}>
            Profit & Loss Report
          </Title>
          <Text size="sm" c="#56565B">
            Financial performance summary.
          </Text>
        </Stack>

        <Paper h={200} bg="#09090B" m="md" withBorder>
          <Text c="#56565B" p="md">
            Profit & Loss Report Data
          </Text>
        </Paper>
      </Paper>
    </Stack>
  );
};

export default Report;
