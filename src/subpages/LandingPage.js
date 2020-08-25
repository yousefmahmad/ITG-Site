import React from "react"
import Navbar from "../components/Navbar"
import { useStaticQuery, graphql, Link } from "gatsby"

function LandingPage() {
  const { pageDataYaml } = useStaticQuery(graphql`
    {
      pageDataYaml {
        welcomeText
        landingText
      }
    }
  `)

  const { welcomeText, landingText } = pageDataYaml

  const pageStyle = {
    backgroundImage:
      "url(https://images.pexels.com/photos/113338/pexels-photo-113338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    backgroundBlendMode: "multiply",
  }

  const welcomeStyle = {
    letterSpacing: "0.25em",
  }

  return (
    <section id="home" style={pageStyle} className="container-fluid">
      <div className="container">
        <div className="centerItems">
          <h6 style={welcomeStyle}>{welcomeText}</h6>
          <h1>{landingText}</h1>
        </div>
      </div>
    </section>
  )
}

export default LandingPage
