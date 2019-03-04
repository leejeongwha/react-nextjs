import React, {Component} from "react";
import Style from './Footer.scss';

class Footer extends Component {
    render() {
        return (
            <div className={Style.footer}>
                <div className={Style.inner}>
                    <a href="http://www.naver.com" className={Style.link_naver}><span className={Style.blind}>naver Corp</span></a>
                    <ul className={Style.sns}>
                        <li><a href="#"><span className={Style.blind}>Facebook</span></a></li>
                        <li><a href="#"><span className={Style.blind}>Twitter</span></a></li>
                        <li><a href="#"><span className={Style.blind}>BAND</span></a></li>
                        <li><a href="#"><span className={Style.blind}>BLOG</span></a></li>
                        <li><a href="#"><span className={Style.blind}>CAFE</span></a></li>
                        <li><a href="#"><span className={Style.blind}>Instagram</span></a></li>
                    </ul>
                    <a href="https://www.nike.com/kr/ko_kr/" className={Style.link_nike}><span className={Style.blind}>Sponsored by Nike</span></a>
                </div>
            </div>
        );
    }
}

export default Footer;