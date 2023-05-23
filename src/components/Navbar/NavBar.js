import { Link } from "react-router-dom";
import * as userService from '../../utilities/users-service'

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }

  return (
    <nav>
      <span>Welcome, {user.name}  </span>
      <Link to="/homepage">HomePage  </Link>
      &nbsp; | &nbsp;
      <Link to="/homepage/myblogs">  My Blogs  </Link>
      <Link to="/homepage/favorites">  My Favorites  </Link>
      <Link to="" onClick={handleLogOut}>
        Log Out
      </Link>
    </nav>
  );
}