import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './ReactComponent/TodoList';
import Calculator from './ReactComponent/Calculator';
import TextExample from './ReactComponent/TextExample';
import SearchFilter from './ReactComponent/Search';

function App() {
  // const items = [
  //   { name: 'halo' },
  //   { name: 'xin chao' },
  //   { name: "sieu nhan" }
  // ];
  return (
    <div className="App">
      <TextExample />
      <TodoList />
      <Calculator />
      <SearchFilter  />
    </div>
  );
}

export default App;
