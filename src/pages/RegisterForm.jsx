import React, { useState } from "react"
import { auth } from "../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const RegisterForm = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const handleSubmit = () => {
		createUserWithEmailAndPassword(auth, email, password)
			.then((response) => {
				console.log(response)
			})
			.catch((error) => {
				if (error.code === "auth/email-already-in-use") {
					toast.error("Email Already in Use")
				}
			})
	}

	return (
		<div className="flex flex-col items-center justify-center">
			<h1>REGISTER DETAILS</h1>
			<div>
				<div className="mt-2 p-1">
					<label htmlFor="email">EMAIL</label>
					<input
						id="email"
						type="email"
						className="ml-4 p-1"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
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
					Register
				</button>
				<ToastContainer />
			</div>
		</div>
	)
}

export default RegisterForm
