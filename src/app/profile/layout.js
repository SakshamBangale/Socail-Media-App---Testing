'use client'
import { useState } from "react"
import Sidebar from "@/components/Sidebar"

export default function RootLayout({ children }) {
  const [open, setOpen] = useState(false)

  return (
    <html>
      <body style={{ display: "flex" }}>
        
        <Sidebar open={open} setOpen={setOpen} />

        <div
          style={{
            marginLeft: open ? "220px" : "70px",
            transition: "0.3s",
            width: "100%"
          }}
        >
          {children}
        </div>

      </body>
    </html>
  )
}
