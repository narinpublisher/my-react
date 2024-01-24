function Brand () {
	const [ myBag, setMyBag ]= React.useState('dior');
		const newBag= ( event ) => {
		setMyBag ( event.target.value );
	}
		return (
		<section>
			<h1>가장 관심있는 백 브랜드는?</h1>
			<form>
				<select value= {myBag} onChange= { newBag }>
					<option value='hermes'>에르메스</option>
					<option value='chanel'>샤넬</option>
					<option value='dior'>크리스찬디올</option>
				</select>
			</form>
		</section>
	)
}

const textBox = ReactDOM.createRoot ( document.getElementById ('root') );
textBox.render ( <Brand /> );