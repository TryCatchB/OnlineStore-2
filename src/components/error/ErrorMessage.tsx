import { FC } from "react";
import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

interface ErrorProps {
  error: FetchBaseQueryError | SerializedError | undefined;
}

const ErrorMessage: FC<ErrorProps> = ({ error }) => {
  const errorMessage = error
    ? "status" in error
      ? `Error: ${error.status} - ${error.data}`
      : "Error: An unknown error occurred."
    : "";

  return <p>{errorMessage}</p>;
};

export default ErrorMessage;
