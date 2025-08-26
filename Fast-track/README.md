목표: 순수 HTML/CSS/바닐라 JS만으로 픽셀퍼펙트 기사 상세 페이지 1개를 완성하고, 접근성·성능·코드 품질 기준을 충족한다

Lighthouse(모바일): Performance 90+, Accessibility 95+, Best Practices 95+, SEO 90+

시멘틱 태그: header/nav/main/article/aside/footer, h1~h3 계층, figure/figcaption

CSS 구조: BEM 네이밍 + CSS 변수(색·간격·폰트), Reset/Normalize 적용

반응형: 360·768·1024 기준 3단계, CLS < 0.1

JS: 이벤트 위임 1곳 이상, localStorage 상태 저장 1개, 에러 처리(try/catch) 1곳

접근성: 스킵링크, 포커스 링, 충분 대비(레벨 AA), aria-label 적절 사용

문서화: README(목표/기술/실행/측정치/트러블슈팅)

-   lazy 로딩이란 이미지 태그가 뷰포트 내에 위치하게 되었을때 load를 하는 것을 의미
    lazy loading 사용할거면 width, height 꼭 지정해주어야 합니다

inline으로 설정해주거나 inline 스타일에서 직접 값을 정의해야함

이거 해주지 않으면 로딩되고 나서 레이아웃 발생

decoding="async" 속성은 브라우저에게 이미지 디코딩을 비동기로 처리하도록 지시하여, 이미지를 화면에 표시하는 동안 다른 콘텐츠 렌더링을 지연시키지 않도록 함

fetchpriority="high"
동일한 내부 우선순위를 가진 다른 이미지에 비해 높은 우선순위로 이미지를 가져오게 함
