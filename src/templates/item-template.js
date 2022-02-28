import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout/Layout.js"
import "./item-template.css"

const detailPage = ({ data }) => (
	<Layout>
		<h3> {data.itemsJson.itemName}</h3>

		<p> {data.itemsJson.description} </p>

		<div className="img-container">
			<div>
				<Img fluid={data.itemsJson.coverImage.src.childImageSharp.fluid}></Img>
			</div>
			{data.itemsJson.addtionalImages.map(({ src }) => (
				<div key={src.id}>
					<Img fluid={src.childImageSharp.fluid}></Img>
				</div>
			))}
		</div>
	</Layout>
)

export const pageQuery = graphql`
	query itemDetailQuery($id: String) {
		itemsJson(id: { eq: $id }) {
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
			addtionalImages {
				src {
					id
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
`

export default detailPage
