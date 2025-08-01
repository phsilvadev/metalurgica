import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Metalúrgica Moreira - Estruturas Metálicas em Balsas MA",
  description:
    "O poder do aço com uma empresa de confiança. Soluções completas em estruturas metálicas com qualidade, segurança e agilidade em Balsas MA.",
  keywords:
    "estruturas metálicas, Balsas MA, construção, aço, galpões, coberturas metálicas, torres, telecomunicações",
  authors: [{ name: "Metalúrgica Moreira" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Metalúrgica Moreira - Estruturas Metálicas em Balsas MA",
    description:
      "O poder do aço com uma empresa de confiança. Soluções completas em estruturas metálicas.",
    type: "website",
    locale: "pt_BR",
    siteName: "Metalúrgica Moreira",
  },
  twitter: {
    card: "summary_large_image",
    title: "Metalúrgica Moreira - Estruturas Metálicas em Balsas MA",
    description:
      "O poder do aço com uma empresa de confiança. Soluções completas em estruturas metálicas.",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#dc2626" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
