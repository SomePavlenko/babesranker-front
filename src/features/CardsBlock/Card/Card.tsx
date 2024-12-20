import React from 'react'
import { UserProfile } from '../../type'
import { useVoteUpBabe } from '../../../hooks/useVoteUpBabe'
import { useVoteDownBabe } from '../../../hooks/useVoteDownBabe'

interface Props {
	card: UserProfile
}
export const Card: React.FC<Props> = card => {
	if (card?.card === undefined || card?.card === null) return null
	const cardData = card?.card
	const voteUp = useVoteUpBabe()
	const voteDown = useVoteDownBabe()

	const checkVoteFromLocalStorage =
		window.localStorage.getItem(String(cardData?.id)) === null ||
		window.localStorage.getItem(String(cardData?.id)) === null

	const getAccessMyVote = () => {
		if (checkVoteFromLocalStorage) return true
		const dataVote = window.localStorage.getItem(String(cardData?.id))
		const timeStamp =
			Math.floor(Date.now() - Number(dataVote?.slice(1))) /
				(1000 * 60 * 60 * 24) >
			1
		return timeStamp
	}

	const getResultMyVote = () => {
		if (checkVoteFromLocalStorage) return null
		const dataVote = window.localStorage.getItem(String(cardData?.id))
		const vote = dataVote?.slice(0, 1) === '+'
		return vote
	}

	const voteUpHandler = async () => {
		const timeStamp = getAccessMyVote()
		if (!timeStamp) {
			alert('You can vote once per day')
			return
		}
		await voteUp.mutateAsync(cardData?.id).then(() => {
			window.localStorage.setItem(
				String(cardData?.id),
				String('+' + Date.now())
			)
		})
	}
	const voteDownHandler = async () => {
		const timeStamp = getAccessMyVote()
		if (!timeStamp) {
			alert('You can vote once per day')
			return
		}
		await voteDown.mutateAsync(cardData?.id).then(() => {
			window.localStorage.setItem(
				String(cardData?.id),
				String('-' + Date.now())
			)
		})
	}
	const getFill = (vote: boolean) => {
		const timeStamp = getAccessMyVote()
		const myVote = getResultMyVote()
		if (myVote === null) return '#161b22'
		if (vote && myVote && !timeStamp) return '#4CAF50'
		if (!vote && !myVote && !timeStamp) return '#F44336'
		return '#161b22'
	}
	return (
		<div className=' w-[204px] flex flex-col items-center justify-between bg-secondColor rounded-lg p-2.5 shadow-md border border-[#30363d] h-[240px] text-center'>
			<h2 className='text-white m-0 mb-1.25 text-[1.2em] font-bold '>
				{cardData?.name}
			</h2>
			<div className='w-full h-[100px] flex items-center justify-center mb-1.25 overflow-hidden'>
				{/*	image*/}
				<img src={cardData?.photo} alt={cardData?.name} />
			</div>
			<div className='flex gap-4 w-full'>
				<a
					href={'https://' + cardData?.redditUrl}
					target='blank'
					className='w-full h-[40px] p-0 bg-[#2ecc71] text-black border-0 font-bold text-[14px] cursor-pointer transition-colors duration-300 ease flex items-center justify-center leading-none text-center'
				>
					Reddit
				</a>
				<a
					href={'https://' + cardData?.onlyfansUrl}
					target='blank'
					className='w-full h-[40px] p-0 bg-[#2ecc71] text-black border-0 font-bold text-[14px] cursor-pointer transition-colors duration-300 ease flex items-center justify-center leading-none text-center'
				>
					Onlyfans
				</a>
			</div>
			<div className='flex justify-center items-center h-[30px] '>
				{/*	vote container*/}
				<div className='flex items-center gap-[15px]'>
					{/*	voting*/}
					<button
						onClick={voteUpHandler}
						className=' caret-amber-800 border-0 cursor-pointer p-0 w-[24px] h-[24px] transition-transform duration-200 ease'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill={getFill(true)}
							stroke='#4CAF50'
							strokeWidth='2'
						>
							<path d='M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z' />
						</svg>
					</button>
					<div className='bg-black/30 py-0.5 px-1.5 rounded text-[14px] min-w-[30px] inline-block text-center text-[#e6edf3] font-bold'>
						{cardData?.rank}
					</div>
					<button
						onClick={voteDownHandler}
						className='bg-transparent border-0 cursor-pointer p-0 w-[24px] h-[24px] transition-transform duration-200 ease'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill={getFill(false)}
							stroke='#F44336'
							strokeWidth='2'
						>
							<path d='M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z' />
						</svg>
					</button>
				</div>
			</div>
		</div>
	)
}
