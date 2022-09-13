import { useEffect, useState } from 'react';

const useScrollY = () => {
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
  const [scrollY, setScrollYValue] = useState(window.pageYOffset);

  // useScroll이 호출되었을 때 한 번만 정의되도록
  const handleScroll = e => setScrollYValue(window.pageYOffset);
  // https://velog.io/@taeung/React-Custom-Hooks%EB%A1%9C-Scroll-Event-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
  useEffect(() => {
    window.addEventListener('scroll', _.debounce(handleScroll, 10));
  });

  const setScrollY = (top, behavior = 'smooth') => {
    window.scrollTo({ top, behavior });
  };

  return [scrollY, setScrollY];
};

export default useScrollY;
