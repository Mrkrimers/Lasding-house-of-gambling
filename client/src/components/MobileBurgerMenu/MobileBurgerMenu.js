import { useNavigate } from 'react-router-dom';
import style from '../MobileBurgerMenu/style.module.scss'
import Button from '@mui/material/Button';

function MobileBurgerMenu({ active }) {
    const navigate = useNavigate()

    return (
        <div className={!active ? [style.wrapperContent, style.active].join(' ') : [style.wrapperContent]}>
            <nav className={style.nav}>
                <p onClick={() => navigate('/*')}>About us</p>
                <p onClick={() => navigate('/*')}>Brands</p>
                <p onClick={() => navigate('/*')}>Commissions</p>
                <p onClick={() => navigate('/*')}>News</p>
                <p onClick={() => navigate('/*')}>Contact us</p>
                <p onClick={() => navigate('/*')}>Careers</p>
            </nav>

            <div className={style.wrapperBtn}>
                <Button className={style.btn} onClick={() => navigate('/*')} variant="outlined">LOG IN</Button>
                <Button className={style.btn} onClick={() => navigate('/*')} variant="contained">SIGN UP</Button>
            </div>
        </div>
    )
}

export default MobileBurgerMenu;