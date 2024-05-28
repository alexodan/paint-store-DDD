import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Suspense, cache } from "react";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-commerce site",
  description: "What are you going to paint?",
};

type User = {
  isAuthenticated: boolean;
};

const getUser = cache(async function () {
  return new Promise<User>((res) => {
    res({ isAuthenticated: true });
  });
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getUser();

  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="w-full fixed flex items-baseline justify-between p-6 bg-white">
          <h1 className="text-3xl max-w-7xl">
            <Link href="/">Paint store</Link>
          </h1>
          <nav>
            <ul className="flex flex-row justify-center">
              <Suspense>
                {user && (
                  <li className="mx-4">
                    <Link href="/customer/details">Account</Link>
                  </li>
                )}
              </Suspense>
              <li className="mx-4">
                <Link href="/store">Store</Link>
              </li>
              <li className="mx-4">
                <Link href="/cart">Cart</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Providers>
          <main className="pt-20">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
