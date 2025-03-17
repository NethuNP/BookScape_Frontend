"use client";

import React from "react";
import CategoryBar from "./CategoryBar";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
 

  return (
    <div>
      <CategoryBar/>
      {children}
    </div>
  );
};

export default ClientLayout;