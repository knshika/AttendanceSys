import { signOut } from "firebase/auth"
import React from "react"
import { auth } from "../firebase"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const Dashboard = () => {
	const { user } = useAuth()
	const navigate = useNavigate()

	const handleSubmit = () => {
		signOut(auth)
			.then(navigate("/login"))
			.catch((error) => {
				console.log(error)
			})
	}

	return (
		<div>
			<h1>Welcome {user && user.email}!!</h1>
			<button className="mt-2 p-1 border-2 " onClick={handleSubmit}>
				Logout
			</button>
		</div>
	)
}

export default Dashboard
