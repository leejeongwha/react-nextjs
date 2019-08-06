import React, { Component } from "react";

class Share extends Component {
    render() {
        return (
            <div className="layer_share_sns">
                <div className="dimmed"></div>
                <div className="ly_tbl">
                    <div className="ly_tbl_td">
                        <div className="share_sns">
                            <h3 className="title">공유하기</h3>
                            <ul className="share_list">
                                <li><a href="#" className="sns_line"><span className="blind">LINE</span></a></li>
                                <li><a href="#" className="sns_band"><span className="blind">BAND</span></a></li>
                                <li><a href="#" className="sns_facebook"><span className="blind">facebook</span></a></li>
                                <li><a href="#" className="sns_kakao"><span className="blind">KAKAOTALK</span></a></li>
                            </ul>
                            <div className="sns_url_copy">
                                <div className="url_copy">
                                    {/* <!--<a href="#" className="url_copy_btn">URL복사</a>--> */}
                                    <a href="#" className="url_copy_lnk">http://www.edwith.org/naver_001</a>
                                </div>
                                <div className="url_desc">URL을 길게 누르시면 복사하실 수 있습니다.</div>
                            </div>
                            <a href="#" className="ly_close"><span className="blind">공유하기 레이어 닫기</span></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Share;