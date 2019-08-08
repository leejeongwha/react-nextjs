import React, { Component } from "react";
import i18next, { whitelist } from "@components/translate";
import { observable } from 'mobx';
import { observer } from 'mobx-react';

class LocalStore {
    @observable langText = "sadf";
}

@observer
class Footer extends Component {
    store = new LocalStore();

    //i18next란 이름으로 cookie에 세팅
    languageChange = (event) => {
        var date = new Date();
        date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000); //7일간
        document.cookie = 'i18next=' + event.target.value + ';expires=' + date.toUTCString() + ';path=/';
        location.reload();
    }

    render() {
        if (i18next.language == 'th') {
            this.store.langText = "Tiếng việt";
        } else if (i18next.language == 'en') {
            this.store.langText = "English";
        } else {
            this.store.langText = "한국어";
        }

        return (
            <footer id="footer" className="web_footer">
                <div className="edwith_footer_area">
                    {/* <!-- [D] 로고, 앱 들어간 경우 .type_app 클래스 추가 --> */}
                    <div className="ft_bnr type_app ">
                        <p className="text">더 많은 강좌 정보와 개인 진도 관리를 통해<br />더 나은 교육 기회를 경험해 보세요.</p>
                        <a href="#" className="down_app">{i18next.t('appDown')}</a>
                        <div className="ft_link">
                            <a href="#">로그인</a>
                            <a href="#">PC버전</a>
                            <label htmlFor="lang_sel" className="lang_box">
                                {/* <!-- [D] 선택된 option 값에 맞춰 텍스트 변경해주세요 --> */}
                                {this.store.langText}
                                <select id="lang_sel" name="lang_sel" onChange={this.languageChange} defaultValue={i18next.language}>
                                    <option value="ko">한국어</option>
                                    <option value="en">English</option>
                                    <option value="th">Tiếng việt</option>
                                </select>
                            </label>
                        </div>
                        <div className="law">
                            <span className="law_text"><a href="#">이용약관</a></span>
                            <strong className="law_text"><a href="#">개인정보처리방침</a></strong>
                        </div>
                        <p className="copyright">&copy; CONNECT All Rights Reserved.<br /><em>Powered by NAVER</em></p>
                    </div>
                </div>
            </footer>

        )
    }
}

export default Footer;