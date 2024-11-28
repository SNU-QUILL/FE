import { ReactNode } from "react";
import { Outlet } from "react-router-dom";

interface IMobileLayoutProps {
  header: ReactNode;
  footer: ReactNode;
}

const MobileLayout = ({ header, footer }: IMobileLayoutProps) => {
  return (
    <>
      {header}
      <div className='p-4'>
        <Outlet />
      </div>
      {footer}
    </>
  );
};
export default MobileLayout;
