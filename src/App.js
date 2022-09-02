import './App.css';
import EditorSpace from './components/EditorSpace';

const App = () => {
  const something = () =>{
    const invoke = window.__TAURI__.invoke

    // 이제 명령을 호출할 수 있습니다!
    // 앱 배경을 우클릭하고 개발자 도구를 엽니다.
    // "Hello, World!"가 콘솔에 출력되는 걸 볼 수 있습니다!
    invoke('greet', { name: 'World' })
      // `invoke`는 Promise를 반환합니다
      .then((response) => console.log(response))
  }
  return (
    <div className="App">
      <header className="App-header">
        <EditorSpace className="Editor" />
        <a>hello</a>
      </header>
    </div>
  );
}

export default App;
