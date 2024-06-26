import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { LayoutProps } from "../../.next/types/app/layout";
import { SessionProvider } from "next-auth/react";
import AuthProvider from "../../providers/AuthProvider";
import { Toaster } from "react-hot-toast";
import { QueryClient } from "react-query";
import QueryClientProvider from "../../providers/QueryClientProvider";
const inter = Inter({ subsets: ["latin"] });



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

type PropTypes = LayoutProps;

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>

        <QueryClientProvider>
          <AuthProvider>
            <Toaster />

            {children}
          </AuthProvider>

        </QueryClientProvider>
        
     
      </body>
    </html>
  );
}
