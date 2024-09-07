 "use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarHeader from "@/components/Navbar";
import Footer from "@/components/Footer";
import { QueryClient, QueryClientProvider } from "react-query"
// import { ToastContainer } from "react-toastify"
// import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });
const client = new QueryClient()


// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
      className={inter.className}>
         <QueryClientProvider client={client}>
        {/* <NavbarHeader/> */}
        {children}
        </QueryClientProvider>
        {/* <ToastContainer 
                className='h-[80vh]' 
                newestOnTop={true}
            /> */}
        {/* <Footer/> */}
        </body>
    </html>
  );
}
