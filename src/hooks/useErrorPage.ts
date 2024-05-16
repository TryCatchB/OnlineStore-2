import { useEffect, useState } from "react";

const useErrorPage = () => {
  const [isErrorPage, setIsErrorPage] = useState<boolean>(false);

  useEffect(() => {
    const result = window.location.pathname.match(/\/[^/]+$/);
    setIsErrorPage(result !== null && result[0] === "/error");
  }, []);

  return isErrorPage;
};

export default useErrorPage;
