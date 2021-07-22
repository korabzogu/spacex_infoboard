import axios from 'axios'
import { baseurl, version } from '../../../api'

export function requestGetAllStarlink() {
    console.log("Request get all starlink")
    return axios.request({
        method: "get",
        url: baseurl + "/" + version + "/starlink"
    })
}

export function requestGetSingleStarlink(id) {
    return axios.request({
        method: "get",
        url: baseurl + "/" + version + "/starlink:" + id
    })
}