import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import styles from "./Navigation.module.css";
import { Box } from "@chakra-ui/react";

const Navigation = () => {
  return (
    <Box boxShadow="md">
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
    </Box>
  );
};

export default Navigation;
