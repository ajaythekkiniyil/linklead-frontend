import { Montserrat, Lato } from "next/font/google";
import "./globals.css";

// Import Montserrat for headings
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// Import Lato for body text
const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata = {
  title: "LinkLead.in - Connecting Businesses with Customers in kerala",
  description: "Discover how LinkLead.in bridges the gap between businesses and customers with innovative solutions. Enhance your connections, lead the market, and grow your brand.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.svg" />
      </head>
      <body
        className={`${montserrat.variable} ${lato.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
