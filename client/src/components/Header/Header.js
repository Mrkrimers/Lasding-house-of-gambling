import Button from '@mui/material/Button';
import style from '../Header/Header.module.scss'
import { useState } from 'react';
import MobileBurgerMenu from '../MobileBurgerMenu/MobileBurgerMenu';
import { Link, useNavigate } from 'react-router-dom';


export default function Header() {
    const [menu, setMenu] = useState(true)
    const [lang, setLang] = useState('EN')
    const navigate = useNavigate()

    const change = () => {
        lang === "EN" ? setLang('RU') : setLang('EN')
    }

    return (
        <>
            <div className={style.wrapper}>
                <nav className={style.nav}>
                    <Link to={'/*'}><p>About us</p></Link>
                    <Link to={'/*'}><p>Brands</p></Link>
                    <Link to={'/*'}> <p>Commissions</p></Link>
                    <Link to={'/*'}> <p>News</p></Link>
                    <Link to={'/*'}> <p>Contact us</p></Link>
                    <Link to={'/*'}><p>Careers</p></Link>
                </nav>

                <div className={style.btnWrapper}>

                    <div className={style.language}
                        onClick={change}>

                        <div className={style.img}></div>
                        <p>{lang}</p>
                    </div>

                    <Button className={style.btn} onClick={() => navigate('/*')} variant="outlined">LOG IN</Button>
                    <Button className={style.btn} onClick={() => navigate('/*')} variant="contained">SIGN UP</Button>
                </div>

                <div onClick={() => setMenu(!menu)}
                    className={menu ? style.burgerImgOpen : style.burgerImgClose}></div>

            </div >

            <MobileBurgerMenu active={menu} />
        </>
    )
}