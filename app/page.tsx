import type { Metadata } from "next";
import LoginPageTemplate from "./LoginPageTemplate";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};

export default function Home() {
  return (
    <main>
      <LoginPageTemplate />
    </main>
  );
}
