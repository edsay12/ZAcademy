import { cn } from "@/lib/utils/cn";
import { ReactNode } from "react";

type PageHeaderGenericProps<T = unknown> = {
  children: ReactNode;
  className?: string;
} & T;

export function DashboardPage({ children, className }: PageHeaderGenericProps) {
  return <section className={cn("text-black", className)}>{children}</section>;
}
export function DashboardPageHeader({ children, className }: PageHeaderGenericProps) {
  return <header className={cn("", className)}>{children}</header>;
}

export function DashboardPageHeaderTitle({
  children,
  className,
}: PageHeaderGenericProps) {
  return <h1 className={cn("border-b text-md uppercase text-gray-500 py-3 px-6", className)}>{children}</h1>;
}

export function DashboardPageHeaderNav({ children, className }: PageHeaderGenericProps) {
  return <nav className={cn("", className)}>{children}</nav>;
}

export function DashboardPageMain({ children, className }: PageHeaderGenericProps) {
    return (
        <main className={cn("py-6 px-10 text-black", className)}>{children}</main>
    )
}

export function DashboardPageFooter({ children, className }: PageHeaderGenericProps) {
    return (
        <footer className={cn("", className)}>{children}</footer>
    )
}

