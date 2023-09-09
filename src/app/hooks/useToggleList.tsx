import { useCallback } from 'react';

const useToggleList = () => {
  const toggleEffect = useCallback((index: number, element: string, className: string) => {
    const elementArray = document.querySelectorAll(element);

    if (elementArray.length) {
      elementArray.forEach((e) => e.classList.remove(className));
      elementArray[index].classList.add(className);

      elementArray.forEach((e) => {
        if (e.className.includes('underline-effect')) {
          e.children[0].classList.add('active');
        } else e.children[0].classList.remove('active');
      });
    }
  }, []);

  return {
    toggleEffect,
  };
};

export default useToggleList;
