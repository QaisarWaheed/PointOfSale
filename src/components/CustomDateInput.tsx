import { Input } from "@mantine/core";

interface InputProps {
  mt: Number;
}

const CustomDateInput = (props: InputProps) => {
  return (
    <Input
      mt={props.mt}
      type="Date"
      styles={{
        input: {
          backgroundColor: "#09090B",
          color: "#FFFFFF",
          border: "1px solid #27272A",
        },
      }}
      c={"white"}
      w={360}
      placeholder="Date"
    />
  );
};
export default CustomDateInput;
