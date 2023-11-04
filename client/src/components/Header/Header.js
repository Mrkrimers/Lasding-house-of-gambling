import Button from '@mui/material/Button';
import style from '../Header/Header.module.scss'
import { useState } from 'react';
import MobileBurgerMenu from '../MobileBurgerMenu/MobileBurgerMenu';

export default function Header() {
    const [menu, setMenu] = useState(true)
    const [lang, setLang] = useState('EN')

    const change = () => {
        lang === "EN" ? setLang('RU') : setLang('EN')
    }

    return (
        <>
            <div className={style.wrapper}>

                <nav className={style.nav}>
                    <p>About us</p>
                    <p>Brands</p>
                    <p>Commissions</p>
                    <p>News</p>
                    <p>Contact us</p>
                    <p>Careers</p>
                </nav>

                <div className={style.btnWrapper}>

                    <div className={style.language}
                        onClick={change}>

                        <div className={style.img}></div>
                        <p>{lang}</p>
                    </div>

                    <Button className={style.btn} variant="outlined">LOG IN</Button>
                    <Button className={style.btn} variant="contained">SIGN UP</Button>

                </div>

                <div onClick={() => setMenu(!menu)}
                    className={menu ? style.burgerImgOpen : style.burgerImgClose}></div>

            </div >

            <MobileBurgerMenu active={menu} />
        </>
    )
}