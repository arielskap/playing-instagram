import Link from 'next/link'
import HolaMundo from "@components/HolaMundo"
import Layout from "@components/Layout"

const Index: React.FC = () => {
	const clientId = 123175986433056
	const clientSecret = `873338430866df7c9899abd78280a8e9`
	const redirectUrl = `https://playing-instagram.vercel.app/`

	const obtenerToken = () => {
		const valores = window.location.search
		const urlParams = new URLSearchParams( valores )
		const code = urlParams.get( `code` )

		console.log( `code`, code )
		if ( code ) {
			fetch( `https://api.instagram.com/oauth/access_token`, {
				method: `POST`,
				headers: {
					'Content-Type': `application/json`
				},
				body: JSON.stringify( {
					client_id: clientId,
					client_secret: clientSecret,
					grant_type: `authorization_code`,
					redirect_uri: redirectUrl,
					code
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
		} else {
			console.log( `No se pude obtener "code"` )
		}
	}

	const consultar = () => {
		const userId = 17841403278821075
		const token = `IGQVJVUGNpcmd4R09iZA016SHZAYRVAwSE1HMy1wRVlmel9yRzNmd0xpLURqQVpWVk5OeS01RG1SV2o5cGZA3SlIySm5GdE9WSU5QczZA2ckVGc1dCMUg3UGdQOVVGU2JMTjgyTlBuRTIzNWd3ZAmxBZAFhMTVU2Y0thb1U4QzNF`

		fetch( `https://graph.instagram.com/${userId}?fields=id,username&access_token=${token}` )
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

	// curl -X POST   https://api.instagram.com/oauth/access_token   -F client_id=123175986433056   -F client_secret=873338430866df7c9899abd78280a8e9   -F grant_type=authorization_code   -F redirect_uri=https://playing-instagram.vercel.app/   -F code=

	return (
		<Layout>
			<div className='flex flex-col items-center justify-center w-screen h-screen'>
				<HolaMundo />
				<a href={`https://www.instagram.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=user_profile,user_media&response_type=code`}>Obtener Code</a>
				<button type='button' onClick={obtenerToken}>Obtener Token</button>
				<button type='button' onClick={consultar}>Consultar</button>
				<Link href='/pruebaMasBasica'>
					<a>cambiando de page</a>
				</Link>
			</div>
		</Layout>
	)
}

export default Index
