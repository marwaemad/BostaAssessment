
import { GET_SHIPMENT_DATA_API,GET_SHIPMENT_DATA_API_SUCCESS } from "./actionTypes";


export const getShipmentTrackingData = (shipmentNo) => {
  return { type: GET_SHIPMENT_DATA_API, shipmentNo: shipmentNo };
}
export const getShipmentTrackingDataSuccess = (shipmentData) => {
  return { type: GET_SHIPMENT_DATA_API_SUCCESS, shipmentData: shipmentData };
}
