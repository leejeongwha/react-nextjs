import React, { Component } from "react";

class LectureDetail extends Component {
    render() {
        return (
            <li key={this.props.id}>
                <div className="lecture_detail">
                    <div className="thumb"><span><img src={this.props.item.imageUrl} alt="임시 이미지" /></span></div>
                    <div className="lecture_info">
                        <strong>{this.props.item.title}</strong>
                        <div className="partner_source">
                            <em>김수한무와거북이와두루미</em><em>경북대학교</em>
                        </div>
                    </div>
                </div>
                <a href={this.props.item.linkUrl} className="lnk_lecture"><span className="blind">콘텐츠 바로가기</span></a>
            </li>
        )
    }
}

export default LectureDetail;