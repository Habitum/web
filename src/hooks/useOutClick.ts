import { useRef, useEffect} from "react";

export const useOutClick = (callback : {(): void}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() =>{
    function modalOutClick(event : MouseEvent) {
      const target = event.target as HTMLDivElement;
      const element = ref.current as HTMLDivElement;

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
