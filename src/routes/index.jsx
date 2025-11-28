import {
  createContactAction,
  destroyContactAction,
  editContactAction,
  favoriteContactAction,
} from "@/actions/contact";
import Index from "@/Index";
import { getContactLoader, getContactsLoader } from "@/loaders/contact";
import { ContactPage, EditContactPage, ErrorPage } from "@/pages";
import Root from "@/Root";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: getContactsLoader,
    action: createContactAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: "contacts/:contactId",
            element: <ContactPage />,
            loader: getContactLoader,
            action: favoriteContactAction,
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
    ],
  },
]);

export default router;
