## GGUGIT 프로젝트 Front-end/Back-end 소개

- 신개념 밀키트 판매 사이트 [COOKIT](https://www.cjcookit.com/) 클론 프로젝트
- 짧은 프로젝트 기간동안 개발에 집중해야 하므로 페이지를 선택해 구현했습니다.
- 개발은 초기 세팅부터 전부 직접 구현했으며, 아래 데모 영상에서 보이는 부분은 모두 백앤드와 연결하여 실제 사용할 수 있는 서비스 수준으로 개발한 것입니다.

### 개발 인원 및 기간

- 개발기간 : 2021/08/02 ~ 2021/08/13
- 개발 인원 : 프론트엔드 3명, 백엔드 2명
- [백엔드 github 링크](https://github.com/wecode-bootcamp-korea/23-1st-ggugit-backend)

### 프로젝트 선정이유

- 깔끔한 UI / 나쁘지 않은 UX
- 팀 내 실제 이용자의 추천
- 신선식품 배송 시스템이기 때문에 배송시간, 지역 등을 고려해볼 수 있을 것이라 판단

### 데모 영상(이미지 클릭)

https://www.youtube.com/watch?v=ZnIrQX6EUK8&t=1s
<br>

## 적용 기술 및 구현 기능

### 적용 기술

> - Front-End : React.js, sass, react-router-dom
> - Back-End : Python, Django web framework, Bcrypt, My SQL
> - Common : RESTful API

### 구현 기능

#### 공통

- 일반 회원가입 / 로그인

#### 랜딩페이지

- 베스트 상품, 이미지 슬라이더, 추천 상품 이미지 등 RESTful API 활용
- 각각 맛별 필터기능이 있는 상품 추천
- 라이브러리(slick) 없이 커스터마이징이 가능한 이미지 슬라이더 구현
- 배송 countDown Timer 구현
- DB data를 기반으로 판매량에 의한 인기상품 구현

#### 메뉴페이지

- 카테고리 클릭 시 해당 list 그려지도록 조건문 이용한 fetch 함수 사용
- 대분류 카테고리 클릭 시 중분류와 소분류 첫번째 탭의 list가 선택되도록 조건 포함.
- Data boolean 값에 따른 limited/new label 부여되도록 구현
- 메인 페이지와 리스트페이지에서 상품 클릭 시 각각의 상세페이지로 이동( 동적 라우팅 사용)

#### 상세페이지

- 메인페이지 & 상품 메인페이지 상품 클릭시 path parameter통해 연결
- 한정수량/NEW 버튼 data boolean에 따라 노출/비노출
- 가격, 할인가 및 총 가격(배송비 포함), 총 수량 노출
- 총 수량이 30개 미만인 경우, 수량 표기 대신 ‘마감임박!’ 구현
- 이미지 슬라이더를 상단 좌측에서 보여줌
- 상세 페이지에서 받아야 하는 모든 data를 mockdata로 구현
- 반복되는 부분들 상수데이터 처리 및 map 사용

<br>

_아래 Reference 부분은 README.md에 꼭 포함되어야 하는 내용입니다_

## Reference

- 이 프로젝트는 [COOKIT](https://www.cjcookit.com/) 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
