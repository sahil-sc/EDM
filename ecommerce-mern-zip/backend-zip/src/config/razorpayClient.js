const Razorpay = require('razorpay');

apiKey="rzp_test_p4u1HIZAf21oVd"
apiSecret="P7fzOZurDOdjmmQfqqhFQyA5"

const razorpay = new Razorpay({
    key_id: apiKey,
    key_secret: apiSecret,
  });


  module.exports=razorpay;