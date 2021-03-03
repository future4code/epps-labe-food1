import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { goToLogin, goToFeed } from "../routes/Coordinator";

const useProtectedPage = () => {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      goToLogin(history);
    } 
  }, [history]);
};

export default useProtectedPage;
