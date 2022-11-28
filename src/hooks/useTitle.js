import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Car Gurus`;
  }, [title]);
};

export default useTitle;
