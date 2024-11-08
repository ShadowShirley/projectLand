"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const DialogCom = DialogPrimitive.Root

const DialogTriggerCom = DialogPrimitive.Trigger

const DialogPortalCom = DialogPrimitive.Portal

const DialogCloseCom = DialogPrimitive.Close

const DialogOverlayCom = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/40 brightness-75 data-[state=open]:animate-in data-[state=closed]:animate-out " +
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
))
DialogOverlayCom.displayName = DialogPrimitive.Overlay.displayName

const DialogContentCom = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortalCom>
    <DialogOverlayCom />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "relative font-geometria left-[50%] top-[50%] z-50 grid " +
          "w-full 320:max-w-screen-320 768:max-w-lg 1024:max-w-xl 1200:max-w-2xl 1920:max-2-4xl " +
          "translate-x-[-50%] translate-y-[-50%] border bg bg-white 320:px-5 320:py-5 768:px-40px 768:py-44px shadow-lg " +
          "duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out " +
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 " +
          "data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] " +
          "data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-20",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-20 opacity-60
       transition-opacity hover:opacity-100 disabled:pointer-events-none
       data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortalCom>
))
DialogContentCom.displayName = DialogPrimitive.Content.displayName

const DialogHeaderCom = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col text-center text-black-light_black ",
      className
    )}
    {...props}
  />
)
DialogHeaderCom.displayName = "DialogHeader"

const DialogFooterCom = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex justify-center",
      className
    )}
    {...props}
  />
)
DialogFooterCom.displayName = "DialogFooter"

const DialogTitleCom = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      " 320:text-3xl 768:text-4xl pt-36 font-normal text-center leading-none pb-20px tracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitleCom.displayName = DialogPrimitive.Title.displayName

const DialogDescriptionCom = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("768:text-base 320:text-sm font-normal text-center text-muted-foreground", className)}
    {...props}
  />
))
DialogDescriptionCom.displayName = DialogPrimitive.Description.displayName

export {
  DialogCom,
  DialogPortalCom,
  DialogOverlayCom,
  DialogCloseCom,
  DialogTriggerCom,
  DialogContentCom,
  DialogHeaderCom,
  DialogFooterCom,
  DialogTitleCom,
  DialogDescriptionCom,
}
