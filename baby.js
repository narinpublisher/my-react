function BlueSky () {
	return (
			<p>피란하늘 파란하늘 꿈이 드리운 푸른 언덕에</p>
	);
}
function BabyGoat () {
	return (
			<p>아기염소 여럿이 풀을 뜯고 놀아요<br />해처럼 밝은 얼굴로</p>
	)
}
function BlBa ( para ) {
	const bl = para.bb;
	return (
			<section id='tomato'>
			   { bl ? <BlueSky /> : <BabyGoat /> }
			</section>
	);
}

const song = ReactDOM.createRoot ( document.getElementById('root') );
song.render ( <BlBa bb= { false }  /> );
