import axios from 'axios'

// TODO parameters needed: asset type and id
export function requestGetAllPayloads() {
    return axios.request({
        method: "get",
        url: "https://api.spacexdata.com/v4/payloads"
    })
}