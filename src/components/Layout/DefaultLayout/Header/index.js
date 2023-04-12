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

import { useEffect, useRef, useState } from "react";
import { Wrapper as PopperWrapper } from "../../../Popper";
import AccountItemt from "../../../AcountItem";
import Button from "../../../Button";
import Menu from "../../../Popper/Menu"

const cx = classNames.bind(styles);
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0bcf176752mshd0fb90b8eef0e2cp1471b3jsnf21d4654d652',
		'X-RapidAPI-Host': 'tiktok-video-no-watermark2.p.rapidapi.com'
	}
};




const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          code: 'en',
          title: "English"
        },
        {
          code: 'vn',
          title: "Vietnamese"
        }
      ]
    }
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>,
    title: "Feedback and help",
    to: "/feedback"
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>,
    title: "Keyboard shortcuts"
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>,
    title: "Dark mode"
  }
]

function Header() {
  const [searchResault, setSearchResault] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [showResult, setShowResult] = useState(false)

  const inputRef = useRef();
  

  useEffect(() => {
    if(!searchValue.trim()) {
      console.log('ko co gt')
      return;
    }
    
    fetch('https://tiktok-video-no-watermark2.p.rapidapi.com/user/search?keywords=hazen&count=10&cursor=0', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
  },[searchValue]);

 
 const handleHindResult = () => {
  setShowResult(false);
 }

  return (
    <header className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.logo} alt="Tiktok">
          <img src={images.logo}></img>
        </div>
        <Tippy

          interactive
          visible={showResult}
          render={(attrs) => (
            <div className={styles.search_result} tabIndex="-1">
              <PopperWrapper>
                <h4 className={styles.search_titles}>Accounts</h4>
                {/* {searchResault.map((result)=> {
                  <AccountItemt></AccountItemt>
                })} */}
              </PopperWrapper>
            </div>
          )}
          onClickOutside={handleHindResult}
        >
          <div className={styles.search}>
            <input
              ref={inputRef}
              value={searchValue}
              placeholder="Search acounts and videos"
              spellCheck={false}
              onFocus={()=>setShowResult(true)}
              onChange={e => {setSearchValue(e.target.value); console.log(e.target.value) }}
            ></input>

            {!!searchValue && (<button className={styles.clear} onClick={()=> {
              setSearchValue('');
              inputRef.current.focus();
              setSearchResault([]);
            }}>

              <FontAwesomeIcon
                icon={faCircleXmark}
                className={styles.clear_icon}
              />
            </button>)}

            {/* <button className={styles.loading}>
              <FontAwesomeIcon icon={faSpinner} />
            </button> */}

            <button className={styles.search_btn} >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        <div className={cx("action")}>
          <Button outline medium>+ Upload</Button>
          <Button primary medium>Log in</Button>
          <Menu items={MENU_ITEMS}>
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
