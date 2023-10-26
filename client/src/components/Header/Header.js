import Button from '@mui/material/Button';
import style from '../Header/style.module.scss'
import { useState } from 'react';

export default function Header() {

    const [lang, setLang] = useState('EN')

    const change = () => {
        lang === "EN" ? setLang('RU') : setLang('EN')
    }

    return (
        <div className={style.wrapper}>

            <nav className={style.nav}>
                <p>About us</p>
                <p>Brands</p>
                <p>Brands</p>
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

        </div>
    )
}