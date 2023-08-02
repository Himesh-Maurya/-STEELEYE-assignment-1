import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";

import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";

import styles from "./List.module.css";

const List = ({ rows,timeStampsData}) => {
  return (
    <table className={styles.container}>
      <thead>
        <ListHeader>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>Order Volume / USD</ListHeaderCell>
        </ListHeader>
      </thead>
      <tbody>

  {rows.map((row) => {
{/*2. adding orderSubmitted to the table */}
    const p = timeStampsData.find(
      (data) => row["&id"] === data["&id"]
    );
   
    return (
      <ListRow key={row["&id"]}>
        <ListRowCell>{row["&id"]}</ListRowCell>
        <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
        <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
        <ListRowCell>{p.timestamps.orderSubmitted}</ListRowCell>
        <ListRowCell>{row.bestExecutionData.orderVolume.USD}</ListRowCell>
      </ListRow>
    );
  })}
</tbody>
    </table>
  );
};

export default List;
