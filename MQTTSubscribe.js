//MQTT client
var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://localhost:1888')

//what topic?
var topic = process.argv.slice(2);

client.on('message', (topic, message)=>{
  message = message.toString()
  console.log(message)
})

client.on('connect', ()=>{
  client.subscribe(topic)
})
