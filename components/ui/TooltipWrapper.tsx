import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

interface TooltipWrapperProps {
  content: string;
  children: React.ReactNode;
  className?: string; // Optional: to add custom styling if needed
}

const TooltipWrapper: React.FC<TooltipWrapperProps> = ({
  content,
  children,
  className,
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className={className}>{children}</span>
        </TooltipTrigger>
        <TooltipContent>
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TooltipWrapper;
