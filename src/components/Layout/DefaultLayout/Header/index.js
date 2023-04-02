import styles from "./Header.module.scss"
import classNames from "classnames";

const cx = classNames.bind(styles)
function Header() {
    return <header className={styles.wrapper}>
        <div className={styles.inner}></div>
    </header>
}

export default Header;