import React from 'react'
import { colors } from '../../colors'

export const VoteUpIcon: React.FC<{ fill: string }> = ({ fill }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 24 24'
		fill={fill}
		stroke={colors.voteUpColor}
		strokeWidth='2'
	>
		<path d='M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z' />
	</svg>
)

export const VoteDownIcon: React.FC<{ fill: string }> = ({ fill }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 24 24'
		fill={fill}
		stroke={colors.voteDownColor}
		strokeWidth='2'
	>
		<path d='M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z' />
	</svg>
)
