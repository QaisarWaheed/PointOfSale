import { useForm } from "@mantine/form";
import { TextInput, Button, Card, Title, Stack, Text } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useDisclosure } from "@mantine/hooks";
import { PasswordInput } from "@mantine/core";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";
const Login = () => {
  const { login } = useAuth();
  const [visible, { toggle }] = useDisclosure(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    const res = await axios.post("/api/login", { email, password });
    if (res.status !== 200) {
      login({ id: "1", email, name: "User" });
      navigate("/dashboard");
    } else {
      notifications.show({ message: "Login failed", color: "red" });
    }
  };
  const form = useForm({
    mode: "uncontrolled",
    initialValues: { email: "" },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const handleError = (errors: typeof form.errors) => {
    if (errors.name) {
      notifications.show({ message: "Please fill name field", color: "red" });
    } else if (errors.email) {
      notifications.show({
        message: "Please provide a valid email",
        color: "red",
      });
    }
  };

  return (
    <Card
      withBorder
      shadow="md"
      w={400}
      h={400}
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Stack align="center" justify="center">
        <form onSubmit={form.onSubmit(console.log, handleError)}>
          <Stack justify="center" gap={10}>
            <Stack justify="center" align="center" gap={10}>
              <Title order={3}>Point of Sale</Title>
              <Text c={"#71717A"}>Sign in to your account</Text>
            </Stack>

            <TextInput
              value={email}
              onChange={(event) => setEmail(event.currentTarget.value)}
              w={"350"}
              label="Email"
              placeholder="Email"
            />
            <PasswordInput
              value={password}
              onChange={(event) => setPassword(event.currentTarget.value)}
              label="Password"
              placeholder="Enter your password"
              visible={visible}
              onVisibilityChange={toggle}
            />
            <Button
              bg="#000000ff"
              fullWidth
              type="submit"
              mt="sm"
              onClick={handleLogin}
            >
              Login
            </Button>
          </Stack>
        </form>
      </Stack>
    </Card>
  );
};

export default Login;
