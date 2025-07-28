import {
  Container,
  Grid,
  Card,
  Text,
  Title,
  TextInput,
  Select,
  NumberInput,
  Button,
  Group,
  Switch,
  Stack,
  Divider,
} from "@mantine/core";

import { IconChevronLeft } from "@tabler/icons-react";
import CustomDateInput from "../../components/CustomDateInput";
import { useNavigate } from "react-router";
export default function CreateDeliveryChallan() {
  const navigate = useNavigate();
  return (
    <Container py="xl" fluid>
      <Stack w={"84vw"}>
        <Group justify="space-between" mb="md">
          <Group>
            <Button
              variant="subtle"
              leftSection={<IconChevronLeft size={18} color="white" />}
              p={0}
              ta={"center"}
              color="#27272A"
              onClick={() => navigate("/dashboard/challan")}
            ></Button>
            <Title order={3} c={"white"}>
              Create Delivery Challan
            </Title>
          </Group>
          <Group>
            <Button variant="filled" bg={"black"} c="white">
              Cancel
            </Button>
            <Button variant="white" color="black">
              Save Challan
            </Button>
          </Group>
        </Group>

        <Grid gutter="md">
          <Grid.Col span={8}>
            <Card
              shadow="sm"
              p="lg"
              mb="md"
              bg={"black"}
              style={{
                border: "1px solid #262629",
              }}
              radius={"md"}
            >
              <Title order={4} mb="xs" c={"white"}>
                Challan Details
              </Title>
              <Text c="dimmed" size="sm" mb="md">
                Enter the details for the new delivery challan.
              </Text>

              <Grid gutter="md" mb="md">
                <Grid.Col span={6}>
                  <TextInput
                    label="Challan No."
                    placeholder="Enter challan number"
                    c={"white"}
                    styles={{
                      input: {
                        backgroundColor: "transparent",
                        color: "#fff",
                        border: "1px solid #27272A",
                      },
                    }}
                  />
                </Grid.Col>
                <Grid.Col span={6}>
                  <CustomDateInput mt={"25"} />
                </Grid.Col>
              </Grid>

              <Select
                label="Customer"
                placeholder="Select customer"
                data={["Customer A", "Customer B"]}
                mb="md"
                c={"white"}
                styles={{
                  input: {
                    backgroundColor: "transparent",
                    color: "#fff",
                    border: "1px solid #27272A",
                  },
                }}
              />
              <Switch label="Display Prices on Challan" c={"white"} />
            </Card>

            <Card
              shadow="sm"
              p="lg"
              bg={"black"}
              style={{
                border: "1px solid #262629",
              }}
              radius={"md"}
            >
              <Title order={4} mb="xs" c={"white"}>
                Products
              </Title>

              <Grid
                gutter="sm"
                mb="sm"
                align="center"
                style={{
                  transition: "background-color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#18181A")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
              >
                <Grid.Col span={6}>
                  <Text fw={500} size="sm" c={"dimmed"}>
                    Product
                  </Text>
                </Grid.Col>
                <Grid.Col span={3}>
                  <Text fw={500} size="sm" c={"dimmed"}>
                    Quantity
                  </Text>
                </Grid.Col>
                <Grid.Col span={3}>
                  <Text fw={500} size="sm" c={"dimmed"}>
                    Actions
                  </Text>
                </Grid.Col>
              </Grid>
              <Divider size={1} color={"#262629"} />
              <Grid gutter="sm" align="center" mb="md" mt={10}>
                <Grid.Col span={6}>
                  <Select
                    placeholder="Select product"
                    data={["Product 1", "Product 2"]}
                    styles={{
                      input: {
                        backgroundColor: "transparent",
                        color: "#fff",
                        border: "1px solid #27272A",
                      },
                    }}
                  />
                </Grid.Col>
                <Grid.Col span={3}>
                  <NumberInput
                    placeholder="Enter quantity"
                    styles={{
                      input: {
                        backgroundColor: "transparent",
                        color: "#fff",
                        border: "1px solid #27272A",
                      },
                    }}
                  />
                </Grid.Col>
                <Grid.Col span={3}>
                  <Button
                    variant="subtle"
                    color="white"
                    style={{
                      backgroundColor: "black",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "#27272A")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "black")
                    }
                  >
                    ×
                  </Button>
                </Grid.Col>
              </Grid>

              <Button
                variant="subtle"
                fullWidth
                color="white"
                style={{
                  border: "1px solid #27272A",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#27272A")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "black")
                }
              >
                + Add Product
              </Button>
            </Card>
          </Grid.Col>

          <Grid.Col span={4}>
            <Card
              shadow="sm"
              p="lg"
              withBorder
              bg={"black"}
              style={{
                border: "1px solid #262629",
              }}
            >
              <Title order={4} mb="xs" c={"white"}>
                Summary
              </Title>
              <Group justify="space-between" mt="sm">
                <Text c={"white"}>Total Items:</Text>
                <Text fw={500} c={"white"}>
                  3
                </Text>
              </Group>
              <Group justify="space-between" mt="sm">
                <Text c={"white"}>Estimated Weight:</Text>
                <Text fw={500} c={"white"}>
                  5.2 kg
                </Text>
              </Group>
            </Card>
          </Grid.Col>
        </Grid>
      </Stack>
    </Container>
  );
}
