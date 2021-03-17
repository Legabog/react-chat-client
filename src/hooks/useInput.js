import { useRef, useState } from "react";

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const [isFocus, setIsFocus] = useState(false);

  const ref = useRef();

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  const focusHandler = () => {
    ref.current.focus();
    setIsFocus(true);
  };

  const blurHandler = () => {
    ref.current.blur();
    setIsFocus(false);
  };

  return [
    value,
    ref,
    changeHandler,
    isFocus,
    focusHandler,
    blurHandler,
    setValue,
  ];
};
