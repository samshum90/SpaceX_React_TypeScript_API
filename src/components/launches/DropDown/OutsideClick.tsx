import React, { useRef, useEffect } from "react";

interface Props {
  setIsOpen: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const OutsideClick: React.FC<Props> = ({ children, setIsOpen }) => {
  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef);

  function useOutsideClick(ref: any) {
    useEffect(() => {
      function useOutsideClick(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsOpen(false);
        }
      }
      document.addEventListener("mousedown", useOutsideClick);
      return () => {
        document.removeEventListener("mousedown", useOutsideClick);
      };
    }, [ref]);
  }

  return <div ref={wrapperRef}>{children}</div>;
};

export default OutsideClick;
