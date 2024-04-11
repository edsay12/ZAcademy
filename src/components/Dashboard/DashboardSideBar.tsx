import { cn } from "@/lib/utils/cn";
import Link from "next/link";
import {
  HTMLAttributes,
  HtmlHTMLAttributes,
  LinkHTMLAttributes,
  ReactNode,
} from "react";

type DashboardSidebarGenericProps<T = unknown> = {
  children: ReactNode;
  className?: string;
} & T;

export function DashboardSidebar({ children, className }: DashboardSidebarGenericProps) {
  return (
    <aside
      className={cn(
        "border-r border-b  text-black flex flex-col space-y-6 h-screen",
        className
      )}
    >
      {children}
    </aside>
  );
}

export function DashboardSidebarMain({ children, className }: DashboardSidebarGenericProps) {
  return <main className={cn("px-3", className)}>{children}</main>;
}
export function DashboardSidebarHeader({ children, className }: DashboardSidebarGenericProps) {
  return <header className={cn("px-6 py-3 border-b ", className)}>{children}</header>;
}

export function DashboardSidebarNav({ children, className }: DashboardSidebarGenericProps) {
  return <nav className={cn("", className)}>{children}</nav>;
}

export function DashboardSidebarNavHeader({ children, className }: DashboardSidebarGenericProps) {
  return <header className={cn("", className)}>{children}</header>;
}

export function DashboardSidebarNavHeaderTitle({
  children,
  className,
}: DashboardSidebarGenericProps) {
  return <h3 className={cn("", className)}>{children}</h3>;
}

interface DashboardSidebarNavLink extends LinkHTMLAttributes<HTMLLinkElement> {
  active?: boolean;
}

export function DashboardSidebarNavLink({
  children,
  className,
  href = "",
  active,
}: DashboardSidebarNavLink) {
  return (
    <Link
      href={href}
      className={cn(
        "text-sm font-semibold px-3 py-2 rounded-md flex items-center gap-2" ,
        active && "bg-gray-200",
        className
      )}
    >
      {children}
    </Link>
  );
}

export function DashboardSidebarNavMain({
  children,
  className,
}: DashboardSidebarGenericProps<DashboardSidebarGenericProps>) {
  return <main className={cn("flex flex-col", className)}>{children}</main>;
}

export function DashboardSidebarHeaderTitle({
  children,
  className,
}: DashboardSidebarGenericProps) {
  return (
    <h2 className={cn("text-xs uppercase text-gray-500 ml-3", className)}>
      {children}
    </h2>
  );
}

export function DashboardSidebarFooter({ children, className }: DashboardSidebarGenericProps) {
  return (
    <footer className={cn("p-6 mt-auto border-t  ", className)}>
      {children}
    </footer>
  );
}
