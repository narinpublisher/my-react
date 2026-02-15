function Monu () {
	const memory = () => {
		alert( 'Memory' );
	}
	return (
		<button onClick= { memories }>
			"Pure (  ) from long ago are so sad"
			What word should I put in the parentheses (  )?
		</button>
	)
}

const song = ReactDOM.createRoot ( document.getElementById('root') );
song.render ( <Monu /> );