import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h1>FakeAPIStore</h1>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/product" style={styles.link}>Products</Link>
      </div>
    </nav>
  )
}

const styles = {
  nav: {
        display: 'flex',
        justifyContent: 'space-between',
        background: "grey",
        alignItems: 'center',
        padding: '10px 20px',
        color:"#ffffff"
    },
  links: {
        display: 'flex',
        gap: '20px'
  },
  link: {
        color: "#ffffff",
        textDecoration: 'none',
        fontWeight:"500"
  }
}

export default Navbar