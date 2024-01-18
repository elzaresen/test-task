import styled from "styled-components";

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const FormLabel = styled.label`
  font-size: 1rem;
  color: #333;
  font-weight: 500;
`;

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FormMessage = styled.p<{ error?: boolean }>`
  font-size: 0.725rem;
  margin: 0;
  color: ${(props) => (props.error ? "red" : "#333")};
`;
