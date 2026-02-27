const Count = ( { total } ) => {
		console.log ( 'Rendered' );

		return (
			<section>
				<h2>Count List</h2>
				{ 
					total.map ( ( txt , idx ) => {
						return <num key = { idx } >  { txt }  </num> ;
				} ) }
			</section>
		);
}

const MyApp = () => {
	const [ number , add ] = React.useState ( 0 );
	const [ increase , setTo ] = React.useState ( [ ] );
		const increment = () => {
			add ( ( i )  =>   i + 1 );
	}
		return (
		<>
			<Count total = { increase } />
			<hr />
			<>
				Count : { number } &nbsp;
				<button onClick = { increment }>   +   </button>
			</><br />
			<b><small> Each time you click [+], the counter increases.</small></b>
		</>
	);
}

const clock = ReactDOM.createRoot ( document.getElementById ( 'root' ) );
clock.render ( <MyApp /> );