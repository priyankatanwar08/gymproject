const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/project2",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true
}).then(() => {
    console.log(`connection succssful`);
}).catch((e) => {
    console.log(`no connection`);
})