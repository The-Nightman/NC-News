import { Alert } from "@mui/material";

const ErrorPage = () => {
  return (
    <>
      <Alert severity="error" style={{ margin: "0.5rem" }}>
        Error 404: this page does not exist!
      </Alert>
    </>
  );
};

export default ErrorPage;
