import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'

import './App.css'
import { MainPage } from './pages'

function App() {
	const queryClient = new QueryClient()
	return (
		<div className='w-full h-screen bg-primary'>
			<QueryClientProvider client={queryClient}>
				<MainPage />
			</QueryClientProvider>
		</div>
	)
}

export default App
