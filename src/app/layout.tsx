import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aço Moreira - Do aço á estrutura. Tudo em um só lugar",
  description:
    "A força do aço com qualidade e confiança. A Aço Moreira oferece soluções completas em estruturas metálicas com segurança e agilidade em Balsas MA.",
  keywords:
    "estruturas metálicas, Balsas MA, aço moreira, construção metálica, galpões metálicos, coberturas metálicas, torres metálicas, telecomunicações",
  authors: [{ name: "Aço Moreira" }],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="canonical" href="https://www.acomoreira.com.br" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon-192x192.png"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#dc2626" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
