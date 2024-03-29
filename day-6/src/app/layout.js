import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/provider/ReduxProvider";
import { Toaster } from "react-hot-toast";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
      <ReduxProvider>
      <html lang="en">
        <body className={`bg-gray-50 ${inter.className}`}>
          {children}
          <Toaster />
        </body>
      </html>
      </ReduxProvider>

   
  );
}
