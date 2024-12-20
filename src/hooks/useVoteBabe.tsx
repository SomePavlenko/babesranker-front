import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { BabeProfile } from '../features/type'

export const useVoteBabe = (voteType: 'up' | 'down') => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: [
			`vote${voteType.charAt(0).toUpperCase() + voteType.slice(1)}Babe`,
			'babeList'
		],
		mutationFn: async (id: number) => {
			const url = `https://babesranker.com/api/core/vote-${voteType}/${id}`
			return axios.get(url)
		},
		onMutate: async (id: number) => {
			await queryClient.cancelQueries({ queryKey: ['babeList'] })
			const previousBabeList = queryClient.getQueryData(['babeList'])
			queryClient.setQueryData(['babeList'], (old: BabeProfile[]) => {
				return old.map(babe => {
					if (babe.id === id) {
						return {
							...babe,
							rank: voteType === 'up' ? babe.rank + 1 : babe.rank - 1
						}
					}
					return babe
				})
			})
			return { previousBabeList }
		},
		onError: (err, id, context) => {
			queryClient.setQueryData(['babeList'], context.previousBabeList)
		}
	})
}
