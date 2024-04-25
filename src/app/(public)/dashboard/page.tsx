import { ContainerLayout, Hero, InnerContainer } from "@/components/atoms";
import React from "react";

const DashboardPage = () => {
  return (
    <React.Fragment>
      <div className="from-[#1c37c1] to-[#089ea2] bg-gradient-to-r -mt-2 h-12 w-full"></div>
      <ContainerLayout>
        <InnerContainer>
          <div>
            <p className="text-2xl font-bold">Dashboard</p>
          </div>
        </InnerContainer>
      </ContainerLayout>
    </React.Fragment>
  );
};

export default DashboardPage;
