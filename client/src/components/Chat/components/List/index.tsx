import React, { Fragment } from "react";
import { dummyArray } from "../../../../util";
import { ListItem } from "./Item";

export const ChatList: React.FC = () => {
  return (
    <Fragment>
      {dummyArray(20).map(() => (
        <ListItem
          item={{
            talker: { name: "Marlon", image: "https://picsum.photos/200/300" },
            lastMessage: { date: "16/15", content: "asdasdsadsad" },
          }}
        />
      ))}
    </Fragment>
  );
};
