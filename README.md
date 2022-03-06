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

- children은 react가 제공하는 prop인데 하나의 컴포넌트를 또 다른 컴포넌트 안에 넣을 때 사용한다.

- API를 사용할 때는 해당 사이트에 설명을 잘 읽어보고 URL 주소와 API KEY를 가져온다.

##

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

#### 1. CSS module

- 클래스 이름을 작성할 때 텍스트로 적지 않는다. (js 오브젝트에서의 프로퍼티 형식으로 적음 {})

  > 실제로 코드를 확인하면 충돌을 막기 위해 매번 클래스 이름이 다르게 되어있다. (다른 컴포넌트에서도 같은 클래스 이름을 사용 가능하다.)

#### 2. styled jsx

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

### API KEY를 숨기는 두 가지 방법

#### 1. redirect & rewrite

- next.config.js 참고

  > source / destination / permanent
  > 경로 뒤에 \*이 붙으면 모두 catch함

  > ex)

  ```
  source: "/old-blog/:path*",
  destination: "/new-blog/:path*,
  permanent: false
  ```

- Redirect을 사용하면 들어오는 request 경로를 다른 destination 경로로 Redirect할 수 있다. Redirect을 사용하려면 next.config.js에서 redirects 키를 사용할 수 있다.

- Rewrites를 사용하면 들어오는 request 경로를 다른 destination 경로에 매핑할 수 있다. Rewrites은 URL 프록시 역할을 하고 destination 경로를 mask하여 사용자가 사이트에서 위치를 변경하지 않은 것처럼 보이게 한다. 반대로 redirects은 새 페이지로 reroute되고 URL 변경 사항을 표시한다.

- redirects은 source, destination 및 permanent 속성이 있는 객체를 포함하는 배열을 반환하는 비동기 함수이다.

  source: 들어오는 request 경로 패턴 (request 경로)
  destination: 라우팅하려는 경로 (redirect할 경로)
  permanent: true인 경우 클라이언트와 search 엔진에 redirect를 영구적으로 cache하도록 지시하는 308 status code를 사용하고, false인 경우 일시적이고 cache되지 않은 307 status code를 사용한다.

#### 2. getServerSideProps

- 이 아래에 어떤 코드를 작성해도 그 코드는 서버에서 돌아가게 된다. (클라이언트 x)

- 페이지에서 getServerSideProps(서버 측 렌더링)라는 함수를 export하는 경우 Next.js는 getServerSideProps에서 반환된 데이터를 사용하여 각 request에서 이 페이지를 pre-render한다. getServerSideProps는 서버 측에서만 실행되며 브라우저에서는 실행되지 않는다.

- getServerSideProps를 사용하여 request시 데이터 fetch하기
  다음 예시는 request 시 데이터를 fetch하고 결과를 pre-render하는 방법이다.

```javascript
function Page({ data }) {
  // Render data...
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://.../data`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default Page;
```

- 언제 getServerSideProps를 사용해야 하나요?

  > request time에 반드시 데이터를 fetch해와야 하는 페이지를 pre-render해야 하는 경우에만 getServerSideProps를 사용해야 합니다.

  > 데이터를 pre-render할 필요가 없다면 client side에서 데이터를 가져오는 것을 고려해야 합니다.

  > 클라이언트 측에서 데이터 가져오기 (Fetching data on the client side)
  > 페이지에 자주 업데이트되는 데이터가 포함되어 있고 데이터를 pre-render할 필요가 없는 경우 클라이언트 측에서 데이터를 가져올 수 있습니다.

  1. 먼저 데이터가 없는 페이지를 즉시 표시합니다.
  2. 페이지의 일부는 Static Generation을 사용해 pre-render할 수 있습니다.
  3. 없는 데이터를 위해 loading 상태를 표시할 수 있습니다.
  4. 그런 다음 클라이언트 측에서 데이터를 가져와 준비가 되면 표시합니다.

  > 이 접근 방식은 예를 들어 사용자 대시보드 페이지에 적합합니다.
  > 왜냐하면 대시보드는 사용자별 비공개 페이지이기 때문에 SEO와는 관련이 없으며 페이지를 미리 렌더링할 필요가 없습니다. 또한 데이터는 자주 업데이트되므로 요청 시 데이터를 가져와야 합니다.

#### Dynamic Routes

- page에 대괄호 [] 를 추가하여 생성할 수 있다.

- 대괄호 안에 세 개의 점 ... 을 추가하여 모든 경로를 포착하도록 확장할 수 있다.

#### router.push

- 클라이언트 측 전환을 처리합니다. 이 방법은 next/link가 충분하지 않은 경우에 유용합니다.

#### [...params].js에서 [] 추가 시 에러가 고쳐지는 이유

- 미리 렌더링이 되기 때문에 html파일이 먼저 내려온다. 이 때 문제가 js가 아직 다운로드가 되지 않았기 때문에 useRouter()로 정보를 제대로 가져오지 못하는 상태가 된다. 그렇기 때문에 초기에는 빈 배열을 추가해서 오류가 발생하지 않도록 해 주고 js가 다시 렌더링하게 되면 그 때는 값을 가져와서 뿌려주는 역할을 하게 된다.

#### 404 Page

- 방문할 때마다 서버 렌더링 오류 페이지가 발생하면 Next.js 서버의 로드가 증가합니다. 이로 인해 비용이 증가하고 경험이 느려질 수 있습니다. 위의 문제를 피하기 위해, Next.js는 추가 파일을 추가할 필요 없이 기본적으로 정적 404 페이지를 제공합니다. 이 파일은 빌드 시 정적으로 생성됩니다.
  빌드 시 데이터를 가져와야 하는 경우 이 페이지 내에서 getStaticProps를 사용할 수 있습니다.
