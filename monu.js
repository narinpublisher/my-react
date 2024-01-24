function Mo ( props ) {
	return (
		<>
			먼 고향 초동친구 두고온 하늘가<br />
			그리워 <i className='orange'>{ props.miss.jo }</i>		
			이끼되어 <i className='orange'>{ props.miss.re }</i>					
		</>
	)
}

function Ra () {
	const friend= { jo:'마디마디 ', re: '맺혔네' };
	return (
		<>
			비바람 긴세월로 이름모를 비목이어<br />
			<Mo miss= { friend } />
		</>
	)
}

const song = ReactDOM.createRoot ( document.getElementById('root') );
song.render ( <Ra /> );