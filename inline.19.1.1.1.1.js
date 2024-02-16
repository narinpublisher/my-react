const CamelCase  = () => {
	return (
		<>
			<h1 style= {{color: 'red' , backgroundColor: 'yellow' , padding: '10px 20px' , 
			 borderRadius: '20px'}}>   인라인 스타일   </h1>
			<p>인라인 CSS는 Javascript 객체로 작성되기 때문에 카멜케이스 구문으로 작성해야 합
			니다.</p>
		</>
	);	
}

const addStyle = ReactDOM.createRoot ( document.getElementById ( 'root' ) );
addStyle.render ( <CamelCase /> );