import "./globals.css";
import Navbar from "@/components/Navbar";
import localFont from "next/font/local";

const modernNegra = localFont({
  src: "../public/fonts/Modern-Negra-Demo.ttf",
  variable: "--font-modern-negra",
});

export const metadata = {
  title: "Pour Tail",
  description: "Pour Tail - Your premium destination for exceptional cocktails and bar experiences",
  icons: {
    icon: "../public/images/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className={modernNegra.variable}>
        <main className="">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}