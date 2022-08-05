import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/Navigation/navigation.component';

import Home from "./routes/Home/home.component";
import Authentication from './components/Authentication/Authentication.component';
import Shop from './components/shop/shop.component';

const App = () => {
  return (
    <Routes>

      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} ></Route>
        <Route path='shop' element={<Shop />} ></Route>
        <Route path='auth' element={<Authentication />}></Route>
      </Route>

    </Routes >
  );
}

export default App;
