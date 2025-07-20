import { Input, type MantineSpacing } from "@mantine/core";

interface InputProps {
  mt: MantineSpacing | string;
}

const CustomDateInput = (props: InputProps) => {
  return (
    <Input
      mt={props.mt}
      type="date"
      styles={{
        input: {
          backgroundColor: "#09090B",
          color: "#FFFFFF",
          border: "1px solid #27272A",
        },
      }}
      c="white"
      w={360}
      placeholder="Date"
    />
  );
};

export default CustomDateInput;

