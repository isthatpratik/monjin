import "../styles/globals.css";
import { Onest, Figtree } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

const onest = Onest({ subsets: ["latin"] });
const figtree = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Monjin - Hire Top Talent Faster",
  description: "Expert interviews for faster hiring",
};

export const experimental_ppr = true;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${onest.className} ${figtree.className}`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
