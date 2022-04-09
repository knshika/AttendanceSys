import React from "react"
import { useAuth } from "../context/AuthContext"

function TheProtector({ children, policy = "loggedInOnly" }) {
	const { isLoading, user } = useAuth()

	if (isLoading) {
		return <div> Loading user...</div>
	}

	if (!user && policy === "loggedInOnly") {
		return <div>Tumhari aukat ke bahar ka hai ye page, vapas jayiye</div>
	}

	if (user && policy === "loggedOutOnly") {
		return <div>Tumhari aukat ke bahar ka hai ye page, vapas jayiye</div>
	}

	return <>{children}</>
}

export default TheProtector
