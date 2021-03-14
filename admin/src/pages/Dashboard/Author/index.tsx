import React from "react";
import DataTable from "mui-datatables";
import { Grid } from "@material-ui/core";
const columns = ["Name", "Company", "City", "State"];

const data = [
  ["Joe James", "Test Corp", "Yonkers", "NY"],
  ["John Walsh", "Test Corp", "Hartford", "CT"],
  ["Bob Herm", "Test Corp", "Tampa", "FL"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
];

export const AuthorPage: React.FC = () => {
  return (
    <div>
      <DataTable
        title={"Employee List"}
        data={data}
        columns={columns}
        options={{
          filterType: "checkbox",
        }}
      />
    </div>
  );
};
