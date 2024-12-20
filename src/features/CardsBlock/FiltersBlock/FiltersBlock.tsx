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
		<div className=' flex justify-start min-h-20 bg-secondColor rounded-lg px-3 py-2 pl-12 shadow-md border border-primaryBorder mb-5'>
			<form className='flex justify-start flex-wrap gap-12 content-center'>
				<div>
					<label
						htmlFor='location'
						className='block mb-1 font-medium text-m text-white'
					>
						Location
					</label>
					<select
						id='location'
						onChange={handleLocationChange}
						className='appearance-none bg-primary rounded-md p-2.5 shadow-md border border-primaryBorder  text-white text-sm w-80 h-9  focus:ring-blue-500 focus:border-blue-500 block px-3 py-2 '
					>
						<option value=''>Choose a location</option>
						<option value='USA'>USA</option>
						<option value='Europe'>Europe</option>
						<option value='Asia'>Asia</option>
						<option value='Other'>Other</option>
					</select>
				</div>
				<div>
					<label
						htmlFor='type'
						className='block mb-1 font-medium text-m text-white'
					>
						Type
					</label>
					<select
						id='type'
						onChange={handleTypeChange}
						className='appearance-none bg-primary rounded-md p-2.5 shadow-md border border-primaryBorder  text-white text-sm w-80 h-9  focus:ring-blue-500 focus:border-blue-500 block px-3 py-2 '
					>
						<option value=''>Choose a type</option>
						<option value='MILF'>MILF</option>
						<option value='Teen'>Teen</option>
						<option value='Cougar'>Cougar</option>
						<option value='BBW'>BBW</option>
						<option value='Amateur'>Amateur</option>
						<option value='Ebony'>Ebony</option>
						<option value='Asian'>Asian</option>
						<option value='Latina'>Latina</option>
						<option value='Lesbian'>Lesbian</option>
					</select>
				</div>
				<div>
					<label
						htmlFor='sort'
						className='block mb-1 font-medium text-m text-white'
					>
						Sort by:
					</label>
					<select
						id='sort'
						onChange={handleSortChange}
						className='appearance-none bg-primary rounded-md p-2.5 shadow-md border border-primaryBorder  text-white text-sm w-80 h-9  focus:ring-blue-500 focus:border-blue-500 block px-3 py-2 '
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
