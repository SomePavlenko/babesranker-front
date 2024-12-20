import React from 'react'

import { CardsBlock } from '../features/CardsBlock'
import { Header } from '../features/Header'

export const MainPage = () => {
	return (
		<div className='h-screen flex flex-col items-center'>
			<Header />
			<div className='max-w-8xl w-screen flex-col bg-main pl-5 pr-5'>
				<CardsBlock />
			</div>
		</div>
	)
}
