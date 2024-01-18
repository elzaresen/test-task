"use client";

import Button from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Input from "@/components/ui/input";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { login } from "./actions";

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 1rem;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  box-sizing: border-box;
  max-width: 1200px;
  padding: 0 1rem;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default function Home() {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    setSubmitting,
  } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      login(values)
        .then(() => {
          alert("Login success");
        })
        .catch((e) => {
          alert(e.message);
        })
        .finally(() => {
          setSubmitting(false);
        });
    },
  });

  return (
    <main>
      <Wrapper>
        <Container>
          <Card>
            <CardTitle>Login to your account</CardTitle>
            <form onSubmit={handleSubmit}>
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Type something..."
                    name="username"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                  />
                  {errors.username && touched.username && (
                    <FormMessage error>{errors.username}</FormMessage>
                  )}
                </FormControl>
              </FormItem>
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Type something..."
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  {errors.password && touched.password && (
                    <FormMessage error>{errors.password}</FormMessage>
                  )}
                </FormControl>
              </FormItem>
              <Button block type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </form>
          </Card>
        </Container>
      </Wrapper>
    </main>
  );
}
