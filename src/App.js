import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import './App.css';

const user ={
name:'sadiki sept',
class:'Mahama coding'
};

function App() {
  return (
    <div className="App">
      <Header />
      <h1 className='name'>{user.name}</h1>
      <h2>{user.class}</h2>
      <Footer/>
    </div>
   
  );
}

export default App;
