import type { ReactNode } from "react";
import { Tooltip } from "./Tooltip";

interface Props {
  className: string;
  children: ReactNode
}

export const TooltipWrapper = ({ className, children }: Props) => {
  return (
    <Tooltip.Provider>
      <Tooltip>
        <Tooltip.Trigger asChild>
          {children}
        </Tooltip.Trigger>
        <Tooltip.Content variant="primary">Add to Library</Tooltip.Content>
      </Tooltip>
    </Tooltip.Provider>
  );
};
