import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Friend_details from "./pages/friend_details/Friend_details";
import Timeline from "./pages/timeline/Timeline";
import Status from "./pages/status/Status";
import ErrorPage from "./pages/errorPage/ErrorPage";

const dataPromise = fetch("friends.json").then((res) => res.json());

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: (
          <Suspense
            fallback={
              <span className="loading loading-infinity loading-xl"></span>
            }
          >
            <Dashboard dataPromise={dataPromise}></Dashboard>
          </Suspense>
        ),
      },
      {
        path: "/friend-details",
        Component: Friend_details,
      },
      {
        path: "/timeline",
        Component: Timeline,
      },
      {
        path: "/status",
        Component: Status,
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
