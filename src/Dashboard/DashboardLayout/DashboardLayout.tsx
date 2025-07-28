import {
  AppShell,
  Avatar,
  Burger,
  Group,
  Stack,
  Text,
  Button,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const navItems = [
  { to: "../dashboard/home", label: "Dashboard" },
  { to: "../dashboard/inventory", label: "Inventory" },
  { to: "../dashboard/challan", label: "Delivery Challans" },
  { to: "../dashboard/invoice", label: "Invoicing" },
  { to: "../dashboard/accounts", label: "Accounts" },
  { to: "../dashboard/expenses", label: "Expenses" },
  { to: "../dashboard/cash-flow", label: "Cash Flow" },
  { to: "../dashboard/report", label: "Reports" },
  { to: "../dashboard/user-management", label: "User Management" },
  { to: "../dashboard/point-of-sale", label: "Point of Sale" },
];

const DashboardLayout = () => {
  const [opened, { toggle }] = useDisclosure();
  const location = useLocation();

  return (
    <AppShell
      padding="md"
      header={{ height: 60 }}
      navbar={{
        width: 260,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
    >
      <AppShell.Header bg="#09090B" px="md">
        <Group h="100%" justify="space-between">
          <Group>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
            <Text c="white" fw={700}>
              Logo
            </Text>
          </Group>
          <Avatar radius="xl" />
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md" bg="#09090B">
        <Stack gap="xs">
          {navItems.map((item) => {
            const isActive = location.pathname.includes(
              item.to.split("/").pop()!
            );

            return (
              <NavLink
                key={item.to}
                to={item.to}
                style={{ textDecoration: "none" }}
              >
                <Button
                  fullWidth
                  variant={isActive ? "light" : "subtle"}
                  color={isActive ? "blue" : "gray"}
                  radius="md"
                  size="md"
                  style={{
                    justifyContent: "start",
                    fontWeight: 500,
                  }}
                >
                  {item.label}
                </Button>
              </NavLink>
            );
          })}
        </Stack>
      </AppShell.Navbar>

      <AppShell.Main bg="#1C1B22">
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};

export default DashboardLayout;
