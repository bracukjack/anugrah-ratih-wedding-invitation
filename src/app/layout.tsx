import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Anugrah Ratih Invitation",
  description: "My invitation for the Anugrah Ratih Conference 2023",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-primary`}
      >
        <main className="w-full bg-primary text-black">
          <Suspense>{children}</Suspense>

          <div className="fixed top-1/2 right-4 animate-spin-slow z-50">
            <Link href="/">
              <Image
                width={200}
                height={200}
                className="w-16 md:w-24"
                src={"/svg/stamp.svg"}
                alt={"CMPT STAMTOK"}
              />
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
