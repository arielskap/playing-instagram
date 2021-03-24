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

	return (
		<div>
			<button type='button' onClick={handleClick}>Traer public post</button>
		</div>
	)
}

export default pruebaMasBasica
