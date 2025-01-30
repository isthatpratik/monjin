"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b border-border bg-white data-[state=open]:bg-[#F4F9F9]", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "group hover:no-underline flex justify-between items-center font-onest font-normal text-2xl tracking-tight flex-1 py-4 text-left transition-all [&>div>svg>path:last-child]:origin-center [&>div>svg>path:last-child]:transition-all [&>div>svg>path:last-child]:duration-200 [&[data-state=open]>div>svg>path:last-child]:rotate-90 [&[data-state=open]>div:last-child]:bg-[#FF0006]/50 [&[data-state=open]>div>svg]:text-white [&[data-state=open]>div>svg>path:last-child]:opacity-0 duration-300 [&[data-state=open]>div>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <div
        className={cn(
          "flex items-center justify-center w-8 h-8 rounded-[8px] transition-colors duration-200 bg-[#F6FDF1] flex-shrink-0",
        )}
      >
        <Plus
          size={16}
          strokeWidth={2}
          className="shrink-0 text-[#A9D845] transition-transform duration-200"
          aria-hidden="true"
        />
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));

AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
