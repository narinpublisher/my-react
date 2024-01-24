function MyForm () {
	return (
		<form>
			<label>
				아이디를 입력하세요 &nbsp;
				<input type='text' />
			</label>
		</form>
	)
}

const textBox = ReactDOM.createRoot ( document.getElementById ( 'root' ) );
textBox.render ( <MyForm /> );
       