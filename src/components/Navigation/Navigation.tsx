import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <NavLink
        to="/"
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? "pending" : "",
            isActive ? "active" : "",
            isTransitioning ? "transitioning" : "",
          ].join(" ")
        }
      >
        <img
          src={logo}
          className={styles.navigation__logo}
          alt="On Your Mark logo"
        />
      </NavLink>
    </nav>
  );
};

export default Navigation;
