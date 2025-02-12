import "../styles/globals.css";
import { Onest, Figtree } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

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
      <head>
        <meta
          name="google-site-verification"
          content="yNOPETeedrRcS6SmekSKy-Yfj59X3Ctii4jSboeweq0"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-L8GMBT5CXD"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-L8GMBT5CXD');
          `,
          }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-16x16.png"
          sizes="16x16"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-32x32.png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/android-chrome-512x512.png" />
        <link rel="apple-touch-icon" href="/android-chrome-192x192.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${onest.className} ${figtree.className}`}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
