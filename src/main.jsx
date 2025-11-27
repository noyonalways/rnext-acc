import {
  createContactAction,
  destroyContactAction,
  editContactAction,
} from "@/actions/contact";
import Index from "@/Index";
import { getContactLoader, getContactsLoader } from "@/loaders/contact";
import { ContactPage, EditContactPage, ErrorPage } from "@/pages";
import Root from "@/Root";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: getContactsLoader,
    action: createContactAction,
    children: [
      { index: true, element: <Index /> },
      {
        path: "contacts/:contactId",
        element: <ContactPage />,
        loader: getContactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContactPage />,
        loader: getContactLoader,
        action: editContactAction,
      },
      {
        path: "contacts/:contactId/destroy",
        action: destroyContactAction,
        errorElement: <div>Oops! There was an error.</div>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
