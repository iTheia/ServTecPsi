import React, { Fragment } from "react";
import { dummyArray } from "../../../../util";
import { Message } from "./Message";

export const ChatMessages: React.FC = () => {
  return (
    <Fragment>
      {dummyArray(15).map((item, index) => (
        <Message
          message={{
            content: `${index}Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum velit, rem dolorem nobis temporibus unde porro nisi nemo repellat officiis.`,
            date: "17/12",
            isMine: index % 2 === 0,
          }}
        />
      ))}
    </Fragment>
  );
};
