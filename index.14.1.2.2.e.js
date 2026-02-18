function Sunshine ( props ) {
	return (
		<section>
			<h3 className='orange'>Bright Sunshine</h3>
			{
			    lyrics.length > 6 &&
			    <ol>
				<li>
				   Sunshine is <i className="aqua">{ lyrics[0] }</i> 
				   and the sand sparkles <i className="aqua">{ lyrics[1] }</i>
				</li>
				<li>
				   Make rice cakes with <i className="aqua">{ lyrics[2] }</i>
				   and set the table with <i className="aqua"> { lyrics[3] }</i>
				</li>
				<li>
				   Invite sister <i className="aqua">{ lyrics[4] }</i>
				   and enjoy it <i className="aqua">{ lyrics[5] }</i>
				</li>
			    </ol>
			}
		</section>
	)
}
const lyrics = [ 'shiny', 'sparkling', 'sand', 'pebbles', 'noona', 'yum yum' ];

const song = ReactDOM.createRoot ( document.getElementById('root') );
song.render (  <Sunshine sun= { lyrics }  />  );