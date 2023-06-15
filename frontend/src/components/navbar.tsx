import { useRouter } from "next/router"
import React from "react"

const Navbar = () => {
  const router = useRouter()
  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom px-4">
      <div className="col-md-3 mb-2 mb-md-0">
        <a
          href="/"
          className="d-inline-flex link-body-emphasis text-decoration-none fs-4"
        >
          MyBlogs
        </a>
      </div>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li>
          <a href="#" className="nav-link px-2 link-primary">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="nav-link px-2">
            Populars
          </a>
        </li>
        <li>
          <a href="#" className="nav-link px-2">
            About
          </a>
        </li>
      </ul>

      <div className="col-md-3 text-end">
        <button
          className="btn btn-outline-primary"
          onClick={() => {
            router.push("./createblog")
          }}
        >
          Crete blog
        </button>
      </div>
    </header>
  )
}

export default Navbar
