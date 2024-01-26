const count = ( { total } ) => {
		console.log ( '갱신 될 때만 렌더링됩니다.' );

		return (
			<section>
				<h2>카운트</h2>
				{ 
					total.map ( ( txt , idx ) => {
						return <num key = { idx }>  { txt }  </num> ;
				} ) }
			</section>
		);
};

const MyApp = () => {
	const [ number , add ] = React.useState ( 0 );
	const [ increase , setTo ] = React.useState ( [ ] );
		const increment = () => {
			add ( ( i ) =>   i + 1 );
		};
		return (
		<>
			<Timer total = { increase } />
			<hr />
			<>
				Count : { number } &nbsp;
				<button onClick = { increment }>   +   </button>
			</><br />
			<b><small>[+]버튼을 클릭할 때마다 카운트 숫자는 증가합니다.</small></b>
		</>
	);
}

const clock = ReactDOM.createRoot ( document.getElementById ( 'memo' ) );
clock.render ( <MyApp /> );