export interface IUserAuth {
	isLoading: boolean

	// Response
	errorMessage: string

	// Response
	message: string
	access_token: string
	access_token_exp: string
	refresh_token: string
	refresh_token_exp: string
}
