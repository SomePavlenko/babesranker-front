import React, { useEffect, useState } from 'react'

import { useVoteBabe } from '../../../hooks/useVoteBabe'
import { colors } from '../../colors'
import { BabeProfile } from '../../type'
import { VoteDownIcon, VoteUpIcon } from './Icons'

interface Props {
	card: BabeProfile
}

export const Card: React.FC<Props> = ({ card }) => {
	if (!card) return null
	const cardData = card
	const voteUp = useVoteBabe('up')
	const voteDown = useVoteBabe('down')

	const [voteData, setVoteData] = useState<{
		vote: string
		timestamp: number
	} | null>(null)

	useEffect(() => {
		const dataVote = window.localStorage.getItem(String(cardData.id))
		if (dataVote) {
			setVoteData({
				vote: dataVote.slice(0, 1),
				timestamp: Number(dataVote.slice(1))
			})
		}
	}, [cardData.id])

	const canVote = () => {
		if (!voteData) return true

		const timeStamp = (Date.now() - voteData.timestamp) / (1000 * 60 * 60 * 24)
		return timeStamp > 1 // Можно голосовать, если прошло больше 1 дня
	}

	const voteHandler = async (voteType: 'up' | 'down') => {
		const timeStamp = canVote()
		if (!timeStamp) {
			// alert('You can vote once per day')
			return
		}

		const mutation = voteType === 'up' ? voteUp : voteDown
		try {
			await mutation.mutateAsync(cardData.id)
			setVoteData({
				vote: voteType === 'up' ? '+' : '-',
				timestamp: Date.now()
			})
			window.localStorage.setItem(
				String(cardData.id),
				`${voteType === 'up' ? '+' : '-'}${Date.now()}`
			)
		} catch (error) {
			console.error('Error while voting:', error)
			alert('An error occurred while processing your vote. Please try again.')
		}
	}

	const getFill = (vote: boolean) => {
		const myVote = voteData ? voteData.vote === '+' : null
		const timeStamp = canVote()

		if (myVote === null) return colors.secondary
		if (vote && myVote && !timeStamp) return colors.voteUpColor
		if (!vote && !myVote && !timeStamp) return colors.voteDownColor
		return colors.secondary
	}

	return (
		<div className='flex flex-col items-center justify-between bg-secondColor rounded-lg p-2.5 shadow-md border border-primaryBorder h-68 sm:h-84 text-center'>
			<h2 className='text-white m-0 mb-1.25 text-[1.2em] font-bold'>
				{cardData.name}
			</h2>
			<div className='2sm:w-37.5 w-[136px] h-[200px] aspect-[3/4] flex items-center justify-center mb-1.25 overflow-hidden'>
				<img
					src={cardData.photo}
					alt={cardData.name}
					className='h-[200px] max-w-[200px]'
				/>
			</div>
			<div className='flex flex-wrap sm:flex-nowrap gap-2 py-2 sm:gap-4 sm:py-0 w-full'>
				<a
					href={cardData.redditUrl}
					target='blank'
					className='rounded-sm w-full h-10 p-0 bg-primaryButtonColor text-black border-0 font-bold text-m cursor-pointer transition-colors duration-300 ease flex items-center justify-center leading-none text-center'
				>
					Reddit
				</a>
				<a
					href={cardData.onlyfansUrl}
					target='blank'
					className='rounded-sm w-full h-10 p-0 bg-primaryButtonColor text-black border-0 font-bold text-m cursor-pointer transition-colors duration-300 ease flex items-center justify-center leading-none text-center'
				>
					Onlyfans
				</a>
			</div>
			<div className='flex justify-center items-center h-7.5'>
				<div className='flex items-center gap-4'>
					<button
						onClick={() => voteHandler('up')}
						className='caret-amber-800 border-0 cursor-pointer p-0 w-6 h-6 transition-transform duration-200 ease'
					>
						<VoteUpIcon fill={getFill(true)} />
					</button>
					<div className='bg-black/30 py-0.5 px-1.5 rounded text-m min-w-7.5 inline-block text-center text-primaryText font-bold'>
						{cardData.rank}
					</div>
					<button
						onClick={() => voteHandler('down')}
						className='bg-transparent border-0 cursor-pointer p-0 w-6 h-6 transition-transform duration-200 ease'
					>
						<VoteDownIcon fill={getFill(false)} />
					</button>
				</div>
			</div>
		</div>
	)
}
