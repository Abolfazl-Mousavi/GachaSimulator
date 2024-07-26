import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gacha Simulator - Disclaimer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <body className="bg-background text-foreground">{children}</body>;
}
