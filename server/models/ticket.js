const mongoose=require('mongoose');
const busDetailsSchema= new mongoose.Schema({
    name:{type:String},
    SeatNoNumber:{type:String},
    busId:{type:String},
    age:{type:String}, 
    seats:{type:Array}   
})

module.exports=mongoose.model('ticket',busDetailsSchema);
