import style from '../MobileBannerSvg/style.module.scss'

function MobileBannerSvg({ id }) {
    switch (id) {
        case "first":
            return (
                <div className={style.lineOne}>
                </div>
            );

        case "second":
            return (
                <div className={style.lineTwo}>
                </div>
            );

        case "third":
            return (
                <div className={style.lineThree}>
                </div>
            );

        default:
            return
    }
}

export default MobileBannerSvg;