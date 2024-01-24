function Barley () {
	const [ txt, setTextarea ]= React.useState('보리수 가사를 입력하세요.');
		const writeTxt= ( event ) => {
		setTextarea ( event.target.value );
	}
		return (
		<section>
			<h1>가곡_ 보리수</h1>
			<form>
				<textarea value= { txt } onChange= { writeTxt } />
			</form>
		</section>
	)
}

const textBox = ReactDOM.createRoot ( document.getElementById ('root') );
textBox.render ( <Barley /> );