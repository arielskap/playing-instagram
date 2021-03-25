const pruebaMasBasica = () => {
	const handleClick = () => {
		fetch( `https://www.instagram.com/ecstasy_ring/?__a=1` )
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

	const handleClickPiola = () => {
		fetch( `https://api.instagram.com/oauth/access_token`, {
			method: `POST`,
			headers: {
				'Content-Type': `application/json`
			},
			body: JSON.stringify( {
				client_id: 123175986433056,
				client_secret: `873338430866df7c9899abd78280a8e9`,
				grant_type: `authorization_code`,
				redirect_uri: `https://playing-instagram.vercel.app/`,
				code: `AQAoue8JmB5RbRsSOXArLgRxBtQQJz4ycafH1zSqvHU1Ql2M_S5pbReSsIw-R1oYNVh6raCtsmjZlSWZf2tUSAsccO6F7VdoQ0m8x59tZyBQHMbRtymr4A30Ho8rC51UKsu3e7js6_txlsEiBGnQL_UIcGzBSst9QviQZlPPgL82od5MOOriWlOs1oNnUFLs14o1vR6B6fUqMLQq854Z4hP124hPVAwbou6vzFwlmG4e8g`
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
	}
	// AQAoue8JmB5RbRsSOXArLgRxBtQQJz4ycafH1zSqvHU1Ql2M_S5pbReSsIw-R1oYNVh6raCtsmjZlSWZf2tUSAsccO6F7VdoQ0m8x59tZyBQHMbRtymr4A30Ho8rC51UKsu3e7js6_txlsEiBGnQL_UIcGzBSst9QviQZlPPgL82od5MOOriWlOs1oNnUFLs14o1vR6B6fUqMLQq854Z4hP124hPVAwbou6vzFwlmG4e8g#_

	return (
		<div>
			<button type='button' onClick={handleClick}>f</button>
			<button type='button' onClick={handleClickPiola}>Ahora si perro</button>
		</div>
	)
}

export default pruebaMasBasica
