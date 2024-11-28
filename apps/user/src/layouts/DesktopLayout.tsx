import { ReactNode } from "react";
import { Outlet } from "react-router-dom";

interface IDesktopLayoutProps {
  header: ReactNode;
  footer: ReactNode;
}

export default function DesktopLayout({ header, footer }: IDesktopLayoutProps) {
  return (
    <>
      {header}
      <main className='w-[1140px] m-auto'>
        <Outlet />
      </main>
      {footer}
    </>
  );
}
