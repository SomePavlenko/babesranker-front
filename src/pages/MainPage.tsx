import React from 'react'

import { CardsBlock } from '../features/CardsBlock'
import { Header } from '../features/Header'

export const MainPage = () => {
	return (
		<div className='h-full flex flex-col items-center'>
			<Header />
			<div className='max-w-8xl w-screen flex-col bg-primary px-5'>
				<CardsBlock />
			</div>
		</div>
	)
}
