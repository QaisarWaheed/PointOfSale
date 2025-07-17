import { AppShell, Avatar, Burger, Group, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { NavLink, Outlet } from "react-router";

const DashboardLayout = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header bg={"#09090B"}>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <Group justify="space-between" mr={25}>
          <Text mt={5}>Logo</Text>
          <Avatar mt={10} />
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md" w={200} bg={"#09090B"}>
        <NavLink to={"../dashboard/home"}>Dashboard</NavLink>
        <NavLink to="../dashboard/inventory">Inventory</NavLink>
        <NavLink to={"../dashboard/challan"}>Delivery Challans</NavLink>
        <NavLink to={"../dashboard/invoicing"}>Invoicing</NavLink>
        <NavLink to={"../dashboard/accounts"}>Accounts</NavLink>
        <NavLink to={"../dashboard/expenses"}>Expenses</NavLink>
        <NavLink to={"../dashboard/cash-flow"}>Cash Flow</NavLink>
        <NavLink to={""}>Reports</NavLink>
        <NavLink to={""}>User Management</NavLink>
        <NavLink to={""}>Point of Sale</NavLink>
      </AppShell.Navbar>

      <AppShell.Main bg={"#1C1B22"}>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};
export default DashboardLayout;
