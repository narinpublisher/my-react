function MonumentTree ( props ) {
	return (
		<h3>
			Swept away in serene silence
			<i className='red'> { props.valley }</i><br />
			<i className='red'>{ props.valley }</i>
			in the sunlit meadow
		</h3>
	)
}
const democracy = ReactDOM.createRoot ( document.getElementById('root') );
democracy.render (  <MonumentTree  valley='Deep Valley ' />  );