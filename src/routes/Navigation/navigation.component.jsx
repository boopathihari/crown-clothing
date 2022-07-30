import { Outlet,Link } from 'react-router-dom';
import { Fragment } from 'react';

import { ReactComponent as CrwnLogo } from '../../Assets/crown.svg';

import './navigation.styles.scss';

const Navigation = () => {
    return (
      <Fragment>
          <div className='navigation'>
            <Link className="logo-container" to="/">
              <CrwnLogo className='logo' />
            </Link>

            <div className='nav-links-container'>
              <Link className="nav-link" to="/shop">
                <div>SHOP</div>
              </Link>

              <Link className="nav-link" to="/sign-in">
                <div>Sign-In</div>
              </Link>
            </div>

          </div>
        <Outlet />
      </Fragment>
    )
  }

export default Navigation;