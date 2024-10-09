import Header from './components/Header';
import Global from './styles/Global';
// import Banner from './components/Banner';
import Footer from './components/Footer';
// import Home from './pages/Home';
import Imobi from './pages/Imobi';

function App() {

  return (
      <div>
      <Header />
      <Imobi/>
      {/* <Banner/>
      <Home /> */}
      <Footer/>
      <Global />
      </div>
  )
}

export default App;
