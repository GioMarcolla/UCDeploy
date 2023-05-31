import React, { FC } from "react";
import { ChatRoomView } from "Views";
type Props = {};

const ChatPage: FC<Props> = (props: Props) => {
  return (
    <div>
      <ChatRoomView />
    </div>
  );
};

export default ChatPage;
