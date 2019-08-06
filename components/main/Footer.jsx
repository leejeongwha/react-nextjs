import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <footer id="footer" className="web_footer">
                <div className="edwith_footer_area">
                    {/* <!-- [D] 로고, 앱 들어간 경우 .type_app 클래스 추가 --> */}
                    <div className="ft_bnr type_app ">
                        <p className="text">더 많은 강좌 정보와 개인 진도 관리를 통해<br />더 나은 교육 기회를 경험해 보세요.</p>
                        <a href="#" className="down_app">앱 다운받기</a>
                        <div className="ft_link">
                            <a href="#">로그인</a>
                            <a href="#">PC버전</a>
                            <label htmlFor="lang_sel" className="lang_box">
                                {/* <!-- [D] 선택된 option 값에 맞춰 텍스트 변경해주세요 --> */}
                                한국어
                                <select id="lang_sel" name="lang_sel">
                                    <option>한국어</option>
                                    <option>English</option>
                                    <option>日本語</option>
                                    <option>Tiếng việt</option>
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