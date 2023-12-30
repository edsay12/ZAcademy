"use client"
import Button from "@/components/Button";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handdleClick = () => {
   router.push("/auth?redirect")
  };
  return <Button text="Deslogar" onClick={() =>handdleClick()}/>
}
