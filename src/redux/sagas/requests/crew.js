import axios from 'axios'
import { baseurl, version } from '../../../api'

export function requestGetAllCrew() {
    return axios.request({
        method: "get",
        url: baseurl + "/" + version + "/crew"
    })
}

export function requestGetSingleCrew(id) {
    return axios.request({
        method: "get",
        url: baseurl + "/" + version + "/crew:" + id
    })
}