import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <div class="header">
                <div className="h_sc">
                    <div className="htit">
                        <h1 className="h1">
                            <a href="http://m.naver.com" className="gnb_naver N=a:gnb.naver"><span className="blind">네이버</span></a>
                            <a href="http://m.pay.naver.com/mobile/home" className="_npay gnb_pay N=a:gnb.pay"><span className="blind">페이</span></a><a href="http://shopping2.naver.com/home/m/index.nhn" className="gnb_shopping N=a:gnb.my"><span className="blind">쇼핑</span></a>
                        </h1>
                        <div className="g_menu">
                            <a href="http://m.pay.naver.com/mobile/setting/home" className="gnb_set N=a:gnb.setting">설정</a>
                        </div>
                    </div>
                    <div className="lnb _layout_lnb">
                        <span className="grd_prev"></span>
                        <span className="grd_next"></span>
                        <div id="view" className="_layout_lnb_view">
                            <div className="inr _layout_lnb_scroller" queryid="C1456451322913416753">
                                <ul className="h_scl_u">
                                    <li className="h_scl_o menu1"><a href="https://m.pay.naver.com"><span>홈</span></a></li>
                                    <li className="h_scl_o menu2"><a href="https://m.pay.naver.com/o/home" className="N=a:lnb.order"><span>결제내역</span></a></li>
                                    <li className="h_scl_o menu4"><a href="https://m.pay.naver.com/send/m/list/s" className="N=a:lnb.send"><span>송금</span></a></li>
                                    <li className="h_scl_o menu8"><a href="https://pay.naver.com/mygift/mobile/s" className="N=a:lnb.gift"><span>선물함</span></a></li>
                                    <li className="h_scl_o menu3"><a href="https://m.pay.naver.com/mypoint/mobile/nm" className="N=a:lnb.point"><span>포인트</span></a></li>
                                    <li className="h_scl_o menu6 selected"><a href="http://event2.pay.naver.com/v/m/event/benefit/list" className="N=a:lnb.event"><span>이벤트·쿠폰</span></a></li>
                                    <li className="h_scl_o menu7"><a href="https://m.pay.naver.com/mobile/shoppingInquiry/list" className="N=a:lnb.review"><span>문의·리뷰</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="snb">
                        <ul className="ws_tp4">
                            <li className="selected"><a href="http://event2.pay.naver.com/v/m/event/benefit/list" className="N=a:snb.event"><span>이벤트</span></a></li>
                            <li><a href="http://m.pay.naver.com/b/coupon" className="N=a:snb.coupon"><span>쿠폰</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;