import React from 'react'

export const Skeleton: React.FC<{ className?: string }> = ({ className }) => {
	return (
		<div className={`animate-pulse bg-gray-300 rounded-lg ${className}`}>
			<div className='h-40 w-full rounded-t-lg mb-2'></div>
			<div className='h-4 w-3/4 rounded mb-1'></div>
			<div className='h-4 w-1/2 rounded'></div>
		</div>
	)
}
