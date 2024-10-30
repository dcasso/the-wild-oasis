import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  const { isLoading, isAuthenticated, isFetching } = useUser();
  console.log("loading:" + isLoading);
  console.log("auth:" + isAuthenticated);
  console.log("fetch:" + isFetching);
  useEffect(
    function () {
      console.log("loading:" + isLoading);
      console.log("auth:" + isAuthenticated);
      console.log("fetch:" + isFetching);
      if (!isAuthenticated && !isLoading && !isFetching) navigate("login");
    },
    [isAuthenticated, isLoading, navigate, isFetching]
  );

  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
