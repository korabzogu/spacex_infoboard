import axios from 'axios'

export function requestGetAllPayloads() {
    return axios.request({
        method: "get",
        url: "https://api.spacexdata.com/v4/payloads"
    })
}