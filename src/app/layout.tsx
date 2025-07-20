import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const caveat = Caveat({ 
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: '--font-caveat'
});

export const metadata: Metadata = {
  title: "Janvi Kalra - Portfolio",
  description: "Engineer by passion, debater by nature, struggling writer by choice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${caveat.variable}`}>
        {children}
      </body>
    </html>
  );
}
