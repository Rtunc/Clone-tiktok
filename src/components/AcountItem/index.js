import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AccountItem.module.scss'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function AccountItemt () {
    return (
        <div className={styles.wrapper}>
            <img src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/041db7933262c41bdfb93c51cf2b25e7~c5_100x100.jpeg?x-expires=1680944400&x-signature=O0vbK3g0HsXF8WW9g6%2FCZdBcxMk%3D" alt ="Hoa" className={styles.avatar}></img>
            <div className={styles.info}>
                <h4 className={styles.username}>hazen_ng</h4>
                <span className={styles.name}>Hazen
               
                </span>
            </div>
        </div>
    );
}

export default AccountItemt