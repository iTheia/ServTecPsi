import { FC } from "react";

export interface ChatProps {
  leftPanel?: FC | false;
  rigthPanel?: FC;
  url?: string;
}
