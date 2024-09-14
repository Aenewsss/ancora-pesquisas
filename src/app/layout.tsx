import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const roboto_condensed = Roboto_Condensed({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Âncora Pesquisas",
  description: "Sua campanha eleitoral é aqui. Âncora Pesquisas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <Head>
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
      </Head>

      <body className={roboto_condensed.className}>{children}</body>
    </html>
  );
}
