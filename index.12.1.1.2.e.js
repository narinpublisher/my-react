function Mo ( props ) {
	return (
		<>
			The distant sky of childhood friends left behind<br />
			<i className='orange'>{ props.sky }</i>
		</>
	)
}
function Ra () {
	const friend= 'Longing gathers like moss on every branch';
	return (
		<>
		     Through long years of wind and rain, an unnamed monument stands<br />
		     Mo  sky= { friend } />
		</>
	)
}
const song = ReactDOM.createRoot ( document.getElementById('root') );
song.render ( <Ra /> );