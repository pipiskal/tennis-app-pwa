import { Select as MantineSelect } from "@mantine/core";

const options = [
  { value: "react", label: "React" },
  { value: "ng", label: "Angular" },
  { value: "svelte", label: "Svelte" },
  { value: "vue", label: "Vue" },
];

const SelectDropdown = () => {
  return <MantineSelect data={options} />;
};

export default SelectDropdown;
