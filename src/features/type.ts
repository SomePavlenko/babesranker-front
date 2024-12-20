export enum CategoryEnum {
	MILF = 'MILF',
	Teen = 'Teen',
	Cougar = 'Cougar',
	BBW = 'BBW',
	Amateur = 'Amateur',
	Ebony = 'Ebony',
	Asian = 'Asian',
	Latina = 'Latina',
	Lesbian = 'Lesbian'
}

export interface UserProfile {
	id: number
	name: string
	socialUsername?: string
	photo?: string
	redditUrl?: string
	onlyfansUrl?: string
	location?: string
	category?: CategoryEnum
	rank?: number
}
