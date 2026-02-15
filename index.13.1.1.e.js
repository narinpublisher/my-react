function Monu () {
	const memory = () => {
		alert( 'Memory' );
	}
	return (
		<button on   Click= { memory }>
			'In those innocent days of long ago (  ) felt sorrowful'<br />
			What word belongs inside the parentheses?
		</button>
	)
}

const song = ReactDOM.createRoot ( document.getElementById('root') );
song.render ( <Monu /> );