const mongoose=require("mongoose");

const CategorySchema=mongoose.Schema(
    {
        title:{type:String,require:true},
    },
    {timestamps:true}//ne zaman oluşturuldu tarzı bilgiler için
);
const Category=mongoose.model("categories",CategorySchema);

module.exports=Category;