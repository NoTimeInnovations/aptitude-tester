import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aptitude tester",
  description: "Generated by create next app",
  manifest: "/manifest.json",
  icons: { apple: "/media/img/arrow.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#317EFB" />
      </head>
      {process.env.NODE_ENV == "production" && (
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7589879263289412"
          crossorigin="anonymous"
        ></script>
      )}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
