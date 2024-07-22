import Sidebar from "@/Components/global/sidebar";
import SiteCard from "@/Components/global/sitecard";
import { ReactNode } from "react";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: ReactNode;
}) {
  return (
    <section className="flex ">
      <Sidebar />
      <div className="flex-1">
      <SiteCard/>
        {children}
      </div>

    </section>
  );
}
