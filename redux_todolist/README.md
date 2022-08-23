# Redux로 todo list 만들어보기

## Redux의 state 관리

0. `createStore`로 redux의 state 저장소 생성

1. 사용자에 의해 action이 발생하면 해당 action 객체를 actions 폴더에서 찾아 반환

2. 반환된 action의 **type**에 따라 정의한 reducer대로 state 변경

3. state가 변경되었으므로 해당 state를 rendering하는 컴포넌트의 re-rendering 발생

- state를 그리기만 하는 component는 state만 호출, state를 변경하는 component는 dispatch도 호출

- 각 component에서 state 호출은 `useSelector()` reducer 호출은 `useDispatch()` 사용

## directory 구성

- actions : action 객체들의 집합

- components : rendering이 일어나는 컴포넌트 조각들의 집합

- reducers : reducer들의 집합으로 `combineReducers`에서 하나로 모임.
