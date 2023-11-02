import { Button } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from '../HomePage/HomePage.module.scss'
import Blog from "../../components/Blog/Blog";
import BannerSvg from "../../components/BannerSvg/BannerSvg";

function HomePage() {
    return (
        <div>
            <Header />

            <div className={style.main}>

                <div className={style.title}>
                    <h1>
                        <span>HOUSE OF</span>
                        <span>GAMBLING</span>
                    </h1>

                    <p>Raise your ROI with direct advertiser</p>

                    <div className={style.btn}>
                        <Button variant="contained">Become a Partner</Button>
                    </div>
                </div>

                <div className={style.wrapperBanner}>
                    <BannerSvg id='first' />
                    <BannerSvg id='second' />
                    <BannerSvg id='third' />
                </div>

                <div className={style.blog}>
                    <h1>BLOG</h1>

                    <Blog />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default HomePage;