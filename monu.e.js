function Mo ( props ) {
	return (
		<>
			The distant sky of childhood friends left behindbr />
			Longing <i className='orange'>{ props.miss.jo }</i>
			like moss  <i className='orange'>{ props.miss.re }</i>
		</>
	)
}

function Ra () {
	const friend= { jo:'layer by layer  ', re: 'it gathered' };
	return (
		<>
		    Through long years of wind and rain, an unnamed monument stands<br />
			<Mo miss= { friend } />
		</>
	)
}
 
const song = ReactDOM.createRoot ( document.getElementById('root') );
song.render (  <Ra />  );  