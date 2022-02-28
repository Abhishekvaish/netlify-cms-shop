module.exports = {
	siteMetadata: {
		siteUrl: `https://www.yourdomain.tld`,
	},
	plugins: [
		`gatsby-transformer-sharp`, // prerequisite for gatsby image
		`gatsby-plugin-sharp`, // prerequisite for gatsby image
		`gatsby-image`,
		`gatsby-transformer-json`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `content`,
				path: `${__dirname}/Content`,
			},
		},
	],
}
