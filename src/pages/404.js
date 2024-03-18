import * as React from "react"
import { Link } from "gatsby"
import { Logo } from "../componenets/layout"

const NotFoundPage = () => {
  return (
    <main className="container">
      <div style=
        {{width:"25%", paddingBottom:"2%", marginLeft:"-5%"}}
      ><Logo /></div>
      <h1>Page not found</h1>
      <p>
        Sorry 😔, we couldn’t find what you were looking for.
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage
export const Head = () => <title>Oopsies!!</title>
