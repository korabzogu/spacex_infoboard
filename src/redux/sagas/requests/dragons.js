import axios from 'axios'
import { baseurl, version } from '../../../api'

export function requestGetAllDragons() {
    return axios.request({
        method: "get",
        url: baseurl + "/" + version + "/dragons"
    })
}

export function requestGetSingleCrew(id) {
    return axios.request({
        method: "get",
        url: baseurl + "/" + version + "/dragons:" + id
    })
}