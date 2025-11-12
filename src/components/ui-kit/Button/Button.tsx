import { Button as MantineButton } from "@mantine/core";

interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: "small" | "medium" | "large";
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <MantineButton variant="primary" onClick={onClick}>
      {label}
    </MantineButton>
  );
};

export default Button;
