import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/Navigation/navigation.component';

import Home from "./routes/Home/home.component";
import SignIn from './components/Sign-In/sign-in.component';

const Shop = () => {
  return (
    <h1>Hi This is Shop Page</h1>
  )
}

const App = () => {
  return (
    <Routes>

      <Route path='/' element={<Navigation />}>

        <Route index element={<Home />} ></Route>
        <Route path='shop' element={<Shop />} ></Route>
        <Route path='sign-in' element={<SignIn />}></Route>
        
      </Route>

    </Routes >
  );
}

export default App;
