    const { useState, useEffect } = React;

      function Sunset(props) {
        const [fruit, setFruit] = useState(' 가을의 달빛 ');

        useEffect(() => {
          setFruit(props.basket);
        }, [props.basket]);

        return React.createElement(
          'p',
          null,
          '허수아비 팔 벌려 웃음짓고',
          React.createElement('br'),
          '초가지붕 둥근 박 꿈 꿀때',
          React.createElement('br'),
          '고개숙인 ',
          React.createElement('b', { className: 'orange' }, fruit),
          '노랗게 익어만 가는'
        );
      }

      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(React.createElement(Sunset, { basket: ' 논밭의 열매 ' }));