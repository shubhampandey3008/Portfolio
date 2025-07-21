import type { Metadata } from "next";
import { Inter, Kalam, Gloria_Hallelujah } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const kalam = Kalam({ 
  weight: ['300', '400', '700'],
  subsets: ["latin"],
  variable: '--font-kalam'
});
const gloriaHallelujah = Gloria_Hallelujah({ 
  weight: ['400'],
  subsets: ["latin"],
  variable: '--font-gloria-hallelujah'
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
      <body className={`${inter.className} ${kalam.variable} ${gloriaHallelujah.variable}`}>
        {children}
      </body>
    </html>
  );
}
