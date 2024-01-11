import './App.css';

import Home from './component/Home/Home';
import Navbar from './component/NAVBAR/Navbar';
import { Route, Routes } from 'react-router-dom';
import Mancollection from '../src/component/MANCOLLECTION/Mancollection'
import Store from './component/STOREE/Store';
import Addcart from './component/ADDTOCART/Addcart';
import Contextprovider from './component/CONTEXT/Globalcontext';
function App() {
  return (
    <Contextprovider>
    <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/store' element={<Store />} />
        <Route exact path='/mens' element={<Mancollection />} />
        <Route exact path='/cart' element={<Addcart />} />
        <Route exact path='/collection' element={<Home/>} />
        <Route exact path='shoppingnow' element={<Store/>} />

      </Routes>




    </Contextprovider>
  );
}

export default App;
