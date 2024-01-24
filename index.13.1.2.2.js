function Monu () {
	const memory = ( me ) => {
		alert( me );
	}
	return (
		<button onClick= { () => memory ( '알알이' ) }>
			"서러움 ( ) 돌이되어 쌓였네"<br />
			에서 ( ) 안에 들어갈 말은?
		</button>
	)
}

const song = ReactDOM.createRoot ( document.getElementById('root') );
song.render ( <Monu /> );       