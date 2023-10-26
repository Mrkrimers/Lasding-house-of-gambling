import style from '../Footer/Footer.module.scss'
import Icons from '../Icons/Icons'

export default function Footer() {
    return (
        <div className={style.wrapper}>

            <nav className={style.nav}>
                <p>Terms & Conditions</p>
                <p>Cookies</p>
                <p>Contacts</p>
                <p>Careers</p>
                <p>Brand Guide</p>
            </nav>

            <div className={style.info}>
                <p>Our social media:</p>

                <div className={style.wrapperIcons}>
                    <Icons id='Twit' />
                    <Icons id='FaceBook' />
                    <Icons id='Insta' />
                    <Icons id='Link' />
                    <Icons id='YouTube' />
                    <Icons id='TikTok' />
                    <Icons id='TG' />
                    <Icons id='Vk' />
                </div>
            </div>

        </div>
    )
}
