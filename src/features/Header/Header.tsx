import React from 'react'

export const Header = () => {
	return (
		<div className='h-34 w-full relative z-20'>
			<img
				src={`${process.env.PUBLIC_URL}/images/banner.png`}
				alt='banner'
				className='w-full h-full object-cover object-center'
			/>
			<div className='z-30 absolute top-1/4 left-[15%] text-4xl font-bold text-white [text-shadow:_0_2px_3px_rgb(0_0_0_/_50%)]'>
				BabesRanker
			</div>
		</div>
	)
}
