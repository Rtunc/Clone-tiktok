import styles from "./Header.module.scss";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion, faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import {
  faEarthAsia,
  faEllipsisVertical,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import images from "../../../../assets/images";
import Tippy from "@tippyjs/react/headless";

import { useEffect, useState } from "react";
import { Wrapper as PopperWrapper } from "../../../Popper";
import AccountItemt from "../../../AcountItem";
import Button from "../../../Button";
import Menu from "../../../Popper/Menu"

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {icon: <FontAwesomeIcon icon = {faEarthAsia}></FontAwesomeIcon>,
    title: "English"
  },
  {icon:  <FontAwesomeIcon icon ={faCircleQuestion}></FontAwesomeIcon>,
    title: "Feedback and help",
    to:"/feedback"
  }, 
  {icon: <FontAwesomeIcon icon ={faCircleQuestion}></FontAwesomeIcon>,
  title:"Keyboard shortcuts"
  }, 
  {icon: <FontAwesomeIcon icon ={faCircleQuestion}></FontAwesomeIcon>,
  title:"Dark mode"
  }
]

function Header() {
  const [searchResault, setSearchResault] = useState([]);

 
  return (
    <header className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.logo} alt="Tiktok">
          <img src={images.logo}></img>
        </div>
        <Tippy
          interactive
          
          render={(attrs) => (
            <div className={styles.search_result} tabIndex="-1">
              <PopperWrapper>
                <h4 className={styles.search_titles}>Accounts</h4>
                <AccountItemt></AccountItemt>
                <AccountItemt></AccountItemt>
                <AccountItemt></AccountItemt>
                <AccountItemt></AccountItemt>
              </PopperWrapper>
            </div>
          )}
        >
          <div className={styles.search}>
            <input
              placeholder="Search acounts and videos"
              spellCheck={false}
            ></input>
            <button className={styles.clear}>
              <FontAwesomeIcon
                icon={faCircleXmark}
                className={styles.clear_icon}
              />
            </button>
            <button className={styles.loading}>
              <FontAwesomeIcon icon={faSpinner} />
            </button>

            <button className={styles.search_btn}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        <div className={cx("action")}>
          <Button outline medium>+ Upload</Button>
          <Button primary medium>Log in</Button>
          <Menu items = {MENU_ITEMS}>
          <button className={styles.more_button}>
              <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
            </button>
          </Menu>
          
        </div>
      </div>
    </header>
  );
}

export default Header;
