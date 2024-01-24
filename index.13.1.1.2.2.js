function Monu () {
	const memory = () => {
		alert( '추억' );
	}
	return (
		<button onClick= { memory }>
			'그 옛날 천진스런 (  )은 애달퍼'<br />
			에서 ( ) 안에 들어갈 말은?
		</button>
	)
}

const song = ReactDOM.createRoot ( document.getElementById('root') );
song.render ( <Monu /> );