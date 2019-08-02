import React, { PureComponent } from 'react';
import Head from 'next/head';
import Header from '@components/common/Header';

class Start extends PureComponent {
    static async getInitialProps({ ctx }) {
        return {};
    }

    render() {
        return (
            <div>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no" />
                    <meta name="format-detection" content="telephone=no" />

                    <meta property="og:title" content="포인트선물 친구 이벤트" />
                    <meta property="og:type" content="article" />
                    <meta property="og:url" content="https://campaign.naver.com/npay/pointgift_friend/" />
                    <meta property="og:image" content="https://campaign.naver.com/npay/pointgift_friend/img/SNS_1200x628.jpg" />
                    <meta property="og:description" content="포인트선물 할 때마다 100원 적립!" />
                    <meta property="og:article:thumbnailUrl" content="http://bookmarkimgs.naver.com/img/naver_profile.png" />
                    <meta property="og:article:author" content="네이버 페이" />
                    <meta property="og:article:author:url" content="http://pay.naver.com/" />

                    <title>포인트선물 : 네이버페이</title>
                    <link rel="stylesheet" type="text/css" href="https://m-campaign.naver.com/npay/event/template/header/css/header.css"></link>
                    <link rel="stylesheet" type="text/css" href="https://m-campaign.naver.com/npay/pointgift_friend/css/giftpoint.css" />
                    <link rel="stylesheet" type="text/css" href="https://m-campaign.naver.com/npay/pointgift_friend/css/web_font.css" />
                </Head>
                <div className="promotion_wrap">
                    <Header />
                    <div className="container">
                        <div id="content" className="content">
                            <div className="gift_point">
                                <div className="spot">
                                    <div className="inner">
                                        <h2 className="blind">7월엔 갖고있는 포인트를 선물해보세요!</h2>
                                        <p className="blind">친구가 선물 받는 즉시 100 포인트를 돌려드려요(친구 한 명당 1회, 최대 100명까지)</p>
                                        <div className="slider_area">
                                            <div className="slide01">
                                                <img src="/static/im/m.slide01.png" alt="" />
                                                <p className="blind">TO.쇼핑을 좋아하는 친구에게</p>
                                            </div>
                                            <div className="slide02">
                                                <img src="/static/im/m.slide02.png" alt="" />
                                                <p className="blind">TO.생일을 맞은 친구에게</p>
                                            </div>
                                            <div className="slide03">
                                                <img src="/static/im/m.slide03.png" alt="" />
                                                <p className="blind">TO.웹툰 좋아하는 친구에게</p>
                                            </div>
                                            <div className="slide04">
                                                <img src="/static/im/m.slide04.png" alt="" />
                                                <p className="blind">TO.사랑하는 가족에게</p>
                                            </div>
                                            <div className="slide05">
                                                <img src="/static/im/m.slide05.png" alt="" />
                                                <p className="blind">TO.숫자에 의미를 담아 선물</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="section01">
                                    <div className="inner">
                                        <h3 className="blind">내 휴대폰 연락처 친구에게 <strong>포인트선물해 보세요!</strong></h3>
                                        <strong className="blind">07.01 ~ 07.31</strong>
                                        <ol>
                                            <li>
                                                <h4 className="blind">휴대폰 연락처 불러오면 <strong>1만원!</strong></h4>
                                                <p className="blind">휴대폰 연락처 불러오기에 동의한 분 대상 <strong>1,000명 추첨하여 1만원 드려요!</strong></p>
                                                <p className="sub_desc">6.25~7.31내 연락처 불러오기 한 분 대상으로<br />추첨 8.16포인트지급</p>
                                                <div className="blind">
                                                    <strong>연락처 불러오는 방법</strong>
                                                    <ul>
                                                        <li>1. 포인트선물 받는 사람 &gt; 팝업 (연락처 불러오기)</li>
                                                        <li>2. 선물하기 목록 하단 배너 (매번 연락처 찾지 말고, 네이버에 불러오기!&gt;)</li>
                                                    </ul>
                                                    <p>포인트선물 받는 사람 선택 후 나오는 팝업에서 연락처를 불러오거나, 팝업을 건너뛰었다면 목록 하단의 배너를 통해 불러올 수 있어요!</p>
                                                </div>
                                                <strong className="point_stress">단, 연락처 불러오기는 네이버앱에서만 가능합니다.<br />(만약 팝업이나 배너가 안 뜬다면, 앱을 업데이트 해 보세요)</strong>
                                            </li>
                                            <li>
                                                <h4 className="blind">휴대폰 연락처 불러오고 친구에게 포인트 선물 할 때마다 <strong>100원!</strong></h4>
                                                <p className="blind"><strong>친구가 수락완료하는 시점에 100포인트가 즉시 지급됩니다.</strong> 서로 다른 친구 한 명당 1회, 최대 100명(만 원)까지 가능! 불러온 연락처로 포인트선물 해 보세요</p>
                                                <p className="sub_desc">7.1~7.31까지 보낸 선물 기준/보낸 사람에게 포인트 지급</p>
                                                <strong className="point_stress">7.4이후부터 연락처 불러오기에 동의한 분들에게만 혜택이 지급됩니다.</strong>
                                            </li>
                                        </ol>
                                        <a href="<?php echo $arrVar['payUrl'];?>/mobile/point/pointgift/front/form" target="_blank" className="gift_area"><span className="blind">내 휴대폰 연락처 친구 불러오고 <em>포인트선물하기</em></span></a>
                                        <span className="blind">※포인트선물&gt;받는 사람 선택시 연락처 불러오기 가능</span>
                                    </div>
                                </div>

                                <div className="section02">
                                    <div className="inner">
                                        <h4><em className="tip">TIP.</em> 내가 보낸 선물,<br /><em>상대가 어떻게 받을까?</em></h4>
                                        <p className="evt_txt">
                                            내 목록에 있는 친구 이름 옆에 <em>네이버ID가 함께</em><br /><em>표시되어 있다면 네이버 앱 알림(톡톡)으로,</em><br /><em>휴대폰 번호만 있다면 문자로 선물이 발송</em>됩니다.
                                        </p>
                                        <span className="sub_txt"><span className="ex_ico">예</span>1, 2번 친구는 네이버 앱 알림(톡톡)으로,<br /> 3번 친구는 문자로 선물 발송</span>
                                        <ul className="guide_txt">
                                            <li>상대가 3일안에 수락하지 않으면 자동 취소됩니다.</li>
                                            <li>받은 선물은 <a href="https://m.pay.naver.com/mygift/mobile/r" target="_blank">네이버페이>선물함>받은선물</a>에서 확인할<br />수 있습니다.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="info_page">
                                    <div className="inner">
                                        <a href="https://campaign.naver.com/event/pointgift_howto" target="_blank">
                                            포인트선물에 대한 자세한 설명은??<br /><em>안내페이지 확인!</em>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="bonus_evt">
                                <div className="spot">
                                    <div className="inner">
                                        <div className="point_spot">
                                            <h2>포인트선물 행운포인트</h2>
                                            <strong className="title">친구 10명에게 포인트선물한 분 대상,<br />100원~1만원 행운포인트 드려요!</strong>
                                            <p className="sub_txt">(실명인증 기준 1인당 1회 받기 가능)</p>
                                            <a href="#" className="event_link"><span className="blind">open 행운포인트 받기</span></a>
                                            <dl className="event_info">
                                                <dt>이벤트 내용</dt>
                                                <dd>
                                                    <p>서로 다른 친구 10명에게<br />포인트선물한 이력이 있으면<br /><em>행운포인트 상자 열 때 랜덤 포인트 지급</em></p>
                                                    <span>100원 ~ 1만원, 실명인증 기준 1인 1회 받기 가능</span>
                                                </dd>
                                            </dl>

                                            <div className="btn_case">
                                                <a href="#">나의 포인트선물 횟수 확인 ></a>
                                                <span className="n_txt">*<a href="https://m.pay.naver.com/mygift/mobile/s" target="_blank" className="n_link">네이버페이>선물함>보낸선물</a> 에서도 확인 가능</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="noti_wrap">
                                <div className="noti_box">
                                    <input type="checkbox" id="noti2" className="hidden" />
                                    <div className="fold_panel">
                                        <h4 className="panel_heading sp_pay_benefit">
                                            <label for="noti2" className="noti">확인해 주세요!<i className="ico_arr"></i></label>
                                        </h4>
                                        <div className="panel_body">
                                            <ul className="noti_lst">
                                                <li>
                                                    <strong>1) 휴대폰 연락처 불러오면 1만원</strong>
                                                    <ul className="in_list">
                                                        <li>
                                                            6.25~7.31동안 휴대폰 연락처 불러오기에 동의한 분 대상 1,000명을 추첨하여 1만원을 지급합니다. (8.16포인트 지급)
                                                            </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <strong>2) 친구에게 포인트 선물 할 때 마다 100원</strong>
                                                    <ul className="in_list">
                                                        <li>
                                                            7.1~7.31동안 포인트선물을 보내면 100원을 지급합니다. 단, 7.4이후부터 연락처 불러오기에 동의한 분들에게만 혜택이 지급됩니다.<br />(상대가 수락완료하는 시점에 포인트 자동지급 /취소건 제외)
                                                            </li>
                                                        <li>
                                                            연락처 불러오기에 동의한 시점 이후의 포인트선물 건 부터 혜택이 지급되며, 동의하지 않고 포인트선물시 혜택이 지급되지 않습니다.
        									                </li>
                                                        <li>(보내는 사람)실명인증 기준1인당 100회/최대 1만원까지 혜택을 받을 수 있습니다.</li>
                                                        <li>(받는 사람)실명인증 기준 서로 다른 사람에게 보낸 건만 인정합니다. <br />(동일인에게 중복 발송하는 건은 최초 1회만 혜택 지급)</li>
                                                    </ul>
                                                    <div className="subject_guide">
                                                        <strong>[ 7.1~7.3 기존 참여자 대상 안내 ]</strong>
                                                        <ul className="in_list">
                                                            <li>7.1~7.3까지 연락처불러오기에 동의하지 않고 포인트선물을 보내 100원 혜택을 지급받은 분들도, 7.4부터는 연락처불러오기 동의 이후에 보낸 포인트선물 건에만 혜택을 지급합니다.</li>
                                                            <li>7.1~7.3까지 포인트선물한 건수 + 7.4부터 연락처불러오기 동의 후 선물한 건수를 합쳐서 최대 100명까지 혜택이 지급됩니다.</li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li>
                                                    <strong>3) 행운포인트 이벤트</strong>
                                                    <ul className="in_list">
                                                        <li>
                                                            7.1~7.31동안 서로 다른 친구 10명에게 포인트선물한 이력이 있으면 행운포인트 상자를 열 때 랜덤 포인트를 지급합니다. (단, 7.4이후부터는 연락처 불러오기에 동의 후 포인트선물 보낸 횟수를 카운트 합니다)
                                                            </li>
                                                        <li>
                                                            100원~1만원, 실명인증 기준 1인 1회 받기 가능합니다.
                                                            </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <ul className="stress_txt">
                                                        <li>부적절한 방법을 통한 참여는 모두 취소처리 되며, 법적인 처벌을 받을 수 있습니다.</li>
                                                        <li>본 이벤트는 사전 공지 없이 변경/종료될 수 있습니다.</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>);
    }
}

export default Start;