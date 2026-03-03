import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ŠKODA ReportIQ — Customer Feedback Dashboard",
  description: "Real-time customer feedback intelligence for Škoda Enyaq and Elroq electric vehicles across CZ, SK, and DE markets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
