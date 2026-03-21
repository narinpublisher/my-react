const { createContext, useContext, useState } = React;
const UserContext = createContext();

function Part1() {
  const [ goat, change ] = useState("Baby Goat");


  return (
    <UserContext.Provider value= { goat }>
      <h1>{  `  (Song) ${ goat }  `  }</h1>
      <Part2 />
    </UserContext.Provider>
  );
}

function Part2() {
  const goat = useContext(UserContext);
  return (
    <>      
	<p>
		Under the blue sky, on a green hill,<br />
		{ ` ${ goat }s are grazing and playing` } <br />
		With bright smiling faces
	</p>
	<Part3 />
    </>
  );
}

function Part3() {
  return (
    <>
	<p>
		Rain falls drop by drop,<br />
		With little frowns,<br />
		Calling mom and dad—bleat!<br />
		Feeling a bit lonely
	</p>
	<Part4 />
   </>
  );
}

function Part4() {
  const goat = useContext(UserContext);
  return ( 
   <> 
	<p>
		When sunshine returns,<br />
		Jumping happily,<br />
		{ `Joyful  ${ goat }s everywhere` }
	</p>
    </>
  );
}


const root = ReactDOM.createRoot(document.getElementById( 'root' ) );
root.render( <Part1 /> );