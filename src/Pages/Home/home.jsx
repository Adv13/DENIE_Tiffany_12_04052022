import { NavLink } from 'react-router-dom';

/**
* This function returns the content of the Home page.
*/
function Home(){
    return(
        <main>
        <NavLink to={`dashboard/12`}>
          <button>Go to user 12</button>
        </NavLink>
        <NavLink to={`dashboard/18`}>
          <button>Go to user 18</button>
        </NavLink>
      </main>
    )
}

export default Home;