import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Chunnilal Mega Mart Pvt. Ltd. — The Fashion Gallery",
  description:
    "Bihar's premier fashion destination. Traditional Indian wear meets contemporary Western styles. 5 stores across Bihar — Patna, Hajipur, Buxer, Biharsharif.",
  keywords:
    "fashion, Bihar, Patna, clothing, ethnic wear, men fashion, women fashion, kids fashion, home furnishing",
  openGraph: {
    title: "Chunnilal Mega Mart — The Fashion Gallery",
    description: "Your premier fashion destination across Bihar",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
