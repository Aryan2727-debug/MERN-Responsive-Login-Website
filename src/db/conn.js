const mongoose = require("mongoose");

mongoose.set("strictQuery" , true);

mongoose.connect("mongodb://localhost:27017/aryan-dynamic" , {
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(() => {
    console.log("Connection Successful!");
}).catch((err) => {
    console.log(err);
}); 