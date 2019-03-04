const Index = () => (
    <div>
        <div id="header">
            <div className="lnb">
                <h1><a href="/vliveplus/"><span className="blind">V LIVE+</span></a>
                </h1>
                <ul className="menu_area">
                    <li className="menu"><a href="http://www.vlive.tv/home" target="_blank"><span
                        className="blind">V LIVE</span></a></li>
                    <li className="menu2"><a href="/vliveplus/intro.nhn"><span className="blind">V LIVE+</span></a>
                    </li>
                    <li className="menu4"><a href="/vliveplus/event.nhn"><span
                        className="blind">EVENT</span></a></li>
                </ul>
                <div className="lang_select">
                    <a href="#" className="choice">한국어<span className="arrow"></span></a>
                    <ul className="drop_box">
                        <li><a href="#" data-lang="en">English</a></li>
                        <li><a href="#" data-lang="ja">日本語</a></li>
                        <li><a href="#" data-lang="zh-Hant">中文(繁體)</a></li>
                        <li><a href="#" data-lang="th">ภาษาไทย</a></li>
                        <li><a href="#" data-lang="vi">Tiếng Việt</a></li>
                        <li><a href="#" data-lang="es">Español</a></li>
                        <li><a href="#" data-lang="id">Indonesia</a></li>
                        <li><a href="#" data-lang="zh-Hans">中文(简体)</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
);

export default Index;