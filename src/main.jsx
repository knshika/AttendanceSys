import React from "react"
import ReactDOM from "react-dom"
import "twind/shim"
import { setup } from "twind"
import App from "./App"
import { AuthProvider } from "./context/AuthContext"

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
		<AuthProvider>
			<App />
		</AuthProvider>
	</React.StrictMode>,
	document.getElementById("root")
)
