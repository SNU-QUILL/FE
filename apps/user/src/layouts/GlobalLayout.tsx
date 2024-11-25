import { ReactNode } from "react";
import { Outlet } from "react-router-dom";

interface IGlobalLayoutProps {
  header: ReactNode;
  footer: ReactNode;
}

export default function GlobalLayout({ header, footer }: IGlobalLayoutProps) {
  return (
    <>
      {header}
      <main className='w-[1140px] m-auto overflow-hidden'>
        <Outlet />
      </main>
      {footer}
    </>
  );
}
