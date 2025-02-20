import * as React from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export interface KbmInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  shortcut?: string;
  shortcutClass?: string;
}

const KbmInput = React.forwardRef<HTMLInputElement, KbmInputProps>(
  ({ className, shortcut = "⌘K", shortcutClass, ...props }, ref) => {
    return (
      <div className="relative">
        <Input
          ref={ref}
          className={cn("pe-11", className)}
          {...props}
        />
        <div className="text-muted-foreground pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-2">
          <kbd className={cn(
            "text-muted-foreground/70 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium",
            shortcutClass
          )}>
            {shortcut}
          </kbd>
        </div>
      </div>
    );
  }
);

KbmInput.displayName = "KbmInput";

export { KbmInput };
