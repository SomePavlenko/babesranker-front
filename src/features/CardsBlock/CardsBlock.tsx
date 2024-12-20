import React, { useState } from 'react'

import { Card } from './Card'
import { FiltersBlock } from './FiltersBlock'
import { useQuery } from '@tanstack/react-query'
import { UserProfile } from '../type'

export const CardsBlock = () => {
	const { data: card } = useQuery({
		queryKey: ['babeList'],
		queryFn: async (): Promise<UserProfile[]> => {
			const response = await fetch('https://babesranker.com/api/core/babe/')
			return await response.json()
		}
	})

	const [selectedLocation, setSelectedLocation] = useState('')
	const [selectedType, setSelectedType] = useState('')
	const [sortOrder, setSortOrder] = useState('rateHigh')
	// Фильтрация и сортировка данных
	const filteredData =
		card &&
		card
			.filter(item => {
				return (
					(selectedLocation ? item.location === selectedLocation : true) &&
					(selectedType ? item.category === selectedType : true)
				)
			})
			.sort((a, b) => {
				if (sortOrder === 'rateHigh') return b.rank - a.rank
				if (sortOrder === 'rateLow') return a.rank - b.rank
				if (sortOrder === 'nameA') return a.location.localeCompare(b.location)
				if (sortOrder === 'nameZ') return b.location.localeCompare(a.location)
				return 0
			})

	const cardList =
		card && card?.length > 100 ? filteredData.slice(0, 100) : filteredData
	return (
		<div className='mt-20 w-full flex flex-col'>
			<FiltersBlock
				setSelectedLocation={setSelectedLocation}
				setSelectedType={setSelectedType}
				setSortOrder={setSortOrder}
			/>
			<div className='grid grid-cols-[repeat(auto-fill,_minmax(204px,_0fr))] justify-between gap-6'>
				{cardList?.map(card => {
					return <Card key={card?.id} card={card} />
				})}
			</div>
		</div>
	)
}
