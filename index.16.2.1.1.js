function Sunset () {
	const [name, setName]= useState ('');
	return (
		<section>
			<strong>
				바람이 머물다 간 들판에<br />
				모락 모락 피어나는 저녁 연기
			</strong>
			<form>
					<br />
					<label 
						이 동요의 제목은? &nbsp;
						<input type='text' value= { name }
						       onChange= { e => setName( e.target.value )}
						/>
					</label>
			</form>
		</section>ㅍ
	)
}

const textBox = ReactDOM.createRoot ( document.getElementById ('root') );
textBox.render ( <Sunset /> );