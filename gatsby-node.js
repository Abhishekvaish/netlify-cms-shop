const path = require("path")

exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions

	const itemTemplate = path.resolve("src/templates/item-template.js")

	return graphql(`
		query MyQuery {
			allItemsJson {
				edges {
					node {
						id
					}
				}
			}
		}
	`).then(res => {
		if (res.errors) return Promise.reject(res.errors)
		res.data.allItemsJson.edges.forEach(edge => {
			createPage({
				path: edge.node.id,
				component: itemTemplate,
				context: {
					id: edge.node.id,
				},
			})
		})
	})
}
