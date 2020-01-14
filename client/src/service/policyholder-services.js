import axios from 'axios'

export default class services {

  constructor() {

    this.service = axios.create({
      baseURL: process.env.REACT_APP_URL,
      withCredentials: true
    })
  }

  getAllPolicyholders = () => {

    return this.service.get('getAllPolicyholders')
      .then(res => res.data)
      .catch(err => console.log('Error', err))
  }
}
