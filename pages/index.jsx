import React, { PureComponent } from 'react';
import Head from 'next/head';
import Header from '@components/main/Header';
import Footer from '@components/main/Footer';
import Share from '@components/main/Share';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

//내부에서만 사용되는 store
class MainKeyVisualList {
    @observable contentType = "";
    @observable courseInfo = {
        title: ""
        , profName: ""
    };
    @observable exposureEndYmdt = "";
    @observable exposureStrtYmdt = null;
    @observable exposureType = "MOBILE";
    @observable id = 7;
    @observable imageUrl = "https://cphinf.pstatic.net/mooc/20190319_211/1552979073181AksIk_JPEG/MC2.jpg";
    @observable isBlank = false;
    @observable isExposure = true;
    @observable linkUrl = "/boostcourse-digitalmarketing";
    @observable orderNum = 0;
    @observable title = "디지털마케팅";
    @observable typeId = 2640
}

@observer
class Main extends PureComponent {
    //서버 렌더링 혹은 클라이언트 렌더링 시에 호출 됨
    static async getInitialProps({ ctx }) {
        return {};
    }

    componentDidMount() {
        //script
        $('.attention_box .btn_unfold_list').click(function () {
            $(this).parents('.attention_box').addClass('unfold');
        });
        $('.btn_lecture_category').click(function () {
            $('.layer_lecture_category').addClass('on');
        });
        $('.layer_lecture_category .ly_close').click(function () {
            $('.layer_lecture_category').css('display', '');
        });
        $('.user_menu .user').click(function () {
            $('.layer_user_menu').addClass('on');
        });
        $('.floating_area .spi_share').click(function () {
            $('.layer_share_sns').addClass('on');
        });
        $('.debate_extend_list .cell_share').click(function () {
            $('.layer_share_sns').addClass('on');
        });
        $('.layer_share_sns .ly_close').click(function () {
            $('.layer_share_sns').removeClass('on');
        });
    }

    mainKeyVisualList = new MainKeyVisualList();

    change = () => {
        this.mainKeyVisualList.contentType = "TEXT";
    }

