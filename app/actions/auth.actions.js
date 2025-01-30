"use server";

import { signIn, signOut } from "@/auth";

export async function GoogleSignIn() {
  await signIn("google", { callbackUrl: "http://localhost:3000" });
}

export async function GithubSignIn() {
  await signIn("github", { callbackUrl: "http://localhost:3000" });
}

export async function SignOutAccount() {
  await signOut();
}
