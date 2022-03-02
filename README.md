# NextJS Introduction

## NextJS 설치

npx create-next-app .

npx create-next-app@latest --typescript
(latest는 가장 최신 버전, typescript도 사용 가능하다.)

# 강의 내용 정리

### 프레임워크

- 파일 이름이나 구조 등을 정해진 규칙에 따라 만듦.

### 라이브러리

- 사용자가 파일 이름이나 구조 등을 정하고, 대부분의 결정을 사용자가 내림.

##

- pages 폴더 안에 있는 파일명에 따라 route가 결정된다.

  > 에외적으로 index.js의 경우에는 / 만 사용해야 한다.

- 404 Not Found 페이지까지 커스텀이 가능하다.

- react 메소드를 사용하고 싶다면 import를 해야 한다.

- \_app.js 는 모든 페이지에 한번에 설정을 할 때 사용한다.

  > \_app.js는 두 개의 props를 불러오는데, 하나는 Component이고 다른 하나는 pageProps이다.
  > 예를 들어 about 페이지를 렌더링하려 할 때 Component 프롭으로서 \_app.js파일 내의 App 함수에 전달한다. 다시 NextJS는 이 컴포넌트를 가져다가 Component props에 넣어주고 App 함수는 이 페이지를 렌더링한다.

- 페이지나 컴포넌트 내에 css를 import하고 싶다면 반드시 module이어야 한다. 하지만 커스텀 App 컴포넌트가 있다면 거기에 모든 Global styles를 import할 수 있다.

### CSR (Client-Side Render)

- 브라우저가 유저가 보는 UI를 전부 만듦.(create-react-app의 방식)

  > 브라우저가 html을 가져올 때 비어있는 html로 가져온다.
  > 이후에 브라우저가 모든 자바스크립트를 요청해서 브라우저가
  > 자바스크립트와 react를 실행시킨 후 앱이 유저에게 보이게 된다.
  > (요청이 느리다면 처음에 흰 화면만 나오게 된다.)

- NextJS는 웹에 실제 HTML이 존재하기 때문에, 유저의 연결이 느리거나
  자바스크립트가 완전히 비활성화 되어 있어도 적어도 유저는 HTML을 볼 수 있다.

#### pre-rendering

- 앱의 초기 상태를 활용해서 미리 렌더링이 되어있는 것.

#### hydration

- Hydrate는 Server Side 단에서 렌더링 된 정적 페이지와 번들링된 JS파일을 클라이언트에게 보낸 뒤, 클라이언트 단에서 HTML 코드와 React인 JS코드를 서로 매칭 시키는 과정을 말한다.

- react를 프론트엔드 안에서 실행하는 것.

  > next는 react를 백엔드에서 동작시켜서 페이지를 미리 만드는데 이게 컴포넌트를 렌더시킴. 렌더링이 끝났을 때 html이 되고 next는 이 html 페이지를 소스코드에 넣어줌. 이렇게 되면 유저는 자바스크립트와 react가 로딩되지 않더라도 컨텐츠를 볼 수 있게 되고 react가 로딩 되었을 때 기본적으록 이미 존재하는 것들과 연결되어 일반적인 react 앱이 완성된다.

* 참고자료: <https://helloinyong.tistory.com/315>

### NextJS에서 styles를 추가하는 방법들

#### CSS module

- 클래스 이름을 작성할 때 텍스트로 적지 않는다. (js 오브젝트에서의 프로퍼티 형식으로 적음 {})

  > 실제로 코드를 확인하면 충돌을 막기 위해 매번 클래스 이름이 다르게 되어있다. (다른 컴포넌트에서도 같은 클래스 이름을 사용 가능하다.)

#### styled jsx

- 해당 페이지나 컴포넌트 아래에 문법에 맞게 적으면 된다.(global은 전역 설정이다.)

```javascript
<style jsx global>{`
  .active {
    color: tomato;
  }
  a {
    text-decoration: none;
  }
`}</style>
```
