import { Link } from 'react-router-dom'
import style from '../Footer/Footer.module.scss'
import Icons from '../Icons/Icons'

export default function Footer() {
    return (
        <div className={style.wrapper}>

            <nav className={style.nav}>
                <Link to={'/*'}><p>Terms & Conditions</p></Link>
                <Link to={'/*'}><p>Cookies</p></Link>
                <Link to={'/*'}><p>Contacts</p></Link>
                <Link to={'/*'}><p>Careers</p></Link>
                <Link to={'/*'}><p>Brand Guide</p></Link>
            </nav>

            <div className={style.info}>
                <p>Our social media:</p>

                <div className={style.wrapperIcons}>
                    <Link to={'/*'}><Icons id='Twit' /></Link>
                    <Link to={'/*'}><Icons id='FaceBook' /></Link>
                    <Link to={'/*'}><Icons id='Insta' /></Link>
                    <Link to={'/*'}><Icons id='Link' /></Link>
                    <Link to={'/*'}><Icons id='YouTube' /></Link>
                    <Link to={'/*'}><Icons id='TikTok' /></Link>
                    <Link to={'/*'}><Icons id='TG' /></Link>
                    <Link to={'/*'}><Icons id='Vk' /></Link>
                </div>
            </div>

        </div>
    )
}
