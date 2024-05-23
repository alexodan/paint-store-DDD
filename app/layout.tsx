import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-commerce site",
  description: "What are you going to paint?",
};

// How does "Separation of concerns" fit here? Call to AuthService or something?
async function getUser(): Promise<{ isAuthenticated: boolean }> {
  return new Promise((res) => {
    setTimeout(() => {
      res({ isAuthenticated: true });
    }, 2000);
  });
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getUser();

  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="w-full fixed flex items-baseline justify-between p-6">
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
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
