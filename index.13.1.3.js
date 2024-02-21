function MonumentTree () {
	const silence = ( song, event ) => {
		alert( event.type + ' 이벤트\n정답은?\n' + song );
	}
	return (
		<button onClick= { 
			( e ) => silence ( '비목' , e )
		}>
			홀로 선 적막감에 울어지친 울어지친 (  )이여<br />
			에서 ( ) 안에 들어갈 말은?
		</button>
	)
}

const song = ReactDOM.createRoot ( document.getElementById('root') );
song.render ( <MonumentTree /> );
