import React, { PureComponent } from 'react';
import Head from 'next/head';
import Header from '@components/common/Header';
import Footer from '@components/common/Footer';
import Share from '@components/common/Share';
import LectureDetail from '@components/main/LectureDetail';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import axios from 'axios'

class Main extends PureComponent {
    //서버 렌더링 혹은 클라이언트 렌더링 시에 호출 됨
    static async getInitialProps({ ctx }) {
        const { data } = await axios.get('http://10.106.146.60:8080/main');
        return { data };
    }

    componentDidMount() {
        const { data } = this.props;
        console.log(data, this.props);

        //script test
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

    //lecture detail 그려주기
    drawLectureDetail = () => {
        return this.props.data.map((item) =>
            <LectureDetail key={item.id} item={item} />
        );
    }

    render() {
        return (
            <div>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width,viewport-fit=cover,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no,target-densitydpi=medium-dpi" />
                    <title>부스트코드</title>
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
                                        {this.drawLectureDetail()}
                                    </ul>
                                    <a href="#" className="btn_unfold_list">더보기 <em>4 / 14</em></a>
                                </section>
                                <section className="recommend_lecture_box">
                                    <h3 className="lecture_tit">AI Techknowledge.......#머신러닝 #딥러닝 #Reinforcement_learning #etc</h3>
                                    <ul className="recommend_lecture_list">
                                        {this.drawLectureDetail()}
                                    </ul>
                                    <a href="#" className="btn_unfold_list">더보기 <em>4 / 12</em></a>
                                </section>

                                <section className="recommend_lecture_box">
                                    <h3 className="lecture_tit">2017 기술세션.......#Back_end #Front_end #Data #Practice #Mobile</h3>
                                    <ul className="recommend_lecture_list">
                                        {this.drawLectureDetail()}
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
            </div>
        );
    }
}

export default Main;