function Sunshine ( props ) {
	return (
		<section>
			<h3 className='orange'>햇볕은 쨍쨍</h3>
			{
				lyrics.length >= 6 &&
				<ol>
					<li>
						햇볕은 <i className="aqua">{lyrics[0]}</i> 
						모래알은 <i className="aqua">{lyrics[1]}</i>
					</li>
					<li>
						<i className="aqua">{lyrics[2]}</i>로 떡 해 놓고 
						<i className="aqua"> {lyrics[3]}</i>로 소반 지어
					</li>
					<li>
						언니 <i className="aqua">{lyrics[4]}</i> 모셔다가
						맛있게도 <i className="aqua">{lyrics[5]}</i></li>
				</ol>
			}
		</section>
	)
}
const lyrics = ['쨍쨍 ','반짝 ','모래알','조약돌','누나 ','냠냠'];

const song = ReactDOM.createRoot ( document.getElementById('root') );
song.render ( <Sunshine sun= { lyrics }  /> );