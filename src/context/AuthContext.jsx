import { onAuthStateChanged } from "firebase/auth"
import React, { createContext, useContext, useEffect, useState } from "react"
import { auth } from "../firebase"

// create the context
const AuthContext = createContext({ isLoading: false, user: null })

export default AuthContext

// create the provider with some default setup
// so that it sets and update value of context correctly
// this goes on root of your application and provides data
export const AuthProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(true)
	const [user, setUser] = useState(null)

	// setup the functionality to update our user state
	useEffect(() => {
		// this returns a function, which when called will stop listening for auth state changes
		const unsub = onAuthStateChanged(auth, (currUser) => {
			if (currUser) setUser(currUser)
			else setUser(null)
			setIsLoading(false)
		})

		return () => unsub()
	}, [])

	return (
		<AuthContext.Provider value={{ isLoading, user }}>
			{children}
		</AuthContext.Provider>
	)
}

// create a custom hook so other components can use it and its functionality
export const useAuth = () => {
	return useContext(AuthContext)
}
