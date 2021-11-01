import { GET_SHIPMENT_DATA_API, GET_SHIPMENT_DATA_API_SUCCESS } from "./actionTypes";



const shipmentReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_SHIPMENT_DATA_API:
      return {
        state
      }

    case GET_SHIPMENT_DATA_API_SUCCESS:
      return {
        state,
        shipmentData: action.shipmentData
      }


    default:
      return state
  }
};

export default shipmentReducer;