import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Toy Land BD`;
  }, [title]);
};

export default useTitle;
