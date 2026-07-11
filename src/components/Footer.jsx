import React from 'react'

function Footer(){
  return(
    <footer style={styles.footer}>
      <p>2026 fakeAPIStore. All rights are resreved</p>
    </footer>
  )
}

const styles={
  footer:{
    textAlign:"center",
    padding:"20px",
    background:"grey",
    color:"white",
    height:"15vh"
  }
}

export default Footer