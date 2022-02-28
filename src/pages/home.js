import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout/Layout.js"
import "./home.css"

const homePage = ({ data }) => {
	return (
		<Layout>
			<div className="grid-container">
				{data.allItemsJson.edges.map(({ node }) => (
					<div key={node.id} className="item">
						<h3>
							<Link to={"/" + node.id}>{node.itemName}</Link>
						</h3>
						<p>{node.description}</p>
						<Img fluid={node.coverImage.src.childImageSharp.fluid}></Img>
					</div>
				))}
			</div>
		</Layout>
	)
}

export const pageQuery = graphql`
	query AllItemsQuery {
		allItemsJson {
			edges {
				node {
					id
					itemName
					description
					coverImage {
						src {
							childImageSharp {
								fluid(maxWidth: 300) {
									...GatsbyImageSharpFluid
									...GatsbyImageSharpFluidLimitPresentationSize
								}
							}
						}
					}
				}
			}
		}
	}
`

export default homePage
