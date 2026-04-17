import React, { use } from "react";
import DashText from "../../components/dashText/DashText";
import DataLoad from "../../components/dataLoad/DataLoad";

const Dashboard = ({ dataPromise }) => {
  const data = use(dataPromise);

  return (
    <div>
      <DashText></DashText>
      <DataLoad data={data}></DataLoad>
    </div>
  );
};

export default Dashboard;
