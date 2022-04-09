import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import TheProtector from "./components/PrivateRoute"
import Dashboard from "./pages/Dashboard"
import LoginForm from "./pages/LoginForm"
import RegisterForm from "./pages/RegisterForm"

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/** Allow all users to visit regardless of auth */}
				<Route path="/s" exact element={<div />} />

				{/** Allow only if user hasn't signed in */}
				<Route path="/login" exact element={<LoginForm />} />
				<Route
					path="/register"
					exact
					element={
						<TheProtector policy="loggedOutOnly">
							<RegisterForm />
						</TheProtector>
					}
				/>

				{/** Allow only if user is signed in */}
				<Route
					path="/dashboard"
					exact
					element={
						<TheProtector>
							<Dashboard />
						</TheProtector>
					}
				/>
			</Routes>
		</BrowserRouter>
	)
}

export default App
