# Route & Styled Components

## Router

`BrowserRouter`, `Routes`, `Route` 태그를 `react-router-dom`으로부터 불러와 사용하며 구조는 아래와 같다.

```JSX
function App() {
  return (
    <BrowserRouter>
      <Routes>
        // Link 태그의 to에 들어갈 값을 path로 지정(default : /)
        <Route path="/" element={<MainPage />}>
        <Route path="path1" element={<Element1 />}>
        <Route path="path2" element={<Element2 />}>
      </Routes>
    </BrowserRouter>
  );
};
```

## Outlet & Link

하위 component에서 `react-router-dom`의 `Link` 태그를 쓰는 경우 `Outlet` 태그를 사용해줘야 해당 컴포넌트로 넘어갈 수 있으며 구조는 아래와 같다.

```JSX
const MainPage = () => {
  return (
    <Layout>
      <Link to={'path1'} />
      <Link to={'path2'}>
        {`${someVal}`}
      </Link>
      <Outlet />
    </Layout>
  );
};
```

## Styled Components

아래처럼 component처럼 style이 입혀진 태그 조각을 만들 수 있다.

```JSX
const Layout = styled.div`
  max-width: 500px;
  background: #997950;
  border-radius: 10px;
  overflow: hidden;
  margin: 10% auto;
  &:hover {
    background: #613613;
  }
`
```
