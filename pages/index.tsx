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

		if ( code ) {
			const codeSlice = code.slice( 0, -2 )

			console.log( `code`, code )
			console.log( `codeSlide`, codeSlice )
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
					code: codeSlice
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

	return (
		<Layout>
			<div className='flex flex-col items-center justify-center w-screen h-screen'>
				<HolaMundo />
				<a href={`https://www.instagram.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=user_profile,user_media&response_type=code`}>Obtener Code</a>
				<button type='button' onClick={obtenerToken}>Obtener Token</button>
				<Link href='/pruebaMasBasica'>
					<a>cambiando de page</a>
				</Link>
			</div>
		</Layout>
	)
}

export default Index
