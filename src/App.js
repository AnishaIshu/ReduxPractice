import { Provider } from 'react-redux';
import './App.css';
import Practice from './components/Practice';
import {store} from './Store';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
      <Practice />
        </Provider>
      </header>
    </div>
  );
}

export default App;