    render() {
        return (
            <div>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width,viewport-fit=cover,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no,target-densitydpi=medium-dpi" />
                    <title>[MYPAGE] 나의강좌 - 추천콘텐츠 : edwith</title>
                    <link rel="stylesheet" type="text/css" href="/static/css/m.edwith.css" />
                    <script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
                </Head>
                <div id="wrap" className="mobile_web">
                    <Header />
                    <div id="container" className="">
                        {/* <!-- content --> */}
                        <div id="content" className="">
                            <article className="my_lecture_area">
                                <h2 className="blind">추천 강좌 목록</h2>
                                <section className="recommend_lecture_box">
                                    <h3 className="lecture_tit">이번에 추가된 리스트 입니다. #Back_end #Front_end #Data #Practice #Mobile</h3>
                                    <ul className="recommend_lecture_list">
                                        <li>
                                            <div className="lecture_detail">
                                                <div className="thumb">
                                                    <span>
                                                        <img src="http://dev.ui.naver.com/tmp/?224x126_default_y_FFB4B4_50" alt="임시 이미지" />
                                                    </span>
                                                </div>
                                                <div className="lecture_info">
                                                    <strong>디지털 시대의 새로운 역량</strong>
                                                    <div className="partner_source">
                                                        <em>김수한무와거북이와두루미</em><em>경북대학교</em>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="#" className="lnk_lecture"><span className="blind">콘텐츠 바로가기</span></a>
                                        </li>
                                        <li>
                                            <div className="lecture_detail">
                                                <div className="thumb"><span><img src="http://dev.ui.naver.com/tmp/?224x126_car_y_FFB4B4_50" alt="임시 이미지" /></span></div>
                                                <div className="lecture_info">
                                                    <strong>
                                                        디지털 시대의 새로운 역량
							                        </strong>
                                                    <div className="partner_source">
                                                        <em>김수한무와거북이와두루미</em><em>경북대학교</em>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="#" className="lnk_lecture"><span className="blind">콘텐츠 바로가기</span></a>
                                        </li>
                                        <li>
                                            <div className="lecture_detail">
                                                <div className="thumb"><span><img src="http://dev.ui.naver.com/tmp/?224x126_default_y_FFB4B4_50" alt="임시 이미지" /></span></div>
                                                <div className="lecture_info">
                                                    <strong>소프트웨어 교육 전문가 양성 입문 STEP1.</strong>
                                                    <div className="partner_source">
                                                        <em>김수한무와거북이와두루미</em><em>경북대학교</em>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="#" className="lnk_lecture"><span className="blind">콘텐츠 바로가기</span></a>
                                        </li>
                                        <li>
                                            <div className="lecture_detail">
                                                <div className="thumb"><span><img src="http://dev.ui.naver.com/tmp/?224x126_car_y_FFB4B4_50" alt="임시 이미지" /></span></div>
                                                <div className="lecture_info">
                                                    <strong>소프트웨어 교육 전문가 양성 입문 STEP2.-2</strong>
                                                    <div className="partner_source">
                                                        <em>김수한무와거북이와두루미</em><em>경북대학교</em>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="#" className="lnk_lecture"><span className="blind">콘텐츠 바로가기</span></a>
                                        </li>
                                    </ul>
                                    <a href="#" className="btn_unfold_list">더보기 <em>4 / 14</em></a>
                                </section>
                                <section className="recommend_lecture_box">
                                    <h3 className="lecture_tit">AI Techknowledge.......#머신러닝 #딥러닝 #Reinforcement_learning #etc</h3>
                                    <ul className="recommend_lecture_list">
                                        <li>
                                            <div className="lecture_detail">
                                                <div className="thumb"><span><img src="http://dev.ui.naver.com/tmp/?224x126_default_y_FFB4B4_50" alt="임시 이미지" /></span></div>
                                                <div className="lecture_info">
                                                    <strong>디지털 시대의 새로운 역량</strong>
                                                    <div className="partner_source">
                                                        <em>김수한무와거북이와두루미</em><em>경북대학교</em>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="#" className="lnk_lecture"><span className="blind">콘텐츠 바로가기</span></a>
                                        </li>
                                        <li>
                                            <div className="lecture_detail">
                                                <div className="thumb"><span><img src="http://dev.ui.naver.com/tmp/?224x126_car_y_FFB4B4_50" alt="임시 이미지" /></span></div>
                                                <div className="lecture_info">
                                                    <strong>하루만에 배우는 래피드 프로토타이핑 : Flinto</strong>
                                                    <p className="date">2017.04.05 - 2017.10.05</p>
                                                    <div className="partner_source">
                                                        <em>김수한무와거북이와두루미</em><em>경북대학교</em>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="#" className="lnk_lecture"><span className="blind">콘텐츠 바로가기</span></a>
                                        </li>
                                        <li>
                                            <div className="lecture_detail">
                                                <div className="thumb"><span><img src="http://dev.ui.naver.com/tmp/?224x126_default_y_FFB4B4_50" alt="임시 이미지" /></span></div>
                                                <div className="lecture_info">
                                                    <strong>소프트웨어 교육 전문가 양성 입문 STEP1.</strong>
                                                    <div className="partner_source">
                                                        <em>김수한무와거북이와두루미</em><em>경북대학교</em>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="#" className="lnk_lecture"><span className="blind">콘텐츠 바로가기</span></a>
                                        </li>
                                        <li>
                                            <div className="lecture_detail">
                                                <div className="thumb"><span><img src="http://dev.ui.naver.com/tmp/?224x126_car_y_FFB4B4_50" alt="임시 이미지" /></span></div>
                                                <div className="lecture_info">
                                                    <strong>소프트웨어 교육 전문가 양성 입문 STEP2.-2</strong>
                                                    <div className="partner_source">
                                                        <em>김수한무와거북이와두루미</em><em>경북대학교</em>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="#" className="lnk_lecture"><span className="blind">콘텐츠 바로가기</span></a>
                                        </li>
                                    </ul>
                                    <a href="#" className="btn_unfold_list">더보기 <em>4 / 12</em></a>
                                </section>

                                <section className="recommend_lecture_box">
                                    <h3 className="lecture_tit">2017 기술세션.......#Back_end #Front_end #Data #Practice #Mobile</h3>
                                    <ul className="recommend_lecture_list">
                                        <li>
                                            <div className="lecture_detail">
                                                <div className="thumb"><span><img src="http://dev.ui.naver.com/tmp/?224x126_default_y_FFB4B4_50" alt="임시 이미지" /></span></div>
                                                <div className="lecture_info">
                                                    <strong>디지털 시대의 새로운 역량</strong>
                                                    <div className="partner_source">
                                                        <em>김수한무와거북이와두루미</em><em>경북대학교</em>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="#" className="lnk_lecture"><span className="blind">콘텐츠 바로가기</span></a>
                                        </li>
                                        <li>
                                            <div className="lecture_detail">
                                                <div className="thumb"><span><img src="http://dev.ui.naver.com/tmp/?224x126_car_y_FFB4B4_50" alt="임시 이미지" /></span></div>
                                                <div className="lecture_info">
                                                    <strong>하루만에 배우는 래피드 프로토타이핑 : Flinto</strong>
                                                    <p className="date">2017.04.05 - 2017.10.05</p>
                                                    <div className="partner_source">
                                                        <em>김수한무와거북이와두루미</em><em>경북대학교</em>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="#" className="lnk_lecture"><span className="blind">콘텐츠 바로가기</span></a>
                                        </li>
                                        <li>
                                            <div className="lecture_detail">
                                                <div className="thumb"><span><img src="http://dev.ui.naver.com/tmp/?224x126_default_y_FFB4B4_50" alt="임시 이미지" /></span></div>
                                                <div className="lecture_info">
                                                    <strong>소프트웨어 교육 전문가 양성 입문 STEP1.</strong>
                                                    <div className="partner_source">
                                                        <em>김수한무와거북이와두루미</em><em>경북대학교</em>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="#" className="lnk_lecture"><span className="blind">콘텐츠 바로가기</span></a>
                                        </li>
                                        <li>
                                            <div className="lecture_detail">
                                                <div className="thumb"><span><img src="http://dev.ui.naver.com/tmp/?224x126_car_y_FFB4B4_50" alt="임시 이미지" /></span></div>
                                                <div className="lecture_info">
                                                    <strong>소프트웨어 교육 전문가 양성 입문 STEP2.-2</strong>
                                                    <div className="partner_source">
                                                        <em>김수한무와거북이와두루미</em><em>경북대학교</em>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="#" className="lnk_lecture"><span className="blind">콘텐츠 바로가기</span></a>
                                        </li>
                                    </ul>
                                    <a href="#" className="btn_unfold_list">더보기 <em>4 / 14</em></a>
                                </section>


                            </article>
                        </div>
                        {/* <!-- //content --> */}
                    </div>
                    <Footer />
                    <Share />

                </div>
            </div>);
    }
}

export default Main;