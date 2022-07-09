import Header from "../shared/Header";
import BorrowingTable from "./BorrowingTable";

function BorrowingWrapper() {
  return (
    <>
      <Header name="Detail o objednávke" />
      <BorrowingTable />
    </>
  );
}

export default BorrowingWrapper;
