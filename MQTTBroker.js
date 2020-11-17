//Mongo DB Connection
const MongoClient = require('mongodb').MongoClient
const dbConnectionString = MongoDB = "mongodb+srv://<UserID>:<Password>@cluster0.cnyhr.mongodb.net/<CollectionName>?retryWrites=true&w=majority"
const client = new MongoClient(dbConnectionString, {useNewUrlParser: true, useUnifiedTopology: true})
client.connect(); // create persistent connection

//MQTT Broker
var mosca = require('mosca')
var config = {port: 1888}
var MQTTBroker = new mosca.Server(config)

MQTTBroker.on('ready',()=>{
  console.log('MQTT Broker Service Started!')
})

MQTTBroker.on('published',(packet)=>{
  message = packet.payload.toString()

  if(!isNaN(message)){
    console.log('Publishing Topic: '+packet.topic.toString()+' Value: '+message)
    var activeCollection = client.db('<DBName>').collection('<CollectionName>') //TODO: map collection name to CNC job name dynamically
    activeCollection.insertOne({
      when:new Date(),
      temperature: message, // Sensor value, in this case (Temp), it will be degrees celsius (float)
      sensor_type: packet.topic.toString().slice(0,4), // sensor type is only 'Temp' presently
      sensor_name: packet.topic.toString().slice(5,25) // sensor name can be 'StockMaterial', 'Tool', 'Spindle', 'StepperX', etc.
    })
  }
})
