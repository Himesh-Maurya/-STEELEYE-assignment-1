import styles from "./ListRow.module.css";

const ListCell = ({ children,setOrder,row1,setTime,time1 }) => {
  let count2=0;
    {/*6  populate the Card data */}
  return <tr  onClick={() => {
  setOrder(row1)
  setTime(time1)
  }} className={styles.cell} key={count2++}>{children}</tr>;
};

export default ListCell;
