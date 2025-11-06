import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "समाजसेवा - बदलाव हमसे शुरू होता है",
  description: "एक प्रेरणादायक वीडियो जो समाजसेवा की महत्ता को दर्शाता है",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi">
      <body>{children}</body>
    </html>
  );
}
