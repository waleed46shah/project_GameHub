import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "bfa50344578240aeb7facd49fd0312db",
  },
});
