import styles from './button.module.scss'
import { Link } from 'react-router-dom';
import clsx from 'clsx'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)


function Button({ to, href, children, primary,outline,small=false,medium = false, large= false,className = "",lefticon, onClick , passProps}) {
    let Component = 'button'
    let Lefticon = lefticon
    const props = {
        onClick,
...passProps
    };
    if (to) {
        props.to = to
        Component = Link
    }
    else if (href) {
        props.href = href
        Component = 'a'
    }
    const classes = cx('wrapper', {
        primary,
        outline,
        small,
       medium,
    }, className) 
    

    return (
        <Component className={classes} {...props} >
            {/* <Lefticon></Lefticon> */}
            <span>{children}</span>
        </Component>
    )
}
export default Button;