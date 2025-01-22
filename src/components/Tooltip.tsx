import { TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

export default function Tooltip({
  children,
  tooltipText = "Tooltip not found",
}: {
  children: React.ReactNode;
  tooltipText?: string;
}) {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent>
          <p>{tooltipText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
