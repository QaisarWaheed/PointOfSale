import { Stack } from "@mantine/core";

import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <Stack justify="center" align="center" w={"100vw"} h={"100vh"}>
      <Outlet />
    </Stack>
  );
};
export default AuthLayout;
