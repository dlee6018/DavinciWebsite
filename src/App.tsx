import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Container from "@mui/material/Container";
import HomePage from "./pages/home-page";
import Header from "./components/header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

function App() {
  return (
    <>
      <Header />
      <Container>
        <RouterProvider router={router} />
      </Container>
    </>
  );
}

export default App;
