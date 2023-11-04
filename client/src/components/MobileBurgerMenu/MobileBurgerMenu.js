import style from '../MobileBurgerMenu/style.module.scss'
import Button from '@mui/material/Button';

function MobileBurgerMenu({ active }) {

    return (
        <div className={!active ? [style.wrapperContent, style.active].join(' ') : [style.wrapperContent]}>
            <nav className={style.nav}>
                <p>About us</p>
                <p>Brands</p>
                <p>Commissions</p>
                <p>News</p>
                <p>Contact us</p>
                <p>Careers</p>
            </nav>

            <div className={style.wrapperBtn}>
                <Button className={style.btn} variant="outlined">LOG IN</Button>
                <Button className={style.btn} variant="contained">SIGN UP</Button>
            </div>
        </div>
    )
}

export default MobileBurgerMenu;