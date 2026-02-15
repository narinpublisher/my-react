function Monu () {
	const memory = () => {
		alert( 'memories' );
	}
	return (
		<button onClick= { memory }>
			"Pure (  ) from long ago are so sad"<br/>
			What word should I put in the parentheses (  )?
		</button>
	)
}

const song = ReactDOM.createRoot ( document.getElementById('root') );

song.render ( <Monu /> );


