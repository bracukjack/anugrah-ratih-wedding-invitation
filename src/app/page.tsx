"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/invitation");
  }, [router]);

  return <main className="w-full bg-primary text-black"></main>;
}
