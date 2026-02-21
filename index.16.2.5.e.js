function Brand () {
	const [ myBag , setMyBag ]= React.useState ( 'dior' );
		const newBag= ( event ) => {
		setMyBag ( event.target.value );
	}
		return (
		<section>
			<h1>Which luxury bag brand are you most interested in?</h1>
			<form>
				<select value= { myBag } onChange= { newBag }>
					<option value= 'hermes'>Hermès</option>
					<option value= 'chanel'>Chanel</option>
					<option value= 'dior'>Christian Dior</option>
				</select>
			</form>
		</section>
	)
}
const textBox = ReactDOM.createRoot ( document.getElementById ('root') );
textBox.render ( <Brand /> );