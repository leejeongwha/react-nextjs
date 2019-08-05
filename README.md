# edwith-react-web
edwith 리액트 프로젝트
---
## SPEC
- next 8.0.3
- react 16.8.3
---
## FUNC
- mobx  
- storybook
- pm2
---
## DOC
- https://nextjs.org/docs/
- http://pm2.keymetrics.io/docs/usage/application-declaration/
---
## 로컬 환경 설정 (MAC 기준)
- nodejs 설치 (brew install node)
- yarn 설치 (brew install yarn)
- 프로젝트 폴더 이동하여 yarn 명령어 실행 하게 되면 dependency 다운로드
- yarn dev명령어로 서버 시작 (3000번포트)
- yarn storybook (9009포트, 컴포넌트 단위 확인 및 마크업 확인 용도)
---
## 서버 환경 설정
<ol> 
  <li>/home1/irteam/apps 에 node 설치(npm 포함)</li>
  <ul>
    <li>wget https://nodejs.org/dist/v11.10.1/node-v11.10.1-linux-x64.tar.xz</li>
    <li>tar xvf node-v11.10.1-linux-x64.tar.xz</li>
    <li>ln -s node-v11.10.1-linux-x64.tar.xz node</li>
  </ul>

  <li>irteam계정 로그인 후 .bash_profile에 아래와 같이 PATH 설정</li>
  <ul>
    <li>PATH=$PATH:$HOME/.local/bin:$HOME/bin:/home1/irteam/apps/node/bin</li>
  </ul>

  <li>pm2 설치</li>
  <ul>
    <li>npm install pm2 -g</li>
  </ul>

  <li>yarn 설치</li>
  <ul>
    <li>npm install yarn -g</li>
  </ul>

  <li>테스트를 위하여 git clone 하여 프로젝트 파일 가져옴</li>
  <ul>
    <li>/home1/irteam/deploy 폴더에서 git clone</li>
    <li>/home1/irteam/deploy/edwith-react-web 폴더로 이동</li>
    <li>yarn 명령어 수행하여 디펜던시 다운로드</li>
    <li>yarn pm2-next 명령어 수행하여 백그라운드에서 실행</li>
  </ul>

  <li>로그 확인을 위하여 심볼릭 링크 추가 및 rogrotate 설치 및 설정</li>
  <ul>
    <li>/home1/irteam/logs 에서 ln -s /home1/irteam/.pm2/logs pm2</li>
    <li>pm2 install pm2-logrotate</li>
    <li>pm2 set pm2-logroate:dateFormat 'YYYY-MM-DD'</li>
  </ul>
</ol>
