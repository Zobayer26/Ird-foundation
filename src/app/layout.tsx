import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Container from "@/components/Container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dua & Ruqyah | All Duas Collection",
  description: "duaruqyah.com",
  icons:'/unnamed 1.png'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
        <Container>
        {children}
        </Container>
        </main>
        </body>
    </html>
  );
}
