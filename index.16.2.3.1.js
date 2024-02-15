function Tree () {
   const [ inputs, setInputs ]= React.useState( { } );
	const submitGoGo= ( event ) => {
		   const { value, name } = event.target; // event.target 에서 name 과 value 를 추출.
		   setInputs ( values => ( { ...values, [name]: value } ) );
	}
	const submitGo= ( ev ) =>  {
		   ev.preventDefault ();
		   console.log ( inputs );
	}
	return (
 		   <section>
			<h1>가곡_ 비목</h1>
			<form onSubmit= { submitGo }>
			   	<input type= 'text' name= 'txt1'  value= { inputs.txt1 || ''} 
					onChange= { submitGoGo } />
				<br />깊은 계곡 양지 녘에<br />
				<input type= 'text' name= 'txt2'  value= { inputs.txt2 || ''} 
					onChange= { submitGoGo } />
				<br />이름 모를 비목이여<br />
				<button>전송하기</button>
			</form>
		   </section>
	)
}

const textBox = ReactDOM.createRoot ( document.getElementById ('root') );
textBox.render ( <Tree /> );
