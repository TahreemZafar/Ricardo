import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ricardo Portfolio",
  description: "Ricardo is a full stack-developer with 8 years of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 dark:bg-gray-900 dark:text-gray-50/90 text-gray-950 relative pt-[7.50rem] sm:pt-36 `}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[7rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>

        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[8rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-10rem] dark:bg-[#676394]"></div>

          <ThemeContextProvider>
        <ActiveSectionContextProvider>
          <Header />
          {children}

          <Toaster position="bottom-left" />

          <ThemeSwitch />
        </ActiveSectionContextProvider>
        </ThemeContextProvider>

      </body>
    </html>
  );
}
