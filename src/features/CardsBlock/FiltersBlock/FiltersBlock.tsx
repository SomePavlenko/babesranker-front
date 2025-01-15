import React from 'react'

interface Props {
	setSelectedLocation: React.Dispatch<React.SetStateAction<string>>
	setSelectedType: React.Dispatch<React.SetStateAction<string>>
	setSortOrder: React.Dispatch<React.SetStateAction<string>>
}

export const FiltersBlock: React.FC<Props> = ({
	setSelectedLocation,
	setSelectedType,
	setSortOrder
}) => {
	const handleLocationChange = e => {
		setSelectedLocation(e.target.value)
	}

	const handleTypeChange = e => {
		setSelectedType(e.target.value)
	}

	const handleSortChange = e => {
		setSortOrder(e.target.value)
	}
	return (
		<div className=' flex justify-start min-h-20 bg-secondColor rounded-lg px-3 py-2 sm:pl-12 shadow-md border border-primaryBorder mb-5'>
			<form className='flex justify-start flex-wrap sm:flex-nowrap gap-2 sm:gap-12 content-center w-full'>
				<div className='flex sm:flex-col items-end justify-between flex-wrap sm:max-w-80 w-full sm:items-stretch'>
					<label
						htmlFor='location'
						className='block sm:mb-1 font-medium text-m text-white'
					>
						Location
					</label>
					<select
						id='location'
						onChange={handleLocationChange}
						className='z-30 appearance-none bg-primary rounded-md p-2.5 shadow-md border border-primaryBorder  text-white text-sm h-9  focus:ring-blue-500 focus:border-blue-500 block px-3 py-2 sm:w-full w-3/4'
					>
						<option value=''>Choose a location</option>
						<option value='USA'>USA</option>
						<option value='Europe'>Europe</option>
						<option value='Asia'>Asia</option>
						<option value='Other'>Other</option>
					</select>
				</div>
				<div className='flex sm:flex-col items-end justify-between flex-wrap sm:max-w-80 w-full sm:items-stretch'>
					<label
						htmlFor='type'
						className='block sm:mb-1 font-medium text-m text-white'
					>
						Type
					</label>
					<select
						id='type'
						onChange={handleTypeChange}
						className='z-30 appearance-none bg-primary rounded-md p-2.5 shadow-md border border-primaryBorder  text-white text-sm h-9  focus:ring-blue-500 focus:border-blue-500 block px-3 py-2 sm:w-full w-3/4'
					>
						<option value=''>Choose a type</option>
						<option value='MILF'>MILF</option>
						<option value='Teen'>Teen</option>
						<option value='BBW'>Cougar</option>
						<option value='Ebony'>BBW</option>
						<option value='Asian'>Amateur</option>
						<option value='Latina'>Ebony</option>
						<option value='Big Boobs'>Asian</option>
						<option value='Big Ass'>Latina</option>
					</select>
				</div>
				<div className='flex sm:flex-col items-end justify-between flex-wrap sm:max-w-80 w-full sm:items-stretch'>
					<label
						htmlFor='sort'
						className='block sm:mb-1 font-medium text-m text-white'
					>
						Sort by
					</label>
					<select
						id='sort'
						onChange={handleSortChange}
						className='z-30 appearance-none bg-primary rounded-md p-2.5 shadow-md border border-primaryBorder  text-white text-sm h-9  focus:ring-blue-500 focus:border-blue-500 block px-3 py-2 sm:w-full w-3/4'
					>
						<option value='highestRated'>Highest rated</option>
						<option value='lowestRated'>Lowest rated</option>
						<option value='nameAscending'>Name(A-Z)</option>
						<option value='nameDescending'>Name(Z-A)</option>
					</select>
				</div>
			</form>
		</div>
	)
}
