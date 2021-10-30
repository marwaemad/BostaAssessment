
import "./App.scss";
import Header from "./components/headercomponent/header";
import TrackingComponent from "./components/trackingcomponent/TrackingComponent";
import ShipmentDetails from "./components/shipmentDetailsComponent/shipmentDetails";


function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <TrackingComponent />
        <ShipmentDetails />
      </div>
    </div>
  );
}

export default App;
