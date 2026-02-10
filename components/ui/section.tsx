import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  container?: boolean;
  background?: "default" | "muted" | "primary" | "secondary";
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    { className, container = true, background = "default", children, ...props },
    ref,
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          "py-12 md:py-16 lg:py-24",
          {
            "bg-background": background === "default",
            "bg-muted": background === "muted",
            "bg-primary text-primary-foreground": background === "primary",
            "bg-secondary text-secondary-foreground":
              background === "secondary",
          },
          className,
        )}
        {...props}
      >
        {container ? (
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        ) : (
          children
        )}
      </section>
    );
  },
);
Section.displayName = "Section";

export { Section };
