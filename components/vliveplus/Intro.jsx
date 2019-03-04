import React, {Component} from 'react';

class Intro extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="container">
                <div id="content">
                    <div className="section6 vlive_section">
                        <div className="cont">
                            <p className="txt">v live+ 는 팬들의 마음을 담아 진화한 v live+ 의 새로운 콘텐츠입니다</p>
                            <div className="movie_article">
                                <iframe
                                    src='https://serviceapi.rmcnmv.naver.com/flash/outKeyPlayer.nhn?vid=DCD59B8373D481238CC7BEE289A44F0A130A&outKey=V12769963625064f8e48efc00f15df45674a3b62ffcdbef5323f3fc00f15df45674a3&controlBarMovable=true&jsCallable=true&isAutoPlay=false&skinName=tvcast_white'
                                    frameBorder='no' scrolling='no' marginWidth='0' marginHeight='0' width='800'
                                    height='449' allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="section">
                        <div className="cont vlive_section">
                            <p className="txt"><strong>평생소장 다운로드</strong>V LIVE+에서는 평생소장 다운로드 기능으로 스타의 순간을 평생 함께 할 수 있도록
                                도와드립니다. 이젠 원할 때마다 언제든 꺼내서 두 번 세 번 복습하세요!</p>
                        </div>
                    </div>
                    <div className="section2 vlive_section">
                        <div className="cont">
                            <p className="txt"><strong>고화질로 안구정화</strong>영상은 고화질이 제맛이죠 오빠들의 모공까지 확인할 수 있는 고화질로 더 생생하게!
                                저화실 영상에 지쳤다면, 이제 고화질 라이브와 VOD로 안구정화하세요</p>
                        </div>
                    </div>
                    <div className="section3 vlive_section">
                        <div className="cont">
                            <p className="txt"><strong>하드털이 대방출</strong>이제 더 이상 볼 게 없다구요? 꽁꽁 숨겨놓은 미공개 영상과 오빠들의 프이빗한 순간을
                                V LIVE+가 독점 공개합니다</p>
                        </div>
                    </div>
                    <div className="section4 vlive_section">
                        <div className="cont">
                            <p className="txt"><strong>내가 쓰고, 오빠 출연</strong>이제 일방적인 방송은 그만! 팬들의 의견을 더해 스타의 방송이 완성됩니다 소통
                                그 이상의 경험을 느껴 보세요</p>
                        </div>
                    </div>
                    <div className="section5 vlive_section">
                        <div className="cont">
                            <p className="txt"><strong>다양한 시선, 새로운 발견</strong>멤버별 멀티캠부터 외장 카메라까지, 점점 더 다양해지는 V LIVE+의
                                시선을 통해 스타의 새로운 모습을 발견할 수 있습니다</p>
                        </div>
                    </div>
                    <div className="section7">
                        <div className="cont">
                            <div className="blind">
                                <strong>덕후를 이롭게 하는 V LIVE+</strong>
                                당신에게 유익한 V LIVE+ 이렇게 즐기세요 <br/>
                                V LIVE 에서 더 많이 활동할수록 V LIVE+를 즐길 수 있는 특별한 혜택이 풍성해집니다
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="page_navi">
                    <li className="page on"><a href="#"><span className="blind">1 page</span></a></li>
                    <li className="page2"><a href="#"><span className="blind">2 page</span></a></li>
                    <li className="page3"><a href="#"><span className="blind">3 page</span></a></li>
                    <li className="page4"><a href="#"><span className="blind">4 page</span></a></li>
                    <li className="page5"><a href="#"><span className="blind">5 page</span></a></li>
                    <li className="page6"><a href="#"><span className="blind">6 page</span></a></li>
                </ul>
            </div>
        );
    }
}

export default Intro