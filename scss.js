const Rainbow = () => {
	return (
			<section>
				<h1>React Sass 스타일</h1>
				<ul>
					<li>CSS 파일을 생성하는 것과 같은 방식으로 Sass 파일을 만듭니다.</li>
					<li>Sass 파일의 파일 확장자는 파일명.scss입니다.</li>
					<li>Sass 파일에서는 변수 및 기타 Sass 함수를 사용할 수 있습니다.</li>
				</ul>
			</section>
	);
}

const myApp = ReactDOM.createRoot ( document.getElementById ( 'root' ) );
myApp.render ( <Rainbow /> );