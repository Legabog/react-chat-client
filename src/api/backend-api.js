  
import * as axios from "axios";

export const backendApi = {
  addToRoom(payloadData) {
    return axios
      .post(`/rooms`, payloadData)
      .then((response) => {
        return response.data;
      });
  },

  getRoomData(room) {
    return axios
      .get(`/rooms/${room}`)
      .then((response) => {
        return response.data;
      });
  },
};