import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'

import { BabeProfile } from '../type'
import { Card } from './Card'
import { FiltersBlock } from './FiltersBlock'
import { Skeleton } from './Skeleton'

export const CardsBlock = () => {
	const { data: card, isLoading } = useQuery({
		queryKey: ['babeList'],
		queryFn: async (): Promise<BabeProfile[]> => {
			const response = await fetch(
				`${process.env.REACT_APP_BASE_API_URL}/api/core/babe/`
			)
			return await response.json()
		}
	})

	const [selectedLocation, setSelectedLocation] = useState('')
	const [selectedType, setSelectedType] = useState('')
	const [sortOrder, setSortOrder] = useState('highestRated')

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
				if (sortOrder === 'highestRated') return b.rank - a.rank
				if (sortOrder === 'lowestRated') return a.rank - b.rank
				if (sortOrder === 'nameAscending')
					return a.location.localeCompare(b.location)
				if (sortOrder === 'nameDescending')
					return b.location.localeCompare(a.location)
				return 0
			})

	const cardList =
		card && card.length > 100 ? filteredData.slice(0, 100) : filteredData

	const getCardBlock = () => {
		if (isLoading) {
			return Array.from({ length: 10 }).map((_, index) => (
				<Skeleton key={index} className='h-60' />
			))
		}
		return cardList?.map(card => {
			return <Card key={card.id} card={card} />
		})
	}
	return (
		<div className='sm:mt-20 mt-4 w-full flex flex-col'>
			<FiltersBlock
				setSelectedLocation={setSelectedLocation}
				setSelectedType={setSelectedType}
				setSortOrder={setSortOrder}
			/>
			{!cardList?.length && !isLoading && (
				<p className='w-full flex justify-center mt-12 left-1/4 text-white'>
					The selected Location and Type don&apos;t have models yet
				</p>
			)}
			<div className='grid grid-cols-[repeat(auto-fill,_minmax(46.5%,_0fr))] sm:grid-cols-[repeat(auto-fill,_minmax(12.75rem,_0fr))] justify-between gap-6'>
				{getCardBlock()}
			</div>
		</div>
	)
}
