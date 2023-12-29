import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Helmet } from "react-helmet-async"

const Root = () => {
  return (
    <div className="font-open-sans">
    <Helmet>
    <title>Bistro Boss</title>
  </Helmet>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
    </div>
  )
}

export default Root