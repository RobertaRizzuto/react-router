import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import logo from "./logo.svg";
import menu from "./menu.svg";

const Header = ({ children }) => {
  const [isDropdownVisible, setDropdownVisibility] = useState(false);
  const onHadleClick = useCallback(
    () => setDropdownVisibility(!isDropdownVisible),
    [isDropdownVisible]
  );
  return (
    <header className={styles.Header}>
      <nav className={styles.navbar}>
        <section className={styles.logotype}>
          <img className={styles.img} src={logo} alt="logo" />
        </section>
        <section className={styles.side}>
          {children}
          <div className={styles.menu}>
            <img
              onClick={onHadleClick}
              className={styles.img}
              src={menu}
              alt="menu"
            />
          </div>
        </section>
      </nav>
      {isDropdownVisible && (
        <div className={styles.dropdown}>
          <ul>
            <li>
            <Link to="/">HOME</Link>
            </li>
            <li>
            <Link to="gallery">GALLERY</Link>
            </li>
            <li>
            <Link to="surprise">SURPRISE</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
