import React, {Component} from "react";

class TabLang extends Component {
    render() {
        return (
            <div className={this.props.clazz}>
                <ul>
                    <li><a href="#">한국어</a></li>
                    <li><a href="#">English</a></li>
                    <li><a href="#">中國語</a></li>
                    <li><a href="#">日本語</a></li>
                </ul>
            </div>
        )
    }
}

export default TabLang;