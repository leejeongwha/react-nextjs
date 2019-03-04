import React, {Component} from "react";
import Slider from "react-slick";
import Style from './sample.scss';
import TabLang from '@components/common/TabLang';
import Footer from './Footer';
import Section from './Section';
//react slick sample https://react-slick.neostack.com/
class Index extends Component {
    constructor(props) {
        super(props);
    }

    renderSlider() {
        const settings = {
            dots: false,
            infinite: false,
            button: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: false,
            prevArrow: false
        };

        return (
            <div className={Style.slider_area}>
                <Slider {...settings}>
                    <div>
                        <img src={require("./img/kr/bitmap_01.jpg")} width="850" height="1200" alt="BTS"/>
                    </div>
                    <div>
                        <img src={require("./img/kr/bitmap_02.jpg")} width="850" height="1200" alt="fromis_9"/>
                    </div>
                    <div>
                        <img src={require("./img/kr/bitmap_03.jpg")} width="850" height="1200" alt="GOT7"/>
                    </div>
                    <div>
                        <img src={require("./img/kr/bitmap_04.jpg")} width="850" height="1200" alt="(G)I-DLE"/>
                    </div>
                    <div>
                        <img src={require("./img/kr/bitmap_05.jpg")} width="850" height="1200" alt="IZ*ONE"/>
                    </div>
                </Slider>
            </div>
        )
    }

    render() {
        return (
            <div className={Style.wrap_global}>
                <div className={Style.list_banner_slide}>
                    {this.renderSlider()}
                </div>
                <div className={Style.spot}>
                    <div className={Style.inner}>
                        <h2><a href="#"><span className={Style.blind}>VLIVE</span></a></h2>
                        <TabLang clazz={Style.tab_lang}/>
                        <h3 className={Style.blind}>Re:memVer party 2019 VLIVE GLOBAL AWARD</h3>
                        <p className={Style.blind}>2018년 V에서 활약한 아티스트와 함께 한 해를 기억하고 돌아보며 기념하는 파티</p>
                        <strong className={Style.blind}>V로 아티스트를 사랑하고 아껴주는 누구보다 소중한 팬 여러분을 초대합니다.</strong>
                        <a href="https://www.vlive.tv/gvt/2019" className={Style.title_link}><span className={Style.blind}>2019 GLOBAL VLIVE TOP 10</span></a>
                        <dl className={Style.blind}>
                            <dt>방송시간</dt>
                            <dd>2019.02.25 ~ 2019.03.02 KST+</dd>
                        </dl>
                        <a href="https://www.nike.com/kr/ko_kr/" className={Style.spot_nike}><span className={Style.blind}>Sponsored by Nike</span></a>
                    </div>
                </div>
                <Section />
                <Footer />
            </div>
        );
    }
}

export default Index;