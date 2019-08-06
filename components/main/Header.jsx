import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <header id="header">
                <div className="gnb">
                    <h1 className="logo">
                        <a href="#" className="service_logo">
                            <img alt="logo" src="https://ssl.pstatic.net/static/m/mooc/p/partner/next/logo_v4.png" />
                        </a>
                    </h1>
                    {/* <!-- 로그인영역 --> */}
                    <div className="login_area">
                        <div className="user_menu">
                            <a href="#" className="user"><img src="http://dev.ui.naver.com/tmp/?105x105_sprite01b_n_FFFFFF_100" width="32" height="32" alt="임시 이미지" /></a>
                            {/* <!-- [D] 레이어 활성화 시 on 클래스 추가 --> */}
                            <div className="layer_user_menu">
                                <div className="dimmed"></div>
                                <div className="ly_tbl">
                                    <div className="ly_tbl_td">
                                        <div className="user_action">
                                            <ul>
                                                <li><a href="#">담은 콘텐츠</a></li>
                                                <li><a href="#">로그아웃</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="#" className="login" style={{ display: "none" }}>로그인</a>
                    </div>
                    <a href="#" className="search_icon">
                        <span className="blind">검색하기</span>
                    </a>
                    <a href="#" className="btn_lecture_add" style={{ display: "none" }}>콘텐츠 담기</a>
                </div>
                {/* gnb_tab 추가 시, Y로 설정 */}
                <div className="gnb_tab_box">
                    <div className="scroll_view">
                        {/* <!-- [D] transform: translate(x, y)에서 x값으로 메뉴 위치를 조정해주세요. --> */}
                        <div className="scroller" style={{ transform: "translate(0, 0px) translateZ(0px);" }}>
                            <ul className="tab">
                                {/* <!-- [D] 탭 선택 시 li에 selected 클래스 추가 --> */}
                                <li className="selected"><a href="#">홈</a></li>
                                <li><a href="#">소프트웨어 개발</a></li>
                                <li><a href="#">UX 디자인</a></li>
                                <li><a href="#">비즈니스</a></li>
                                <li><a href="#">우수 대학 강좌</a></li>
                                <li><a href="#">수학</a></li>
                                <li><a href="#">영어</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;