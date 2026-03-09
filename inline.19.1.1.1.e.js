const CamelCase  = () => {
	return (
		<>
			<h1 style= {{color: 'red' , backgroundColor: 'yellow' , 
			padding: '10px 20px' , borderRadius: '20px'}}>   Inline Style   </h1>
			<p>
				Because inline CSS in React is written as a JavaScript object,
				property names must follow camelCase syntax.
			</p>
		</>
	);	
}

const addStyle = ReactDOM.createRoot ( document.getElementById ( 'root' ) );
addStyle.render ( <CamelCase /> );