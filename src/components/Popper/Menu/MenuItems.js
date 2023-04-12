import styles from "./Menu.module.scss"
import Button from "../../Button";
// import clsx from 'clsx'
import classNames from "classnames/bind";

const cx = classNames.bind(styles)

function MenuItems({data, onClick}) {
    return (
            <Button className={cx('menu-button')} onClick={onClick} ><div className={cx('menu-icon')}>{data.icon}</div> {data.title}</Button>
    )
}


export default MenuItems; 