import styles from "./Menu.module.scss"
import Button from "../../Button";
// import clsx from 'clsx'
import classNames from "classnames/bind";

const cx = classNames.bind(styles)

function MenuItems({data}) {
    return (
            <Button className={cx('menu-button')}>{data.icon} {data.title}</Button>
    )
}

setTimeout(()=> {
    debugger
},3000)
export default MenuItems; 