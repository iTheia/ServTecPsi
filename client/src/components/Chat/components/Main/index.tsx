import React from "react";
import { ChatProps } from "./types";
import { CHAT_STYLES, useStyles } from "./style";
import { ChatSearch } from "../Search";
import { ChatHeader } from "../Header";
import { ChatList } from "../List";
import { ChatMessages } from "../Messages";
import { ChatControls } from "../Controls";
import { ChatForm } from "../Form";
import { HeaderContainer, ScrollContainer } from "../Containers";
import { ChatProviders } from "../../providers";
import { useTheme } from "@material-ui/core";

export const Chat: React.FC<ChatProps> = ({
  rigthPanel,
  leftPanel = true,
  url,
}) => {
  const theme = useTheme();
  const classes = useStyles({ ...theme, leftPanel });

  if (!leftPanel) {
    return (
      <ChatProviders>
        <div className={classes.root}>
          <HeaderContainer>
            <ChatHeader />
          </HeaderContainer>
          <ScrollContainer styles={CHAT_STYLES}>
            <ChatMessages />
          </ScrollContainer>
          <ChatForm />
        </div>
      </ChatProviders>
    );
  }
  return (
    <ChatProviders>
      <div className={classes.root}>
        <HeaderContainer>
          <ChatControls />
        </HeaderContainer>
        <HeaderContainer>
          <ChatHeader />
        </HeaderContainer>
        <ChatSearch />
        <ScrollContainer styles={CHAT_STYLES}>
          <ChatMessages />
        </ScrollContainer>
        <ScrollContainer>
          <ChatList />
        </ScrollContainer>
        <ChatForm />
      </div>
    </ChatProviders>
  );
};
