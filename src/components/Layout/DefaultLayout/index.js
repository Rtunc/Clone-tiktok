import Header from "../DefaultLayout/Header";
import Sidebar from "../DefaultLayout/Sidebar";
import classNames from "classnames";
import styles from "./DefaultLayout.module.scss"
function DefaultLayout({ children }) {
  return ( <div className={styles.wrapper}>  
    <Header/>
 
        <div className={styles.container} >
        <Sidebar/>
        <div className={styles.content}>{children}</div>
            
        </div>
   
    
      </div>);
}
export default DefaultLayout;
