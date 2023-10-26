import { Button } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from '../HomePage/HomePage.module.scss'

function HomePage() {
    return (
        <div className={style.wrapper}>
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

                <div className={style.banner}></div>

                <div className={style.blog}></div>
            </div>

            <Footer />
        </div>
    )
}

export default HomePage;