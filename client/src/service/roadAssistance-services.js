import axios from 'axios'

export default class services {

  constructor() {

    this.service = axios.create({
      baseURL: process.env.REACT_APP_URL,
      withCredentials:true
    })
  }

  getAllRecoveryServices = () => {

    return this.service.get('getAllRecoveryServices')
      .then(res => res.data)
      .catch(err => console.log('Error', err))
  }

  postUserLocation = (lat, lng, pickupId) => {
  // postUserLocation = (info) => {}
    return this.service.post('postLocation', { lat, lng, pickupId})
    .then(res => res.data)
    .catch(err => console.log(err))
  }
  
  getServiceInfo = () => {
    return this.service.get('services')
    .then(res => res.data)
    .catch(err => console.log('Error', err))
    
  }
}
