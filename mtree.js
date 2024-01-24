function MonumentTree ( props ) {
	return (
		<h3>
			초연히 쓸고 간
			<i className='red'> { props.valley }</i><br />
			<i className='red'>{ props.valley }</i>
			양지녘에
		</h3>
	)
}

const democracy = ReactDOM.createRoot ( document.getElementById('root') );
democracy.render ( <MonumentTree valley='깊은 계곡 ' /> );