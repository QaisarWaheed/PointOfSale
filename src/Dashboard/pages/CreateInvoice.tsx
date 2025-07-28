import {
  Button,
  Card,
  Container,
  Grid,
  Group,
  NumberInput,
  Select,
  Text,
  TextInput,
  Textarea,
  Title,
  Divider,
  Stack,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import {
  IconChevronLeft,
  IconMail,
  IconPrinter,
  IconDownload,
} from "@tabler/icons-react";
import { useNavigate } from "react-router";
const PRODUCTS = ["Item A", "Item B", "Service C"];
const CUSTOMERS = ["Acme Corp", "Globex", "Umbrella LLC"];
const STATUSES = ["Unpaid", "Paid", "Partially Paid", "Overdue"];

export default function CreateInvoice() {
  const navigate = useNavigate();
  return (
    <Container size={1400} py="lg" fluid>
      <Stack>
        <Group justify="space-between" mb="lg">
          <Group>
            <Button
              variant="subtle"
              leftSection={<IconChevronLeft size={18} color="white" />}
              p={0}
              ta={"center"}
              color="#27272A"
              onClick={() => navigate("/dashboard/invoice")}
            ></Button>
            <Title order={3} c={"white"}>
              Create New Invoice
            </Title>
          </Group>
          <Group>
            <Button variant="filled" bg={"black"} c="white">
              Cancel
            </Button>
            <Button variant="white" color="black">
              Save Invoice
            </Button>
          </Group>
        </Group>

        <Grid gutter="md">
          <Grid.Col span={8}>
            <Card
              withBorder
              p="lg"
              mb="md"
              bg={"black"}
              style={{
                border: "1px solid #262629",
              }}
              radius={"md"}
            >
              <Title order={4} mb="xs" c={"white"}>
                Invoice Details
              </Title>
              <Text c="dimmed" size="sm" mb="md">
                Enter the basic information for your invoice.
              </Text>

              <Grid gutter="md" mb="md">
                <Grid.Col span={6}>
                  <TextInput
                    label="Invoice No."
                    placeholder="INV-001"
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
                  <DatePickerInput
                    label="Invoice Date"
                    placeholder="Select date"
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
              </Grid>

              <Select
                label="Customer/Vendor"
                placeholder="Select customer"
                data={CUSTOMERS}
                mb="md"
                styles={{
                  input: {
                    backgroundColor: "transparent",
                    color: "#fff",
                    border: "1px solid #27272A",
                  },
                }}
              />
              <Select
                label="Payment Status"
                placeholder="Select status"
                data={STATUSES}
                styles={{
                  input: {
                    backgroundColor: "transparent",
                    color: "#fff",
                    border: "1px solid #27272A",
                  },
                }}
              />
            </Card>

            <Card
              withBorder
              p="lg"
              mb="md"
              bg={"black"}
              style={{
                border: "1px solid #262629",
              }}
              radius={"md"}
            >
              <Title order={4} mb="xs">
                Products/Services
              </Title>

              <Grid gutter="xs" mb="xs" align="center">
                <Grid.Col span={5}>
                  <Text fw={500} size="sm" c={"white"}>
                    Product/Service
                  </Text>
                </Grid.Col>
                <Grid.Col span={2}>
                  <Text fw={500} size="sm" c={"white"}>
                    Qty
                  </Text>
                </Grid.Col>
                <Grid.Col span={2}>
                  <Text fw={500} size="sm" c={"white"}>
                    Unit Price
                  </Text>
                </Grid.Col>
                <Grid.Col span={1}>
                  <Text fw={500} size="sm" c={"white"}>
                    Tax (%)
                  </Text>
                </Grid.Col>
                <Grid.Col span={1}>
                  <Text fw={500} size="sm" c={"white"}>
                    Total
                  </Text>
                </Grid.Col>
                <Grid.Col span={1}>
                  <Text fw={500} size="sm" c={"white"}>
                    Action
                  </Text>
                </Grid.Col>
              </Grid>

              <Grid gutter="xs" align="center" mb="sm">
                <Grid.Col span={5}>
                  <Select
                    placeholder="Select item"
                    data={PRODUCTS}
                    styles={{
                      input: {
                        backgroundColor: "transparent",
                        color: "#fff",
                        border: "1px solid #27272A",
                      },
                    }}
                  />
                </Grid.Col>
                <Grid.Col span={2}>
                  <NumberInput
                    min={0}
                    step={1}
                    placeholder="0"
                    styles={{
                      input: {
                        backgroundColor: "transparent",
                        color: "#fff",
                        border: "1px solid #27272A",
                      },
                    }}
                  />
                </Grid.Col>
                <Grid.Col span={2}>
                  <NumberInput
                    min={0}
                    step={0.01}
                    placeholder="0.00"
                    styles={{
                      input: {
                        backgroundColor: "transparent",
                        color: "#fff",
                        border: "1px solid #27272A",
                      },
                    }}
                  />
                </Grid.Col>
                <Grid.Col span={1}>
                  <NumberInput
                    min={0}
                    step={0.01}
                    placeholder="0%"
                    styles={{
                      input: {
                        backgroundColor: "transparent",
                        color: "#fff",
                        border: "1px solid #27272A",
                      },
                    }}
                  />
                </Grid.Col>
                <Grid.Col span={1}>
                  <Text fw={500} c={"white"}>
                    $0.00
                  </Text>
                </Grid.Col>
                <Grid.Col span={1}>
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

              <Divider my="sm" />
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
                + Add Item
              </Button>
            </Card>

            <Card
              withBorder
              p="lg"
              bg={"black "}
              style={{
                border: "1px solid #262629",
              }}
              radius={"md"}
            >
              <Title order={4} mb="xs" c={"white"}>
                Notes
              </Title>
              <Textarea
                placeholder="Any additional notes for the invoice..."
                minRows={4}
                styles={{
                  input: {
                    backgroundColor: "transparent",
                    color: "#fff",
                    border: "1px solid #27272A",
                  },
                }}
              />
            </Card>
          </Grid.Col>

          <Grid.Col span={4}>
            <Card
              withBorder
              p="lg"
              bg={"black"}
              style={{
                border: "1px solid #262629",
              }}
              radius={"md"}
            >
              <Title order={4} mb="md" c={"white"}>
                Invoice Summary
              </Title>

              <Group justify="space-between" mb="xs">
                <Text c="white">Subtotal:</Text>
                <Text c={"white"}>$0.00</Text>
              </Group>
              <Group justify="space-between" mb="xs">
                <Text c="white">Tax:</Text>

                <Text c={"white"}>$0.00</Text>
              </Group>

              <Divider my="sm" />

              <Group justify="space-between" mb="md">
                <Text fw={700} c={"white"}>
                  Total:
                </Text>
                <Text fw={700} c={"white"}>
                  $0.00
                </Text>
              </Group>

              <Button
                fullWidth
                mb="xs"
                leftSection={<IconDownload size={16} />}
              >
                Download PDF
              </Button>
              <Button
                fullWidth
                variant="default"
                mb="xs"
                leftSection={<IconPrinter size={16} />}
              >
                Print Invoice
              </Button>
              <Button
                fullWidth
                variant="default"
                leftSection={<IconMail size={16} />}
              >
                Email Invoice
              </Button>
            </Card>
          </Grid.Col>
        </Grid>
      </Stack>
    </Container>
  );
}
