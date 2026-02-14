function MonumentTree ( props ) {
	return (
		<>
			<i className='orange'> { props.sky }</i><br />
			Longing gathers like moss on every branch
		</>
	)
} 
function Rainstorm () {
	return (
		<> 
			Through long years of wind and rain,<br />
			An unnamed monument stands,<br />
			<MonumentTree  sky=“The distant sky of childhood friends left behind" />
		</>
	)
}
const democracy = ReactDOM.createRoot ( document.getElementById('root') );
democracy.render (  <Rainstorm />  );
