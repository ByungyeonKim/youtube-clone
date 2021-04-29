# 리액트로 만든 BYTube 🧑🏻‍💻

<img width="1500" alt="스크린샷 2021-04-28 오후 4 09 57" src="https://user-images.githubusercontent.com/66554164/116368652-886c3480-a843-11eb-8caf-d324241de8dc.png">

👉 [BYtube](https://bytube.netlify.app)

### 사용한 기술들 🛠

<p>
    <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=black"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=black"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/HTML-E34F26?style=flat&logo=HTML5&logoColor=white"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/CSS-1572B6?style=flat&logo=CSS3&logoColor=white"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=Node.js&logoColor=white"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/Yarn-2C8EBB?style=flat&logo=Yarn&logoColor=white"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/PostCSS-DD3A0A?style=flat&logo=PostCSS&logoColor=white"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/Postman-FF6C37?style=flat&logo=Postman&logoColor=white"/>
 </p>

[![Netlify Status](https://api.netlify.com/api/v1/badges/aea01573-e082-44b4-8617-12e71bf71494/deploy-status)](https://app.netlify.com/sites/bytube/deploys)

### BYTube 프로젝트는 💭

- 함수형 컴포넌트 사용
  - Hooks를 통해 렌더링 최적화, 동적인 페이지 구현
- 유튜브의 search, videos, channels API 사용
  - Postman을 통해 API 통신 테스트 및 fetch 코드 활용
- API를 불러오는 통신(service)과 View 컴포넌트 분리
- API Key를 숨기기 위해 .env 파일 사용
- PostCSS로 CSS 스타일링 모듈화
- 링크 공유 시 지인을 안심 시키기 위한 썸네일 추가

---

### 프로젝트를 진행하면서 배운 것들 💡

#### 1. View 컴포넌트는 멍청해야한다?

- 컴포넌트 안에서 네트워크 통신을 하는 로직이 있으면 좋지 않다. Why?

  - 다양한 디자인 패턴 중 리액트는 View를 중점적으로 다루는 라이브러리이기 때문에 컴포넌트 안에는 view에 대한 책임만 갖도록, view에 관련된 로직만 넣는 것이 좋다.
  - 유닛 테스트를 할 때마다 네트워크 통신을 하게 되면 속도면에서나 효율성면에서 좋지 않다.
  - 이렇게 네트워크 통신하는 것을 따로 만들어서(클래스 혹은 함수로) 컴포넌트 안에 주입해주는 것을 dependency injection(의존성 주입)이라 한다.

  > 의존성 주입이란? 하나의 객체가 다른 객체의 의존성을 제공하는 테크닉이다. 여기서 의존성은 서비스(통신)를 뜻하고 주입은 이 서비스(통신)를 사용하려는 객체로 전달하는 것을 의미한다. 의존성 주입의 의도는 객체의 생성과 사용의 관심을 분리하는 것이다. 이는 가독성과 코드 재사용을 높혀준다. - 위키백과

#### 2. Hooks로 생명주기 관리

- React 16.8 버전부터 Hooks가 등장하면서 주로 정적인 페이지에서만 사용하던 함수형 컴포넌트도 동적인 페이지에서 사용할 수 있게 되었다.

  - 다시 말해 함수형 컴포넌트에도 생명주기와 상태(데이터를 담을 수 있는 박스) 관리를 할 수 있게 되었다.

- 굳이 Hooks까지 도입하면서 함수형 컴포넌트를 사용하는 이유?
  - 개인적으로 코드의 가독성도 좋고 `this.`의 사용을 하지 않는 점(코드 중복❌)이 좋은 것 같다. 그리고 class 문법은 상대적으로 어려운 것 같다.(익숙하지 않음)
  - 리액트에서도 함수형 컴포넌트를 권장하는 듯하다. [Hook의 개요](https://ko.reactjs.org/docs/hooks-intro.html)
  - 하지만 클래스형 컴포넌트도 현존하며 많은 프로젝트에 쓰였기 때문에 알아야한다.
- `use`로 시작하는 함수들을 통해 불러올 수 있다. ex) `useState()`, `useRef()`, `useCallback()`, `React.memo()` 등
  - `useState()` : 데이터를 기억하고 사용자 인터랙션에 따라 바뀐 부분을 표시할 때 사용한다.
  - `useRef()` : 자바스크립트의 `querySelector`처럼 특정 DOM에 접근해야 할 때 사용한다.
    - 검색기능을 구현할 때 input의 값을 불러오기 위해 사용하였다.
    - 이 외에도 특정 엘리먼트의 크기, 포커스 설정, 그래프 관련 라이브러리 사용(외부 라이브러리 사용) 등에도 특정 DOM에 적용하기 때문에 `ref`를 사용한다.
  - `useCallback()` : 특정 함수를 새로 만들지 않고 재사용하고 싶을 때 사용한다. `useCallback()` 함수같은 경우 한 번 만들면 메모리에 계속 보관하기 때문에 많이 사용할 경우 메모리에 영향이 갈 수 있다. 따라서 써야할 때만 사용한다.
    - 해당 프로젝트에선 함수형 컴포넌트의 특성상 state나 props가 바뀔 때 해당 컴포넌트에서 정의한 함수도 다시 새롭게 만들어진다. 따라서 자식 컴포넌트에 이 함수를 props로 전달 할 경우 새로운 props이 전달되는 거와 동일하기 때문에 무조건적으로 리렌더가 발생하는 것을 막기 위해 사용했다.
  - `React.memo()` : `useCallback()`가 특정 함수를 재사용하기 위해 사용한다면 `React.memo()`는 특정 결과값을 재사용하기 위해 사용한다. 해당 프로젝트에선 컴포넌트가 동일한 props를 렌더링할 경우 리렌더링 하지 않고 마지막 렌더링 결과값을 재사용하기 위해 사용했다. -> 성능 최적화

#### 3. .env 파일로 API key 숨기기

- API Key를 코드상에 그대로 노출하고 깃허브에 올리는 것은 보안상 좋지 않다. 개인이 쓰는 Key인 만큼 본인만 사용하도록 한다.
- .env로 따로 관리하고 해당 파일을 .gitignore에 추가한다.
- 참고 : [Environment Variables In .env](https://create-react-app.dev/docs/adding-custom-environment-variables)

#### 4. CSS도 모듈화가 가능하다

- PostCSS를 사용해서 스타일링도 모듈별로 관리했다. 처음엔 import 하는 것도 번거롭고 className마다 styles를 붙이는게 귀찮았는데 컴포넌트가 늘어남에따라 편리해졌다. 해당 컴포넌트의 스타일에만 집중하고 className을 짓는 것에 대한 고민도 줄어들어서 프로젝트에 살을 붙이면서 고민거리 몇몇을 덜어줘서 좋았다.

<img width="400" height="600" alt="스크린샷 2021-04-29 오후 6 42 16" src="https://user-images.githubusercontent.com/66554164/116531966-b07a9700-a91a-11eb-84b1-20ab6687407c.png">

#### 5. Netlify로 배포하기

- 처음 사용해 보았는데 UI도 깔끔하고 무엇보다 무료로 배포할 수 있어서 좋았다. 깃허브 페이지보다 훨씬 사용범위가 넓었고 yarn을 통해 쉽게 배포할 수 있다. 처음 1시간 정도 투자한 것에 비해 리턴이 굉장히 좋다.(심지어 HTTPS로 배포를 해준다.) 새로 만들 포트폴리오용 사이트도 netlify를 통해 배포할 예정이다.

#### 6. Promise.all 사용하기

- 유튜브 API 중 channels API는 채널의 썸네일을 불러오기 위해 사용하였는데 불러오기 위해선 parameter로 videos API의 channelId를 입력했어야 했다. 다시 말해 videos API를 다 불러온 후 channelId를 가져와 channels API를 불러와야 했다. 또한 channels API를 전부 불러오기 전에 렌더링이 먼저 되어 이미지를 제대로 불러오지 못했다. 이에 대한 해결책이 `Promise.all` 메서드였다.

> Promise.all() 메서드는 순회 가능한 객체에 주어진 모든 프로미스가 이행한 후, 혹은 프로미스가 주어지지 않았을 때 이행하는 Promise를 반환합니다 - MDN

```js
// youtube.js
 channel(videos, promises) {
    for (let i = 0; i < videos.length; i++) {
      const response = this.youtube
        .get('channels', {
          params: {
            part: 'snippet',
            maxResults: '36',
            id: videos[i].snippet.channelId,
          },
        })
        .then((result) => result.data.items[0].snippet.thumbnails.default.url)
        .then((url) => (videos[i].channelThumbnails = url));
      promises.push(response);
    }
    return promises;
  }
}
```

```js
// app.jsx
useEffect(() => {
  youtube
    .mostPopular() //
    .then((videos) => {
      const promises = [];
      Promise.all(youtube.channel(videos, promises)).then(() => setVideos(videos));
    });
}, [youtube]);
```

- 이걸 해결하는데 이틀 내내 밤새 고통을 맛봤다..정말 별의별 방법을 사용했었던 것 같다. 결국 해당 문제를 해결한 깃허브를 찾아서 코드를 참고하고 내 코드에 적용했다. [AhyeongLee](https://github.com/AhyeongLee/youtube-clone)님께 이 자리를 빌어 정말 감사드립니다 👏

#### 7. 링크 공유할 때 썸네일 보여주기

- 나는 프로젝트를 완성하면 지인에게 공유하곤 하는데 링크만 달랑 보내기엔 뭔가 볼품없기도 하고 사기(?)같아 보여서 링크를 보낼 때 썸네일이 보이도록 했다.

```HTML
<meta property="og:type" content="website" />
<meta property="og:title" content="BYTube" />
<meta property="og:url" content="https://bytube.netlify.app/" />
<meta property="og:image" content="/thumbnail.png" />
<meta
    property="og:description"
    content="*PC 화면에 최적화* 리액트로 만든 유튜브 클론 프로젝트입니다."
/>
```

<img width="500" alt="스크린샷 2021-04-29 오후 6 35 20" src="https://user-images.githubusercontent.com/66554164/116531091-c50a5f80-a919-11eb-9a7e-af5240d7ddb0.png">

- 썸네일을 추가해서 그런지 지인들의 칭찬이 끊이질 않았다(???)

#### 8. Axios로 코드 간결화, 크로스브라우징 두 마리 토끼 잡기

- axios는 `XMLHttpRequests` 요청을 하기 때문에 `fetch`보다 더 예전의 브라우저까지 지원이 가능하다.
- 현재(21.4.29) axios 러닝 가이드와 axios 깃허브의 브라우저 호환성이 약간 차이가 있는듯 하다.

| axios 러닝 가이드                                                                                                                                                             | axios 깃허브                                                                                                                                                                  |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="575" alt="스크린샷 2021-04-29 오후 10 45 22" src="https://user-images.githubusercontent.com/66554164/116560768-a9648080-a93c-11eb-8f4a-2b436051a92b.png"> | <img width="576" alt="스크린샷 2021-04-29 오후 10 42 38" src="https://user-images.githubusercontent.com/66554164/116560754-a7022680-a93c-11eb-9550-e7abc410b532.png"> |

- `Promise`를 지원하며 `fetch`와 달리 JSON 데이터로 자동 변환을 시켜준다.
- Postman처럼 params로 파트를 나눠서 좀 더 가독성 있게 코드를 쓸 수 있다.

| Axios                                                                                                                                                                          | Fetch                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <img width="1500" alt="스크린샷 2021-04-29 오후 10 58 13" src="https://user-images.githubusercontent.com/66554164/116562863-7f13c280-a93e-11eb-87e6-4c26f1297523.png"> | <img width="1500" alt="스크린샷 2021-04-29 오후 10 57 55" src="https://user-images.githubusercontent.com/66554164/116562849-7d49ff00-a93e-11eb-95db-aeb906b3bbb0.png"> |
