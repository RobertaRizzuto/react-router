import styles from "./App.module.scss";

import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
 
  return (
    <div className={styles.App}>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
