const MyApp = () => {
	return (
		<>
			<h1 style= {{color: 'red' , textShadow: '-2px -2px 7px orange'}}>
			   인라인 스타일
			</h1>
			<p>해당 스타일 디자인이 지정 요소에 즉각적으로 적용됩니다.</p>
		</>
	);	
}

const addStyle = ReactDOM.createRoot ( document.getElementById ( 'root' ) );
addStyle.render ( <MyApp /> );