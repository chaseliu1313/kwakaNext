import "./globals.css";
import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import { LanguageContextProvider } from "@lan/index";
import NavBar from "@component/navBar/navBar";
import { light } from "@constant/values";

const comfortaa = Comfortaa({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kwaka Tech",
  description: "Kwaka Tech Inc Official Website",
  viewport: { width: "device-width", initialScale: 1 },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      id="root"
      data-theme={light}
      className="bg-bkg !scroll-smooth"
    >
      <LanguageContextProvider>
        <body className={comfortaa.className}>
          <NavBar />
          {children}
        </body>
      </LanguageContextProvider>
    </html>
  );
}
