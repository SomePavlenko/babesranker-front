import React from 'react'

import './App.css'
import { MainPage } from './pages'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
	const queryClient = new QueryClient()
	return (
		<div className='w-full bg-main'>
			<QueryClientProvider client={queryClient}>
				<MainPage />
			</QueryClientProvider>
		</div>
	)
}

export default App
