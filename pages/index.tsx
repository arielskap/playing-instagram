import Link from 'next/link'
import HolaMundo from "@components/HolaMundo"
import Layout from "@components/Layout"
import { useState } from 'react'

const Index: React.FC = () => {
	const clientId = 123175986433056
	const clientSecret = `873338430866df7c9899abd78280a8e9`
	const redirectUrl = `https://playing-instagram.vercel.app/`

	const token = `IGQVJVUGNpcmd4R09iZA016SHZAYRVAwSE1HMy1wRVlmel9yRzNmd0xpLURqQVpWVk5OeS01RG1SV2o5cGZA3SlIySm5GdE9WSU5QczZA2ckVGc1dCMUg3UGdQOVVGU2JMTjgyTlBuRTIzNWd3ZAmxBZAFhMTVU2Y0thb1U4QzNF`

	const [lastPost, setLastPost] = useState( {
		caption: ``,
		id: ``,
		"media_url": ``
	} )

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
		const userId = `17841403278821075`

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

	const obtenerMedia = () => {
		fetch( `https://graph.instagram.com/me/media?fields=id,media_url,caption&access_token=${token}` )
			.then( ( result ) => {
				return result.json()
			} ).catch( ( e ) => {
				console.log( e )
				return e
			} ).then( ( posts ) => {
				if ( posts && posts?.data && posts?.data.length > 0 ) {
					console.log( posts )
					setLastPost( posts.data[0] )
				}
				return posts
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
				<button type='button' onClick={obtenerMedia}>Obtener Media</button>
				{lastPost.id && (
					<div>
						<h1>Instagram Last Post:</h1>
						<div className='max-w-xs p-4 mx-auto border-2 border-blue-600 rounded'>
							<img className='object-contain' src={lastPost.media_url} alt="Ultimo post" />
							<p>Pie de la imagen:</p>
							<p>{lastPost.caption}</p>
						</div>
					</div>
				)}

				<Link href='/pruebaMasBasica'>
					<a>cambiando de page</a>
				</Link>
			</div>
		</Layout>
	)
}

export default Index
