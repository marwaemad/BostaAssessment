
import "./App.scss";
import Header from "./components/headercomponent/header";
import TrackingComponent from "./components/trackingcomponent/TrackingComponent";
import ShipmentDetails from "./components/shipmentDetailsComponent/shipmentDetails";
import { useSelector } from 'react-redux';

function App() {
  const shipmentData = useSelector(state => state.shipmentData)
  return (
    <div className="App">
      <div className="container">
        <Header />
        {shipmentData && <TrackingComponent shipmentData={shipmentData} />}
        {shipmentData && <ShipmentDetails shipmentData={shipmentData} />}
      </div>
    </div>
  );
}

export default App;
