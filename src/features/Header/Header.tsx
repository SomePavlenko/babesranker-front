import React from 'react'

export const Header = () => {
	return (
		<div className='h-34 w-full overflow-hidden relative z-20'>
			<img
				src={`${process.env.PUBLIC_URL}/images/banner.png`}
				alt='banner'
				className='w-full h-full object-cover object-center'
			/>
			<p className='z-30 absolute top-1/2 left-1/4  text-4xl font-bold text-white'>
				Babes ranker
			</p>
		</div>
	)
}
