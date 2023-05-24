import React, { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomePage,
  ChatPage,
  MapPage,
  ProfilePage,
  LogInPage,
  SignUpPage,
  ChatListPage
} from "Pages";

import { ChatRoomView } from "Views";

import { AppLayout } from "Layouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AppLayout>
        <HomePage />
      </AppLayout>
    ),
  },
  {
    path: "/profile",
    element: (
      <AppLayout>
        <ProfilePage />
      </AppLayout>
    ),
  },
  {
    path: "/chats",
    element: (
      <AppLayout>
        <ChatListPage />
      </AppLayout>
    ),
  },
  {
    path: "/room/:ChatRoomID",
    element: <ChatRoomView />,
  },
  {
    path: "/map",
    element: (
      <AppLayout>
        <MapPage />
      </AppLayout>
    ),
  },
  {
    path: "/home",
    element: (
      <AppLayout>
        <HomePage />
      </AppLayout>
    ),
  },
  {
    path: "/login",
    element: (
      <AppLayout>
        <LogInPage />
      </AppLayout>
    ),
  },
  {
    path: "/signup",
    element: (
      <AppLayout>
        <SignUpPage />
      </AppLayout>
    ),
  },
]);

type Props = {};

const PageRouter: FC<Props> = ({}: Props) => {
  return <RouterProvider router={router} />;
};

export default PageRouter;
