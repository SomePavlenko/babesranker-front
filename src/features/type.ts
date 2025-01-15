export type Category =
	| 'MILF'
	| 'Teen'
	| 'BBW'
	| 'Ebony'
	| 'Asian'
	| 'Latina'
	| 'Big Boobs'
	| 'Big Ass'

export interface BabeProfile {
	id: number
	name: string
	socialUsername?: string
	photo?: string
	redditUrl?: string
	onlyfansUrl?: string
	location?: string
	category?: Category
	rank?: number
}
