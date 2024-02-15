function Tree () {
	const [ inputs , setInputs ] = useState ( { } );
	const submitGoGo = event => {
		const { value, name } = event.target; // event.target 에서 name과 value를 추출.
		setInputs ( event => ( {
			...event ,  //스프레드 문법으로, 이벤트가 발생된 input객체의 복사본을 생성함.
			[ name ] : value  //name속성에 value값이 들어감.
		} ) );
	}
	const submitGo = event  =>  {
		event.preventDefault ();   // 불필요한 링크이동 방지
		console.log ( inputs ); // 입력한 텍스트가 콘솔창에 표시.
	}
	return (
 		<section>
			<h1>가곡_ 비목</h1>
			<form onSubmit= { submitGo }>
			   	<input type= 'text' name= 'txt1'  value= { inputs.txt1 || ' '}  
					onChange= { submitGoGo } />
				<br />깊은 계곡 양지 녘에<br />
				<input type= 'text' name= 'txt2'  value= { inputs.txt2 || ' ' } 
					onChange= { submitGoGo } />
				<br />이름 모를 비목이여<br />
				<button>전송하기</button>
			</form>
		</section>
	)
}

const textBox = ReactDOM.createRoot ( document.getElementById ('root') );
textBox.render ( <Tree /> );
