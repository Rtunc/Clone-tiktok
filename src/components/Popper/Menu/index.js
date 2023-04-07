import Tippy from "@tippyjs/react/headless";

import styles from "./Menu.module.scss"
import {Wrapper as PopperWrapper }from "../../Popper"
import MenuItems from "./MenuItems";
import classNames from "classnames/bind";

const cx = classNames.bind(styles)


function Menu({children, items = []}) {
    // console.log(items)
    const renderItems = () => {
      return items.map((item, index)=> (
        
          <MenuItems key ={index} data = {item}></MenuItems>

       
      ))
    }
    console.log(renderItems())

    return (          <Tippy
        delay = {[0,500]}
        interactive 
        placement="bottom-end"
        render={(attrs) => (
          <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-wra')} >
                  {renderItems()}
            </PopperWrapper>
          </div>
        )}
      >
        {children}
      </Tippy>)
}
export default Menu;