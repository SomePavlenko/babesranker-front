export type Category =
	| 'MILF'
	| 'Teen'
	| 'Cougar'
	| 'BBW'
	| 'Amateur'
	| 'Ebony'
	| 'Asian'
	| 'Latina'
	| 'Lesbian'

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
