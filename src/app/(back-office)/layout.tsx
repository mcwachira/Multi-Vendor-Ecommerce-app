import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "@/components/backoffice/Sidebar";
import Navbar from "@/components/backoffice/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ample Plus Ecommerce Shop",
  description: "Generated by create next app",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="flex ">
          {/*sidebar*/}
          <Sidebar/>

          <div className="w-full">

              <Navbar/>

              <main className=" ml-60 p-8 bg-slate-900 text-slate-50 min-h-screen mt-16">
                  {children}
              </main>
          </div>
      </div>
  );
}
