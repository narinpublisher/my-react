function Barley () {
	const [ txt , setTextarea ]= React.useState ('Enter the lyrics of Barley.');
	const writeTxt= ( event ) => {
		setTextarea ( event.target.value );
	}
	return (
		<section>
			<h1>Art Song – Barley</h1>
			<form>
				<textarea value= { txt } onChange= { writeTxt } />
			</form>
		</section>
	)
}

const textBox = ReactDOM.createRoot ( document.getElementById ('root') );
textBox.render ( <Barley /> );