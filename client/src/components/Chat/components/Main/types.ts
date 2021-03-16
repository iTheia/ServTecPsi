import { FC } from "react";

export interface ChatProps {
  leftPanel?: boolean;
  rigthPanel?: FC;
  url?: string;
}
