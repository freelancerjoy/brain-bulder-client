import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `BrainBuilders | ${title}`;
  }, [title]);
};

export default useTitle;
