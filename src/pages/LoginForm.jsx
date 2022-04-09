import React, { useState } from "react"
import { auth } from "../firebase"
import { useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const LoginForm = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const navigate = useNavigate()

	const handleSubmit = () => {
		signInWithEmailAndPassword(auth, email, password)
			.then((response) => {
				console.log(response)
				navigate("/dashboard")
			})
			.catch((error) => {
				if (error.code === "auth/wrong-password") {
					toast.error("Please check the Password")
				}
				if (error.code === "auth/user-not-found") {
					toast.error("Please check the Email")
				}
			})
	}

	return (
		<div className="flex flex-col items-center justify-center">
			<h1>LOGIN DETAILS</h1>
			<div>
				<div className="mt-2 p-1">
					<label htmlFor="email">EMAIL</label>
					<input
						id="email"
						type="email"
						className="ml-4 p-1"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value)
						}}
					/>
				</div>
				<div className="mt-2 p-1">
					<label htmlFor="pass">PASSWORD</label>
					<input
						id="pass"
						type="password"
						className="ml-4 p-1"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button className="mt-2 p-1 border-2 " onClick={handleSubmit}>
					Login
				</button>
				<ToastContainer />
			</div>
		</div>
	)
}

export default LoginForm
