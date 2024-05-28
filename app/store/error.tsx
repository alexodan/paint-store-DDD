"use client";

import Link from "next/link";

export default function StoreErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-16">
      <h1 className="text-6xl">Oops! Something wrong happened here.</h1>
      <h2 className="text-2xl">
        <Link href="/">Go home</Link>
      </h2>
    </div>
  );
}
