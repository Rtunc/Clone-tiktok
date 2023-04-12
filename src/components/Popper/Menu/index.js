import Tippy from "@tippyjs/react/headless";

import styles from "./Menu.module.scss";
import { Wrapper as PopperWrapper } from "../../Popper";
import MenuItems from "./MenuItems";
import classNames from "classnames/bind";
import { useState } from "react";
import Header from "./Header";
const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];
  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;

      return (
        <MenuItems
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory(prev => [...prev, item.children]);
            }
          }}
        ></MenuItems>
      );
    });
  };

  return (
    <Tippy
      delay={[0, 500]}
      interactive
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
          <PopperWrapper></PopperWrapper>
          <PopperWrapper className={cx("menu-wrapper")}>
            
            {history.length >1 && <Header title="Language" onBack={()=> {setHistory(prev=> prev.slice(0, prev.length-1))}}></Header>}
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}
export default Menu;
