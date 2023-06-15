import Navbar from "@/components/navbar"
import React from "react"
import { LayoutProps } from "./layout.props"

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default Layout
