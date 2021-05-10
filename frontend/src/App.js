// import logo from "./logo.svg"
import "antd/dist/antd.css"
import "./assets/index.scss"

import { Layout } from "antd"
import MainHeader from "./components/headers/Header"
import Banner3 from "./components/banners/Banner3"
import Compare from "./components/compares/Compare"
import Contact from "./components/contacts/Contact"
import MainFooter from "./components/footers/Footer"

function App() {
  return (
    <>
      <Layout>
        <MainHeader />
        <Banner3 />
        <Compare />
        <Contact />
        <MainFooter />
      </Layout>
    </>
  )
}

export default App
