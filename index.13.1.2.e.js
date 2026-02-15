function Monu () {
	const memory = ( me ) => {
		alert( me );
	}
	return (
		<button onClick= { () => memory ( 'layered' ) }>
			Each stone was (  ) with sadness.<br/>
			What word should I put in the parentheses ( )?
		</button>
	)
}

const song = ReactDOM.createRoot ( document.getElementById( 'root' ) );
song.render ( <Monu /> );       