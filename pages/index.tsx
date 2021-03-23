import HolaMundo from "@components/HolaMundo"
import Layout from "@components/Layout"

const Index: React.FC = () => {

	const handleClick = () => {
		// fetch( `https://www.instagram.com/ecstasy_ring/?__a=1` )
		// 	.then( ( result ) => {
		// 		return result.json()
		// 	} ).catch( ( e ) => {
		// 		console.log( e )
		// 		return e
		// 	} ).then( ( result ) => {
		// 		console.log( result )
		// 		return result
		// 	} )
		fetch( `https://www.instagram.com/ecstasy_ring/?__a=1`, {
			method: `POST`,
			body: JSON.stringify( {
				client_id: 123175986433056,
				client_secret: `873338430866df7c9899abd78280a8e9`,
				grant_type: `authorization_code`,
				code: `IGQVJWaS1GZAE5Iai1RU2dnNDVlTkFwVURFQ1hfUDRreGgyQU1zQWlJWWVhVzVPa25hakN0ODdyUndQUEl2cTlSUUc0dE1xM1E0cG50Qy1rVHRtZAjNoSHZACNm5WT2Fnd3pYOUlsa0RBamVBeDZAjMGhMcgZDZD`
			} )
		} )
			.then( ( result ) => {
				return result.json()
			} ).catch( ( e ) => {
				console.log( e )
				return e
			} ).then( ( result ) => {
				console.log( result )
				return result
			} )
		// IGQVJWaS1GZAE5Iai1RU2dnNDVlTkFwVURFQ1hfUDRreGgyQU1zQWlJWWVhVzVPa25hakN0ODdyUndQUEl2cTlSUUc0dE1xM1E0cG50Qy1rVHRtZAjNoSHZACNm5WT2Fnd3pYOUlsa0RBamVBeDZAjMGhMcgZDZD
		// const appId = 123175986433056
		// const redirectUrl = `playing-instagram.vercel.app`

		// fetch( `https://api.instagram.com/oauth/authorize
		// 		?client_id=${appId}
		// 		&redirect_uri=${redirectUrl}
		// 		&scope=user_profile,user_media
		// 		&response_type=code` )
		// 	.then( ( result ) => {
		// 		return result.json()
		// 	} ).catch( ( e ) => {
		// 		console.log( e )
		// 		return e
		// 	} ).then( ( result ) => {
		// 		console.log( result )
		// 		return result
		// 	} )
		// const instagramUrl = `https://www.instagram.com/p/fA9uwTtkSN/`
		// const accessToken = `6bf92fe3c5396340f44799c9b73d7970`

		// fetch( `https://graph.facebook.com/v10.0/instagram_oembed?url=${instagramUrl}&access_token=${accessToken}` )
		// 	.then( ( result ) => {
		// 		return result.json()
		// 	} ).catch( ( e ) => {
		// 		console.log( e )
		// 		return e
		// 	} ).then( ( result ) => {
		// 		console.log( result )
		// 		return result
		// 	} )
	}

	const otro = () => {
		const instagramUrl = `https://www.instagram.com/p/fA9uwTtkSN/`
		const accessToken = `IGQVJWaS1GZAE5Iai1RU2dnNDVlTkFwVURFQ1hfUDRreGgyQU1zQWlJWWVhVzVPa25hakN0ODdyUndQUEl2cTlSUUc0dE1xM1E0cG50Qy1rVHRtZAjNoSHZACNm5WT2Fnd3pYOUlsa0RBamVBeDZAjMGhMcgZDZD`

		fetch( `https://graph.facebook.com/v10.0/instagram_oembed?url=${instagramUrl}&access_token=${accessToken}` )
			.then( ( result ) => {
				return result.json()
			} ).catch( ( e ) => {
				console.log( e )
				return e
			} ).then( ( result ) => {
				console.log( result )
				return result
			} )
	}

	return (
		<Layout>
			<div className='flex flex-col items-center justify-center w-screen h-screen'>
				<HolaMundo />
				<button type='button' onClick={handleClick}>Traer ultima publicación</button>
				<button type='button' onClick={otro}>otro</button>
			</div>
		</Layout>
	)
}

export default Index
