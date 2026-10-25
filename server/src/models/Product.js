import mongoose from 'mongoose';
const productSchema=new mongoose.Schema({name:{type:String,required:true,trim:true,maxlength:180},slug:{type:String,unique:true,index:true},description:{type:String,required:true,maxlength:5000},category:{type:String,required:true,index:true},price:{type:Number,required:true,min:0},compareAtPrice:{type:Number,min:0},images:[{url:String,alt:String}],sizes:[String],colours:[String],sku:{type:String,unique:true,sparse:true},inventory:{type:Number,default:0,min:0},tags:[String],isPublished:{type:Boolean,default:false,index:true},isFeatured:{type:Boolean,default:false},seoTitle:String,seoDescription:String},{timestamps:true});
productSchema.index({name:'text',description:'text',tags:'text'});
export default mongoose.model('Product',productSchema);
