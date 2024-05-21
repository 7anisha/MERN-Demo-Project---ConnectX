const {Schema, model, Mongoose} = require("mongoose");

// const serviceSchema =  new Mongoose.schema ---no need as direct correction banaya h db me

const serviceSchema =  new Schema({
    service:{type:String,required:true},
    desc:{type:String,required:true},
    price:{type:String,required:true},
    provider:{type:String,required:true},
});

const Service=new model("Service",serviceSchema);

module.exports =Service;
