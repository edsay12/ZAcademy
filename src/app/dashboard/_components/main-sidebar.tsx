"use client";
import {
  DashboardSidebar,
  DashboardSidebarFooter,
  DashboardSidebarHeader,
  DashboardSidebarHeaderTitle,
  DashboardSidebarMain,
  DashboardSidebarNav,
  DashboardSidebarNavHeader,
  DashboardSidebarNavLink,
  DashboardSidebarNavMain,
} from "@/components/Dashboard/DashboardSideBar";
import UserDropdown from "./user-dropdown";
import { usePathname } from "next/navigation";
import { AiOutlineFundProjectionScreen, AiOutlineHome, AiTwotonePlaySquare } from "react-icons/ai";
import Logo2 from "@/components/Logo2";
import { Session } from "next-auth";

type DashboardProps = {
  user: Session["user"] | undefined
};

function MainDashboardSideBar({ user }: DashboardProps) {
  const pathName = usePathname();

  function isActive(path: string) {
    return pathName === path;
  }

  return (
    <DashboardSidebar>
      <DashboardSidebarHeader>
        <Logo2 className="w-6" />
      </DashboardSidebarHeader>
      <DashboardSidebarMain className="flex flex-col flex-grow">
        <DashboardSidebarNav>
          <DashboardSidebarNavMain>
            <DashboardSidebarNavLink
              href="/dashboard"
              active={isActive("/dashboard")}
            >
              <AiOutlineHome />
              Inicio
            </DashboardSidebarNavLink>
            <DashboardSidebarNavLink
              href="/dashboard/courses"
              active={isActive("/dashboard/courses")}
            >
              <AiOutlineFundProjectionScreen />
              Cursos
            </DashboardSidebarNavLink>
            <DashboardSidebarNavLink
              href="/dashboard/newcourse"
              active={isActive("/dashboard/newcourse")}
            >
             <AiTwotonePlaySquare />
              Novo Curso
            </DashboardSidebarNavLink>
          </DashboardSidebarNavMain>
        </DashboardSidebarNav>

        <DashboardSidebarNav className="mt-auto">
          <DashboardSidebarNavHeader>
            <DashboardSidebarHeaderTitle>
              Links Extras
            </DashboardSidebarHeaderTitle>
          </DashboardSidebarNavHeader>
          <DashboardSidebarNavMain>
            <DashboardSidebarNavLink href="/dashboard">
              Precisa de ajuda?
            </DashboardSidebarNavLink>
            <DashboardSidebarNavLink href="/dashboard/courses">
              Inicio
            </DashboardSidebarNavLink>
          </DashboardSidebarNavMain>
        </DashboardSidebarNav>
      </DashboardSidebarMain>

      <DashboardSidebarFooter>
        <UserDropdown user={user} />
      </DashboardSidebarFooter>
    </DashboardSidebar>
  );
}

export default MainDashboardSideBar;
