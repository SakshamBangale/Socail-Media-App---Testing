'use client'
import Link from "next/link"

export default function Sidebar({ open, setOpen }) {
  return (
    <div
      style={{
        ...styles.sidebar,
        width: open ? "220px" : "70px"
      }}
    >
      <div style={styles.logo} onClick={() => setOpen(!open)}>
        ☰
      </div>

      <nav style={styles.nav}>
        <Link href="/" style={styles.link}>
          🏠 {open && "Home"}
        </Link>

        <Link href="/profile" style={styles.link}>
          👤 {open && "Profile"}
        </Link>

        <Link href="/dashboard" style={styles.link}>
          📊 {open && "Dashboard"}
        </Link>

        <Link href="/settings" style={styles.link}>
          ⚙️ {open && "Settings"}
        </Link>
      </nav>
    </div>
  )
}

/* ✅ THIS MUST EXIST */
const styles = {
  sidebar: {
    height: "100vh",
    background: "#111",
    color: "white",
    padding: "20px 10px",
    position: "fixed",
    left: 0,
    top: 0,
    transition: "0.3s",
    overflow: "hidden"
  },
  logo: {
    fontSize: "24px",
    cursor: "pointer",
    marginBottom: "30px",
    textAlign: "center"
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },
  link: {
    color: "white",
    textDecoration: "none",
    padding: "10px",
    borderRadius: "8px",
    background: "#222",
    whiteSpace: "nowrap"
  }
}
