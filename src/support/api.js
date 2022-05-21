import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const api = axios.create({
  baseURL: process.env.API_ENDPOINT,
  withCredentials: true
})

api.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

const mock = new MockAdapter(api);
mock.onGet(new RegExp("/api/orders[?*|$]")).reply(200,
  {
    "orders": [
      {
        id: "aleijr34l3kj",
        userId: "uELIHRFLKG9ELKR",
        "status": "CREATED",
        "createdAt": 1613134046000,
        "updatedAt": 1613134046000
      },
      {
        id: "bleijr34l3kj",
        userId: "uFLIHRFLKG9ELKR",
        "status": "READY",
        "createdAt": 1613134045000,
        "updatedAt": 1613134045000
      },
      {
        id: "cleijr34l3kj",
        userId: "uGLIHRFLKG9ELKR",
        "status": "IN_PROGRESS",
        "createdAt": 1613134044000,
        "updatedAt": 1613134044000
      },
      {
        id: "dleijr34l3kj", userId: "uHLIHRFLKG9ELKR", "status": "IN_DELIVERY", "createdAt": 1613134043000,
        "updatedAt": 1613134043000, "deliveryStartedAt": 1613134143000
      },
      {
        id: "eleijr34l3kj", userId: "uILIHRFLKG9ELKR", "status": "DONE", "createdAt": 1613134042000,
        "updatedAt": 1613134042000, "deliveryStartedAt": 1613134142000, "completedAt": 1613134243000
      }]
  }
);

export {api}
