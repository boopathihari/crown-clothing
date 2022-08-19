import Directory from '../../components/directory/directory.component';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div>
    <Directory/>
    <Outlet></Outlet>

    </div>
    
  );
}

export default Home;