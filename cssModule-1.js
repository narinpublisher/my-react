const Rainbow = () => {
	return (
		<section className= { styles.rainbowBg }>
			<h1>CSS 모듈</h1>
			<p>모듈 내부의 CSS는 그것을 가져온 컴포넌트에 대해서만 사용 가능하며 이름 충돌에 대해 걱정할 필요가 없습니다.</p>
		</section>
	);
}

const addStyle = ReactDOM.createRoot ( document.getElementById ( 'module' ) );
addStyle.render ( <Rainbow /> );
