import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses/",
    headers: {
        Authorization: "Bearer Ikt34I50Nx3q3sCwePsaNcuQiljLOrkoRA7CfIVU_pb7Urrk1jZbsyRqIdZPinaBnYz3ONo9eBTW1yraakSPmmCe1xOBcCWRP9BXufDLHb2V0e2_-uqafpf46l4KYXYx"
        
    }

})