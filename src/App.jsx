import React from 'react'
import { Cart } from './components/Cart'
import { Header } from './components/Header'
import { useGlobalContext } from './context'




const App = () => {
	const { loading } = useGlobalContext()


	if (loading) {
		return (
			<div className="loading">
				<h1> Loadimg... </h1>
			</div>
		)
	}



	return (
		<main>
			<Header />
			<Cart />
		</main>
	)
}

export default App
