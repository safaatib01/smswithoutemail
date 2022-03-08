const accountSid = 'AC975ba795301caa7d32bb104938292e71'; 
const authToken = 'd118afc99b2a0c410c3158d6a27f31b2'; 
const client = require('twilio')(AC975ba795301caa7d32bb104938292e71, d118afc99b2a0c410c3158d6a27f31b2); 
 
client.messages 
      .create({ 
         body: 'Tjena!:)', 
         from: '+13143287962', 
         messagingServiceSid: 'MGf2767950ffbf367762212249c1f63e35',      
         to: '+46737345086' 
       }) 
      .then(message => console.log(message.sid)) 
      .done();