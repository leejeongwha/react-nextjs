import React, {Component} from "react";
import Style from './Section.scss';

class Section extends Component {
    render() {
        return (
            <div className={Style.section}>
                <div className={Style.inner}>
                    <h3 className={Style.blind}>VLIVE 공개 방송을 직접 보고 싶다면?</h3>
                    <p className={Style.blind}>2019/02/03 23:59 AM KST 기준으로 아래 조건을 충족하는 V 사용자만 방청 응모가 가능합니다!</p>
                    <div className={Style.spot_box}>
                        <p className={Style.blind}>방청하고 싶은 아티스트 V채널의 케미비트 레벨 6 이상</p>
                        <a href="https://help.naver.com/support/contents/contents.help?serviceNo=12240&categoryNo=15289"
                           className="spot_link"><span className={Style.blind}>내 케미비트 레벨을 확인 방법은?</span></a>
                    </div>
                    <span className={Style.blind}>OR</span>
                    <div className={Style.spot_box2}>
                        <p className={Style.blind}>방청하고 싶은 아티스트 V STORE 구매 경험자</p>
                        <a href="https://www.vlive.tv/vstore" className="spot_link_02"><span className={Style.blind}>CH+ / VLIVE+ / LIGHT STICK/STICKER 등 내 구매이력 확인 방법은?</span></a>
                    </div>
                </div>
                <div className={Style.blind}>
                    <strong>방청권 응모 및 추첨 일정</strong>
                    <p>*위 조건을 충족하신 분들에 한하여!</p>
                    <ul>
                        <li>방청 응모 기준 확인</li>
                        <li>공개 방송 방청 응모<em>*응모 마감 2/3 23:59 AM KST +</em></li>
                        <li>2/15 당첨자 발표<em>*문자 이메일 등으로 개별 발송</em></li>
                    </ul>
                </div>
                <div className={Style.blind}>
                    <strong>* 방청 신청 전 꼭,꼭,꼭 읽어 주세요!*</strong>
                    <ul>
                        <li>- 한 공개 방송당 하나의 V넘버로 응모 가능합니다.</li>
                        <li>- 두 조건에 모두 충족하는 경우, 하나의 V넘버로 중복 응모가 가능합니다. (단, 한 공개 방송 내에서 중복 당첨은 불가)</li>
                        <li>- 당첨자에게는 지정석이 랜덤 고지된 방청권(1인 1매)을 연락처로 개별 전달드립니다.</li>
                        <li>- 공개 방송 당일 현장 부스에서 개별 연락처로 전달된 방청권과 신분증 확인을 통해 입장 팔찌를 배부하니, 이벤트 참여 시 입력하신 이름, 연락처를 필히 확인
                            부탁드립니다. *신분증 : 한국 외 국적자의 경우, 여권/한국 국적자의 경우, 주민등록증, 운전면허증, 여권, 청소년증 또는 사진이 부착된 학생증 가능
                        </li>
                        <li>- 공개 방송은 동시 생중계될 예정으로, 진행 중간에 좌석을 이탈하시기 어려운 점 양해 부탁드립니다.</li>
                        <li>- 방청권 외에 항공/숙박 등의 편의 시설은 지원되지 않는 점 양해 부탁드립니다.</li>
                        <li>- 방청권 타인 양도 및 판매는 절대 불가하며, 적발 시 입장이 불가할 수 있는 점 참고 부탁 드립니다.</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Section;