import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ApolloWrapper } from "../lib/apolloprovider";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <title>Explore your world | Rondevu</title>
        <meta name="apple-itunes-app" content="app-id=6474651875" />
        </head>
        <body className={`${inter.className} dark `}>
          <ApolloWrapper>{children}</ApolloWrapper>
        </body>
      </html>
    </ClerkProvider>
  );
}
