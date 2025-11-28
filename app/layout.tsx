import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

// Add fallback fonts and swap display
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  fallback: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Jenga Tech",
  description: "World Leading Tech Institute",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
        <Toaster position="top-right"/>
      </body>
    </html>
  );
}