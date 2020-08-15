const { json } = require("body-parser");

const createClient = async (name,code) => {
  console.log("name",name)
  const ClientModel = require("../models/client.model")
  try {
    const newClient = new ClientModel({
      name:name,
      code:code,
    })
    return newClient.save()
    .then(result => {
      console.log("result", result)
      return {
        "result":"success",
        "data":result
      }
    })
    .catch(error => {
      return {
        "result":"error",
        "data":error
      }
    })
  } catch (err) {
      return json({
        "result":"error",
        "data":err
      })
  }
}

const getClient = async () => {
  const ClientModel = require("../models/client.model")
  
  return ClientModel.find()
  .then(clients => {
    console.log("client",clients)
    return {
        "result":"success",
        "data":clients
      }
  })
  .catch(error => {
    console.log("error",error)
    return {
        "result":"error",
        "data":error
      }
  })
}

module.exports = { createClient, getClient }