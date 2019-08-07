import React, { Component } from "react";

class LectureDetail extends Component {
    render() {
        return (
            <li key={this.props.id} hidden={this.props.hidden}>
                <div className="lecture_detail">
                    <div className="thumb"><span><img src={this.props.item.contImageUrl} alt="임시 이미지" /></span></div>
                    <div className="lecture_info">
                        <strong>{this.props.item.title}</strong>
                        <div className="partner_source">
                            <em>{this.props.item.contProfName}</em><em>{this.props.item.contPartnerName}</em>
                        </div>
                    </div>
                </div>
                <a href={this.props.item.contLinkUrl} className="lnk_lecture"><span className="blind">콘텐츠 바로가기</span></a>
            </li>
        )
    }
}

export default LectureDetail;