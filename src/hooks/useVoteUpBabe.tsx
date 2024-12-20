import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

export const useVoteUpBabe = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationKey: ['voteUpBabe', 'babeList'],
		mutationFn: async (id: number) =>
			axios.get(`https://babesranker.com/api/core/vote-up/${id}`),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['babeList'] })
		}
	})
}
