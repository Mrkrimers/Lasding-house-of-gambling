import style from '../Blog/Blog.module.scss'
import { Link } from 'react-router-dom'

function Blog() {
    return (
        <div className={style.border}>

            <div className={style.wrapper}>
                <Link to={'/*'}>
                    <div className={style.card}>
                        <p>Payment methods: Skrill, Neteller, webmoney, Bank transfer</p>
                        <p>10.02.2023</p>
                    </div>
                </Link>
                <Link to={'/*'}>
                    <div className={style.card}>
                        <p>Payment methods: Skrill, Neteller, webmoney, Bank transfer</p>
                        <p>10.02.2023</p>
                    </div>
                </Link>
                <Link to={'/*'}>
                    <div className={style.card}>
                        <p>Payment methods: Skrill, Neteller, webmoney, Bank transfer</p>
                        <p>10.02.2023</p>
                    </div>
                </Link>
                <Link to={'/*'}>
                    <div className={style.card}>
                        <p>Payment methods: Skrill, Neteller, webmoney, Bank transfer</p>
                        <p>10.02.2023</p>
                    </div>
                </Link>
                <Link to={'/*'}>
                    <div className={style.card}>
                        <p>Payment methods: Skrill, Neteller, webmoney, Bank transfer</p>
                        <p>10.02.2023</p>
                    </div>
                </Link>
                <Link to={'/*'}>
                    <div className={style.card}>
                        <p>Payment methods: Skrill, Neteller, webmoney, Bank transfer</p>
                        <p>10.02.2023</p>
                    </div>
                </Link>


            </div>

        </div>
    )
}

export default Blog;