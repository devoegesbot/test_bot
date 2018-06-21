var express 		    = require('express');
var app			        = express();	
var request			    = require('request');
var bodyParser          = require('body-parser');
var myPort= process.env.PORT || 3000;
app.post('/botHandler',function(req,res){
  console.log("////// LOGIN");
  console.log(req.body);
res.send({
  "conversationToken": "{\"state\":null,\"data\":{}}",
  "expectUserResponse": true,
  "expectedInputs": [
    {
      "inputPrompt": {
        "initialPrompts": [
          {
            "textToSpeech": "PLACEHOLDER_FOR_SIGN_IN"
          }
        ],
        "noInputPrompts": []
      },
      "possibleIntents": [
        {
          "intent": "actions.intent.SIGN_IN",
          "inputValueData": {}
        }
      ]
    }
  ]
});
})
app.listen(myPort);
