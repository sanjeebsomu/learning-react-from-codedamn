import './App.css';
import Custom from './Custom';
import Header from './Header';

let city = "Bhubaneswar";
let age = 2;

function App() {

  function btnClickedFn() {
    console.log('i was pressed');
  }

  return (
    <>
    <Header />
    <Custom name="Sanjeeb somu Gochhayat" city={city}/>
    {/* {false && <p>This may be visible</p>} */}
    {age > 18 && <p>Allowed</p>}
    {age > 18 ? <p>Allowed</p> : <p>Not Allowed</p>}
    <button onClick={btnClickedFn} >Click Me</button>
    </>
  );
}

export default App;
