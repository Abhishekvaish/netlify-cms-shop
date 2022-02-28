import React from "react"
import "./Layout.css"

const layout = ({ children }) => (
	<>
		<header></header>
		<main>{children}</main>
		<footer>
			<div className="container">
				© {new Date().getFullYear()},<br /> Abhishek Vaish
			</div>
		</footer>
	</>
)

export default layout
