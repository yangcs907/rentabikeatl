import axios from "axios";

export default {

  getListings: function() {
    return axios.get("/api/listings");
  },
  getListingsById: function(id) {
    return axios.get("/api/listings/" + id);
  },
  deleteListing: function(id) {
    return axios.delete("/api/listings/" + id);
  },
  saveListing: function(listing) {
    return axios.post("/api/listings", listing);
  },
};
