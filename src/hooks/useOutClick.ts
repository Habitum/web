import React, { useRef, useEffect} from "react";

export const useOutClick = (callback) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() =>{
    function modalOutClick(event : MouseEvent) {
        const target = event.target as HTMLDivElement;
        const element = ref.current;

        if(!element.contains(target)){
            callback();
        }
    }

    window.addEventListener("mousedown", modalOutClick);

    return () => {
        window.removeEventListener("mousedown", modalOutClick);
    }
}, []);

  return ref;
};