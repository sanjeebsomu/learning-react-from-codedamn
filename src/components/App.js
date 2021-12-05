import './App.css';
import Custom from './Custom';
import Header from './Header';

function App() {
  let city = "Bhubaneswar";
  let age = 2;
  return (
    <>
    <Header />
    <Custom name="Sanjeeb somu Gochhayat" city={city}/>
    {/* {false && <p>This may be visible</p>} */}
    {age > 18 && <p>Allowed</p>}
    {age > 18 ? <p>Allowed</p> : <p>Not Allowed</p>}
    </>
  );
}

export default App;
