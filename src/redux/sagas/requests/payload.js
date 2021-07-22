import axios from 'axios'
import { baseurl, version } from '../../../api'

export function requestGetAllPayloads() {
    return axios.request({
        method: "get",
        url: baseurl + "/" + version + "/payloads"
    })
}

export function requestGetSinglePayload(id) {
    return axios.request({
        method: "get",
        url: baseurl + "/" + version + "/payloads:" + id
    })
}