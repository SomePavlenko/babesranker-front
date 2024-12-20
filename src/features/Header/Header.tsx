import React from 'react'

export const Header = () => {
	return (
		<div className='h-34 w-full overflow-hidden relative'>
			<img
				src={`${process.env.PUBLIC_URL}/images/banner.png`}
				alt='banner'
				className='w-full h-full object-cover object-center'
			/>
			Babes ranker
		</div>
	)
}
