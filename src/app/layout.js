import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Soul of Hair | Professionel Hårpleje & Styling",
  description: "Oplev fremragende hårpleje hos Soul of Hair Salon. Ekspert klipning, levende farver og personlig styling i et moderne, indbydende miljø.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
