const CreateObject  = () => {
	const blueStyle = {
			color: 'white' ,
			backgroundColor: 'skyblue' ,
			padding: '20px' ,
			fontFamily: 'cursive' ,
			textShadow: '1px 1px 10px blue' ,
			borderRadius: '20px'
	}	
		return (
		<>
			<h1 style= { blueStyle }>  스크립트 객체를 참조하는 인라인 스타일  </h1>
			<p>CSS style 정보를 사용하여 객체를 생성하고, 인라인 스타일 속성에서 참조할 수 있
			습니다.</p>
		</>
	);	
}

const addStyle = ReactDOM.createRoot ( document.getElementById ( 'root' ) );
addStyle.render ( <CreateObject /> );