/* import { NavLink } from "react-router-dom";
import styles from "./css/navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.navlink}>
        Home
      </NavLink>
      <NavLink to="/show-book" className={styles.navlink}>
        Show Book
      </NavLink>
      <NavLink to="/add-book" className={styles.navlink}>
        Add Book
      </NavLink>
    </nav>
  );
};
 */
import { NavLink } from "react-router-dom";
import styles from "./css/navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${styles.navlink} ${styles.active}` : styles.navlink
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/show-book"
        className={({ isActive }) =>
          isActive ? `${styles.navlink} ${styles.active}` : styles.navlink
        }
      >
        Show Book
      </NavLink>
      <NavLink
        to="/add-book"
        className={({ isActive }) =>
          isActive ? `${styles.navlink} ${styles.active}` : styles.navlink
        }
      >
        Add Book
      </NavLink>
    </nav>
  );
};
