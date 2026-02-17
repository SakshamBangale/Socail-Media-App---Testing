'use client'
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import './globals.css';



export default function RootLayout({ children }) {

const [open, setOpen] = useState(false)

  return (
    <html lang="en">
      <body
      
      >
         <Sidebar open={open} setOpen={setOpen} />
        {children}
      </body>
    </html>
  );
}
