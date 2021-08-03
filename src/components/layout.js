import React from "react"

import { GlobalStyle } from "./styles/GlobalStyles"


const Layout = ({ children }) => {

  return (
    <>
    <GlobalStyle />
     
      
        <main>{children}</main>
        
    </>
  )
}



export default Layout
