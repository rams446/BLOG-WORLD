import { Link } from "react-router-dom";
import * as userService from '../../utilities/users-service'
import styles from './NavBar.module.css';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }

  return (
    <nav>
      <h1> <span>Welcome, {user.name}  </span>  </h1>
      <ul className={styles.ul}>
      <li className={styles.li}><Link to="/homepage">HomePage  </Link> </li>
     
      <li  className={styles.li}> <Link to="/homepage/myblogs">  My Blogs  </Link> </li>
      <li className={styles.li}> <Link to="/homepage/favorites">  My Favorites  </Link></li>
      <li className={styles.li}> <Link to="" onClick={handleLogOut}>
        Log Out
      </Link></li>
      </ul>
    </nav>
  );
}