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
      <main>
        <Outlet />
      </main>
      {footer}
    </>
  );
}
