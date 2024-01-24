function MonumentTree ( pr ) {
	return (
		<>
			<i className='orange'> { pr.sky }</i><br />
			그리워 마디마디 이끼되어 맺혔네
		</>
	)
} 
function Rainstorm () {
	return (
		<> 
			비바람 긴세월로 이름모를<br />
			이름모를 비목이어<br />
			<MonumentTree sky='먼 고향 초동친구 두고온 하늘가' /> 
		</>
	)
}

const democracy = ReactDOM.createRoot ( document.getElementById('root') );
democracy.render ( <Rainstorm /> );