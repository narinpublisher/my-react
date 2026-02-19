function MyForm () {
	return (
		<form>
			<label>
				Enter your ID &nbsp;
				<input type='text' />
			</label>
		</form>
	)
}

const textBox = ReactDOM.createRoot ( document.getElementById ( 'root' ) );
textBox.render ( <MyForm /> );