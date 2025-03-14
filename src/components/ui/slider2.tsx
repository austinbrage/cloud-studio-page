import * as React from "react";

import { Badge } from "./badge";
import * as SliderPrimitive from "@radix-ui/react-slider";

type Props = {
  updateValue: (newValue: number) => void
  badgeFormatter: (a: number) => string
  defaultValue: number
  maxValue: number
  minValue: number
  showBadge: boolean
}

export default function SliderWithStickyLabelDemo({ 
  updateValue,
  badgeFormatter,
  defaultValue,
  maxValue,
  minValue, 
  showBadge
}: Props) {
  const [progress, setProgress] = React.useState([defaultValue]);

  React.useEffect(() => {
    updateValue(progress[0])
  }, [progress])

  return (
    <div className="relative w-full flex flex-col items-center max-w-sm">
      <SliderPrimitive.Root
        defaultValue={progress}
        max={maxValue}
        min={minValue}
        step={1}
        onValueChange={setProgress}
        className="relative flex w-full touch-none select-none items-center"
      >
        <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20">
          <SliderPrimitive.Range className="absolute h-full bg-primary" />
        </SliderPrimitive.Track>

        <SliderPrimitive.Thumb className="group block h-4 w-4 rounded-full cursor-pointer border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
          {/* Sticky label */}
          {/* <Badge className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 -top-4"> */}
          {showBadge && (
            <Badge className="scale-0 group-hover:scale-100 transition-transform absolute left-1/2 -translate-x-1/2 -translate-y-1/2 -top-4">
              {/* {progress[0]}MB */}
              {badgeFormatter(progress[0])}
              {/* {progress[0] >= 1024 ? `${(progress[0] / 1024).toFixed(2)}GB` : `${progress[0]}MB`} */}
            </Badge>
          )}
        </SliderPrimitive.Thumb>
      </SliderPrimitive.Root>
    </div>
  );
}
