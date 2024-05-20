import { Open_Sans } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";

const inter = Open_Sans({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Digital Product Passport",
  description: "Discover more about your clothing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Suspense>
        <body className={inter.className}>{children}</body>
        <body className={inter.className}>{children}</body>
      </Suspense>
    </html>
  );
}
