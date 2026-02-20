const Tree = ()=> {
	const [ inputs , setInputs ]= React.useState ( { } );
	const submitGoGo= ( event ) => {
		const name=  event.target.name;
		const value=  event.target.value;
		se    tInputs ( values => ( { ...values, [name] : value } ) );
	}
	const submitGo= ( ev )  =>  {
		ev.preventDefault ();
		console.log ( inputs );
	}
	return (
 		<section>
			<h1>Art Song – "Bimok"</h1>
			<form onSubmit= { submitGo }>
			   	<input type= 'text' name= 'txt1'  value= { inputs.txt1 || ''}
				onChange= { submitGoGo } />
				<br />Deep valley in the glow of eventide<br />
				<input type= 'text' name= 'txt2'  value= { inputs.txt2 || '' }
				onChange= { submitGoGo } />
				<br />Made illegible by wind, rain and time<br />
				<button>Submit</button>
			</form>
		</section>
	)
}

const textBox = ReactDOM.createRoot ( document.getElementById ('root') );
textBox.render ( <Tree /> );