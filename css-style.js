const ExternalCss  = () => {	
	return (
		<section>
			<h1>외부 파일로 적용되는 CSS 스타일시트</h1>
			<p>CSS 스타일을 별도의 파일에 작성하고 파일 확장자가 파일명.css인 파일로 저장한 후 애플리케이션에서 불러와서 디자인 스타일이 적용되게 할 수 있습니다.</p>
		</section>
	);	
}

const addStyle = ReactDOM.createRoot ( document.getElementById ( 'root' ) );
addStyle.render ( <ExternalCss /> );