import styled from "styled-components";

type ComponentProps = {
  block?: boolean;
};

type Props = ComponentProps & {
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
  disabled?: boolean;
};

const Component = styled.button<{ block?: boolean }>`
  cursor: pointer;
  background-color: #303030;
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  font-weight: 500;
  border-radius: 0.25rem;
  border: none;
  width: ${(props) => (props.block ? "100%" : "auto")};

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    &:hover {
      background-color: #303030;
    }
  }

  &:hover {
    background-color: #202020;
  }
`;

const Button = ({ children, ...rest }: Props) => {
  return <Component {...rest}>{children}</Component>;
};

export default Button;
