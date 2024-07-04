import Sidebar from "@/Components/sidebar";
import { ReactNode } from "react";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: ReactNode;
}) {
  return (
    <section>
      <Sidebar />
      {children}
    </section>
  );
}
