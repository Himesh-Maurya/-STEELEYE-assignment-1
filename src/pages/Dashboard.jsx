import { useState } from "react";

// Data
import mockData from "../assets/data.json";
import timestamps from "../assets/timeStamps.json";

// Components
import Dropdown from "../component/dropdown/Dropdown";
import HeaderTitle from "../component/header-title/HeaderTitle";
import Search from "../component/search/Search";
import List from "../component/list/List";

// Styles
import styles from "./Dashboard.module.css";
import Card from "../component/card/Card";


const Dashboard = () => {
  const [currency, setCurrency] = useState("USD");
  const [searchText, setSearchText] = useState("");
  const [selectedOrderDetails, setSelectedOrderDetails] = useState({});
  const [selectedOrderTimeStamps, setSelectedOrderTimeStamps] = useState({});
  const p=Object.keys(mockData.results[0].bestExecutionData.orderVolume);
  return (
    <div>
      <div className={styles.header}>
      {/* displaying the correct numbers of order */}
        <HeaderTitle primaryTitle="Orders" secondaryTitle= {`${mockData.results.length} order`}/>
        <div className={styles.actionBox}>
          <Search
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
         
          <Dropdown
            // options={["GBP", "USD", "JPY", "EUR"]}
            options={[...p]}
            onChange={(e) => setCurrency(e.target.value)}
            selectedItem={currency}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.section}>
          <Card
            cardData={selectedOrderDetails}
            title="Selected Order Details"
          />
          <Card
            cardData={selectedOrderTimeStamps}
            title="Selected Order Timestamps"
          />
        </div>
        <List rows={mockData.results} timeStampsData={timestamps.results} selectedCurrency={currency}/>
      </div>
    </div>
  );
};

export default Dashboard;
