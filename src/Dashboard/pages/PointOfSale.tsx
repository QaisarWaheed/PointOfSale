import {
  Box,
  Card,
  Group,
  Paper,
  SimpleGrid,
  TextInput,
  Title,
} from "@mantine/core";
import { useState } from "react";
const PointOfSale = () => {
  const [search, setSearch] = useState("");
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value);
  };
  return (
    <>
      <Paper bg={"#1C1B22"} w={"50%"} h={"90%"}>
        <Group justify="space-between">
          <Title order={3}>Products</Title>
          <TextInput
            w={250}
            styles={{
              input: {
                backgroundColor: "#111111",
                color: "#FFFFFF",
                border: "1px solid #27272A",
              },
            }}
            placeholder="Search challans..."
            value={search}
            onChange={handleSearchChange}
            radius="md"
          />
        </Group>
        <SimpleGrid cols={4} spacing="sm" verticalSpacing="sm">
          <Card withBorder>sdf</Card>
          <Card withBorder>sdf</Card>
          <Card withBorder>sdf</Card>
          <Card withBorder>sdf</Card>
        </SimpleGrid>
      </Paper>
    </>
  );
};
export default PointOfSale;
