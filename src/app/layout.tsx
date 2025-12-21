import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ThemeRegistry from "@/theme/ThemeRegistry";
import "./globals.css";

// Next.js font optimization - preloads font and prevents FOUT/FOIT
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
  fallback: [
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "sans-serif",
  ],
});

export const metadata: Metadata = {
  title: "Prem Chand Serawat - Portfolio",
  description:
    "Full Stack Software Engineer with 6+ years of experience building scalable web apps, SaaS products, and delightful user experiences.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className={inter.variable}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ThemeRegistry>{children}</ThemeRegistry>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
