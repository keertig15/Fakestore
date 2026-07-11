import React from 'react'
import { Link } from 'react-router-dom';

function HeroSaction() {
  return (
    <section style={styles.hero}>
      <div style={styles.overlay}>
        <h1 style={styles.heading}>Welcome to FakeAPIStore</h1>
        <p style={styles.para}>shop the latest products</p>
        <Link to="/product" style={styles.link}>Shop Now</Link>
      </div>
    </section>
  )
}

const styles = {
  hero: {
    backgroundImage: "url('https://img.magnific.com/free-photo/shop-clothing-clothes-shop-hanger-modern-shop-boutique_1150-8886.jpg?semt=ais_hybrid&w=740&q=80')",
    width: "100%",
    height: "85vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  heading: {
    color: "#ffffff",
    fontSize: "3rem",
  },
  para: {
    color: "#ffffff",
    fontSize: "1.5rem",
    marginTop: "10px",
  },
  link: {
    display: "inline-block",
    background:"black",
    marginTop:"20px",
    padding:"10px 25px",
    color:"white",
    textDecoration:"none",
    borderRadius:"10px"
  }  
}


export default HeroSaction