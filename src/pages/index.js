import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Header from "../components/header"


import Layout from "../components/layout"
import SEO from "../components/seo"

export default class IndexPage extends React.Component {

  state = {
    firstName: "",
    lastName: "",
  }
  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    alert(`Welcome ${this.state.firstName} ${this.state.lastName}!`)
  }
  render() {
    return (
      <>
      <Header siteTitle={`News Builder`} />
      <form onSubmit={this.handleSubmit}>
        <label>
          Article Link:
          <input
            type="text"
            name="articleLink"
            value={this.state.firstName}
            onChange={this.handleInputChange}
          />
        </label><br/>
        <label>
          Article Title:
          <input
            type="text"
            name="articleTitle"
            value={this.state.lastName}
            onChange={this.handleInputChange}
          />
        </label><br/>
        <label>
          Author:
          <input
            type="text"
            name="author"
            value={this.state.lastName}
            onChange={this.handleInputChange}
          />
        </label><br/>
        <label>
          Publisher:
          <input
            type="text"
            name="publisher"
            value={this.state.lastName}
            onChange={this.handleInputChange}
          />
        </label><br/>
        <label>
          Description:
          <textarea
            type="text"
            name="description"
            value={this.state.lastName}
            onChange={this.handleInputChange}
          />
        </label><br/>
        <label>
          Publish Date:
          <input
            type="text"
            name="publishDate"
            value={this.state.lastName}
            onChange={this.handleInputChange}
          />
        </label><br/>
        <button type="submit">Submit</button>
      </form>
      </>
    )
  }
}
// const state = {
//   firstName: "",
//   lastName: "",
// }

// const handleInputChange = event => {
//   const target = event.target
//   const value = target.value
//   const name = target.name
//   setState({
//     [name]: value,
//   })
// }

// const handleSubmit = event => {
//   event.preventDefault()
//   alert(`Welcome ${state.firstName} ${state.lastName}!`)
// }

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" />
//     <h1>Build your news story</h1>
//     {/* <StaticImage
//       src="../images/gatsby-astronaut.png"
//       width={300}
//       quality={95}
//       formats={["AUTO", "WEBP", "AVIF"]}
//       alt="A Gatsby astronaut"
//       style={{ marginBottom: `1.45rem` }}
//     /> */}
//     <form onSubmit={handleSubmit}>
//         <label>
//           First name
//           <input
//             type="text"
//             name="firstName"
//             value={state.firstName}
//             onChange={handleInputChange}
//           />
//         </label>
//         <label>
//           Last name
//           <input
//             type="text"
//             name="lastName"
//             value={state.lastName}
//             onChange={handleInputChange}
//           />
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//     <p>
//       <Link to="/page-2/">Go to page 2</Link> <br />
//       <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
//     </p>
//   </Layout>
// )

// export default IndexPage
