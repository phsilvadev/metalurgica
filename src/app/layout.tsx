import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aço Moreira - Do aço á estrutura. Tudo em um só lugar",
  description:
    "A força do aço com qualidade e confiança. A Aço Moreira oferece soluções completas em estruturas metálicas com segurança e agilidade em Balsas MA.",
  keywords:
    "estruturas metálicas, Balsas MA, aço moreira, construção metálica, galpões metálicos, coberturas metálicas, torres metálicas, telecomunicações",
  authors: [{ name: "Aço Moreira" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Aço Moreira - Do aço á estrutura. Tudo em um só lugar",
    description:
      "A força do aço com qualidade e confiança. Soluções completas em Do aço á estrutura. Tudo em um só lugar.",
    type: "website",
    locale: "pt_BR",
    siteName: "Aço Moreira",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aço Moreira - Do aço á estrutura. Tudo em um só lugar",
    description:
      "A força do aço com qualidade e confiança. Soluções completas em estruturas metálicas.",
  },
  icons: "LOGO_METALURGICA.svg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <Head>
        <link rel="canonical" href="https://www.acomoreira.com.br" />
        <Link rel="preconnect" href="https://fonts.googleapis.com" />
        <Link rel="preconnect" href="https://fonts.gstatic.com" />
        <Link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#dc2626" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
