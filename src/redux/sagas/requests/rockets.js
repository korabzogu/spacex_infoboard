import axios from 'axios'
import { baseurl, version } from '../../../api'

export function requestGetAllRockets() {
    return axios.request({
        method: "get",
        url: baseurl + "/" + version + "/rockets"
    })
}

export function requestGetSingleRockets(id) {
    return axios.request({
        method: "get",
        url: baseurl + "/" + version + "/rockets:" + id
    })
}