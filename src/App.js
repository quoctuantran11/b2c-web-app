import './App.css';
import './i18n';
import Header from './reusable/Header';
import OrderHistory from './components/OrderHistory';

function App() {
  return (
    <div className="App">
        <Header />
        <OrderHistory />
    </div>
  );
}

export default App;
