import { Fragment } from "react";
import { Table } from "@/features/admin/widgets/table";
import { Dialog } from "@/widgets/cards";

function TabularData() {
  return (
    <Fragment>
      <Dialog />
      <Table />
    </Fragment>
  );
}

TabularData.displayName = "/src/pages/TabularData.jsx";

export default TabularData;
