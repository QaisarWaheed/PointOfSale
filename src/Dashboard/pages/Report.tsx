import { useState } from "react";
import { Button, Select, Group, Title, Paper, Text } from "@mantine/core";
import { SegmentedControl } from "@mantine/core";
const Report = () => {
  const [value, setValue] = useState("react");
  return (
    <>
      <Group mt={20} justify="space-between">
        <Title order={3} c={"white"}>
          Report Center
        </Title>
        <Group>
          <Button
            w={150}
            color="#09090B"
            style={{
              border: "1px solid grey",
            }}
          >
            Export PDF
          </Button>
          <Button
            w={150}
            color="#09090B"
            style={{
              border: "1px solid grey",
            }}
          >
            Export Excel
          </Button>
        </Group>
      </Group>
      <Group mt={30} justify="space-between">
        <SegmentedControl
          w={400}
          radius={5}
          mb={5}
          styles={{
            root: {
              backgroundColor: "#27272A",
            },
            label: {
              color: "#ffffff",
            },
            indicator: {
              backgroundColor: "#111111",
            },
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
        <Group>
          <Select
            styles={{
              input: {
                backgroundColor: "#09090B",
                color: "#FFFFFF",
                border: "1px solid #27272A",
              },
            }}
            w={120}
            c={"white"}
            placeholder="Company"
            data={["All Companies", "Acme Crop", "Beta ", "Beta Solutions"]}
          />
          <Select
            styles={{
              input: {
                backgroundColor: "#09090B",
                color: "#FFFFFF",
                border: "1px solid #27272A",
              },
            }}
            w={120}
            c={"white"}
            placeholder="Product"
            data={["All Companies", "Acme Crop", "Beta ", "Beta Solutions"]}
          />
          <Button color="#ffffff" c="black" w={150}>
            Apply Filters
          </Button>
        </Group>
      </Group>
      <Paper mt={5} bg={"#09090B"} h={400} withBorder>
        <Paper h={130} bg={"#09090B"}>
          <SegmentedControl
            w={300}
            mt={20}
            radius={5}
            ml={25}
            styles={{
              root: {
                backgroundColor: "#27272A",
              },
              label: {
                color: "#ffffff",
              },
              indicator: {
                backgroundColor: "#111111",
              },
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
          <Title ml={30} order={3} c={"white"}>
            Profit & Loss Report
          </Title>
          <Text ml={30} size="sm" c={"#56565B"}>
            Financial performance summary.
          </Text>
        </Paper>
        <Paper h={200} bg={"#09090B"} m={"xl"} withBorder>
          <Text c={"#56565B"}>Profit & Loss Report Data</Text>
        </Paper>
      </Paper>
    </>
  );
};

export default Report;
