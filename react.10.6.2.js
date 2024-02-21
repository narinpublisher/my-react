//React는 강력한 합성(Composition) 모델을 가지고 있으며, 상속 대신 합성을 사용하여 컴포넌트 간에 코드를 재사용하는 것이 좋습니다.
	//어떤 컴포넌트들은 어떤 자식 엘리먼트가 들어올 지 미리 예상할 수 없는 경우가 있습니다. 이러한 컴포넌트에서는 특수한 children prop을 사용하여 자식 엘리먼트를 출력에 그대로 전달하는 것이 좋습니다. 
function SpecialBorder(props) {
  return (
    <div className={'SpeBorder Border_' + props.color}>		  
      {props.children}
    </div>
  );
}

//FancyBorder는 {props.children}을 <div> 안에 렌더링하므로 전달된 엘리먼트들이 최종 출력됩니다.
function Content_1(props) {	
  return (
    <SpecialBorder color="blue">
      <h1>
        {props.title}
      </h1>
      <p className="Para_1 ">
        {props.message}
      </p>
    </SpecialBorder>
  );
}

//어떤 컴포넌트에서  “특수한" 컴포넌트를 고려해야 하는 경우가 있습니다. 예를 들어, WelcomeDialog는 Dialog의 특수한 경우라고 할 수 있습니다.  React에서는 이 역시 합성(Composition)을 통해 해결할 수 있습니다. 더 “구체적인” 컴포넌트가 “일반적인” 컴포넌트를 렌더링하고 props를 통해 내용을 구성합니다.
function Welcome() {
  return (
    <Content_1
      title="반갑습니다!"
      message="방문객 전원에게 웰컴 음료를 서비스하겠습니다." />
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Welcome />);

