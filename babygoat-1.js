function Baby () {
	return (
		<h4>
			<i>아기염소 여럿이 풀을 뜯고 놀아요<br />해처럼 밝은 얼굴로</i>
		</h4>
	)
}
function Goat () {
	return (
		<h4>
			파란하늘 파란하늘 꿈이<br />드리운
			<i className= 'skyblue'>푸른 언덕</i>에
		</h4>
	)
}
function BabyGoat ( props ) {
	const sky= props.choice;
	if ( sky ) {
		return <Baby />;
	}
	return <Goat />;
}

const song = ReactDOM.createRoot ( document.getElementById('root') );
song.render ( <BabyGoat choice= { true } /> );