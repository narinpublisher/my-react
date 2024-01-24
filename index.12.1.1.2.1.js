function Mo ( props ) {
	return (
		<>
			먼 고향 초동친구 두고온 하늘가<br />
			<i className='orange'>{ props.sky }</i>				
		</>
	)
}

function Ra () {
	const friend= '그리워 마디마디 이끼되어 맺혔네';
	return (
		<>
			비바람 긴세월로 이름모를 비목이어<br />
			<Mo sky= { friend } />
		</>
	)
}

const song = ReactDOM.createRoot ( document.getElementById('root') );
song.render ( <Ra /> );