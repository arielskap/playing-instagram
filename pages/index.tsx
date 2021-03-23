import HolaMundo from "@components/HolaMundo"
import Layout from "@components/Layout"

const Index: React.FC = () => {

	const handleClick = () => {
		const appId = 123175986433056
		const redirectUrl = `playing-instagram.vercel.app`

		fetch( `https://api.instagram.com/oauth/authorize
				?client_id=${appId}
				&redirect_uri=${redirectUrl}
				&scope=user_profile,user_media
				&response_type=code` )
			.then( ( result ) => {
				return result.json()
			} ).catch( ( e ) => {
				console.log( e )
				return e
			} ).then( ( result ) => {
				console.log( result )
				return result
			} )
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

	return (
		<Layout>
			<div className='flex items-center justify-center w-screen h-screen'>
				<HolaMundo />
				<button type='button' onClick={handleClick}>Traer ultima publicación</button>
			</div>
		</Layout>
	)
}

export default Index
