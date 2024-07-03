import { Button } from "@/Components/ui/button";
import { UserButton } from "@clerk/nextjs";
import React from "react";

const Dashboard = () => {
  return (
    <div>
      DashBoard Page
        <UserButton/>
    </div>
  );
};

export default Dashboard;
