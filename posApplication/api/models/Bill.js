const mongoose=require("mongoose");

const BillSchema=mongoose.Schema(
    {
        CustomerName:{type:String,require:true},
        CustomerPhoneNumber:{type:String,require:true},
        paymentMode:{type:String,require:true},
        subTotal:{type:Number,require:true},
        tax:{type:Number,require:true},
        totalAmount:{type:Number,require:true},
        cardItems:{type:Array,require:true},
    },
    {timestamps:true}//ne zaman oluşturuldu tarzı bilgiler için
);
const Bill=mongoose.model("bills",BillSchema);

module.exports=Bill;