import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";

import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";

import styles from "./List.module.css";

const List = ({ rows, timeStampsData, selectedCurrency, mySearch }) => {
  //4 adding search feature on the order IDs 
  const searchData = rows.filter((row) => {
    return row["&id"].includes(mySearch);
  });
 let count=0;
  
 
  return (
    <table className={styles.container}>
      <thead>
        <ListHeader>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>Order Volume / {selectedCurrency}</ListHeaderCell>
        </ListHeader>
      </thead>
      <tbody>
        {searchData .map((row) => {
          {
            /*2. adding orderSubmitted to the table */
          }
          const p = timeStampsData.find((data) => row["&id"] === data["&id"]);
         
          return (
            <ListRow key={count++}>
              <ListRowCell>{row["&id"]} </ListRowCell>
              <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
              <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
              <ListRowCell>{p.timestamps.orderSubmitted}</ListRowCell>
              {/*3 displaying the the currency value */}
              <ListRowCell>
                {row.bestExecutionData.orderVolume[selectedCurrency]}
              </ListRowCell>
            </ListRow>
          );
        })}
      </tbody>
    </table>
  );
};

export default List;
