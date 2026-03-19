function BabyGoat() {
  const [ goat , setGoat ] = React.useState( {
    	t1 : ' On the green hillside' ,
    	t2 : '?? Cheerful baby goats ??' ,
    	t3 : 'With frowning little faces ' ,
    	t4 : 'Calling for mom, bleating for dad' ,
    	t5 : 'About to burst into tears'
  });

  return (
    <section
      	style={{
        		backgroundColor: 'skyblue',
        		padding: '30pt',
        		maxWidth: '400px',
        		margin: 'auto'
      	}}
    >
      <h1>Nursery Rhyme: Baby Goat</h1>
      <ul style={{ listStyle : 'none' , paddingLeft : 0 }}>
        <li>Under the blue sky, dreaming</li>
        <li>{ goat.t1 }</li>
        <li>{ goat.t2 }</li>
        <li>With faces bright like the sun</li>
        <li>On a rainy day, drip drop drip</li>
        <li>{ goat.t3 }</li>
        <li>{ goat.t4 }</li>
        <li>{ goat.t5 }</li>
      </ul>
      <button  type="button"
        	onClick= { () =>
          		setGoat({
            			...goat ,
            			t2 : 'Several baby goats are playing and grazing happily' 
          		})
        	}
      >
        Fix Incorrect Line
      </button>
    </section>
  );
}

const myApp = ReactDOM.createRoot(document.getElementById('root'));
myApp.render( <BabyGoat /> );