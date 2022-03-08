import React from "react"
import ReactDOM from "react-dom"
import "twind/shim"
import { setup } from "twind"
import App from "./App"

setup({
	theme: {
		extend: {
			fontFamily: {
				sans: ["'Readex Pro'", "sans-serif"],
			},
		},
	},
})

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
)
