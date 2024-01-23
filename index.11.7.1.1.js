class Autumn extends React.Component {
   constructor(props) {
      super(props);
      this.state = { sunset: '모락모락 피어나는 저녁 연기' };
   }
   render(){
      return (
         <section>
            <p>가을바람 머물다 간 들판에</p>
            <p>{ this.state.sunset }</p>
            <p>색동옷 갈아입은 가을 언덕에</p>
            <p>붉게 물들어 타는 저녁놀</p>
         </section>
      );
   }
}

const myApp = ReactDOM.createRoot( document.getElementById( 'root' ) );
myApp.render( <Autumn /> );