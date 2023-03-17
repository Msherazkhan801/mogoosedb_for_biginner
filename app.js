const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/eshop',{useNewUrlParser:true ,useUnifiedTopology:true})
.then(()=>{
    console.log('db connected');
}).catch((err)=>{
    console.log(err);
})


const mydb=new mongoose.Schema({
    name:{type:String,
         require:true,
          unique:[true, 'name must be unique'],
          trim:true,
          minlength:[2,'minimum name lenght 2'],
          maxlength:20,

          },
    age:{
        type:Number,
        enum:[30,20,10] 
    },
    author:String,
    date:{
        type:Date,
        default:Date.now
    }

})
const Mydbs=new mongoose.model('Mydbs',mydb);

const createDocument= async () =>{
    try{
       const react=new Mydbs({
           name:"node",
           age:30,
           author:"iplex",
       })
     
       const res=await Mydbs.insertMany([react]);
       console.log(res);
    }catch(err){
        console.log(err);
    }

}
createDocument();

 const getDoc = async () =>{
     try{   
          const data= await Mydbs.find({author:'iplex'})
         console.log(data);
         }catch(err){
          console.log(err);
 }
 }
// getDoc();
const UpdateDoc = async (_id) =>{
    console.log(_id);
    try{   
         const result= await Mydbs.findByIdAndUpdate({_id},{
             $set:{
                 name:'Nodejs',
                 author:"local"
             }
         });
        console.log(result);
        }catch(err){
         console.log(err);
}
}
// UpdateDoc('64137e5cc3db35ea5db0189e');

const DeleteDoc = async (_id) =>{
    console.log(_id);
    try{   
         const result= await Mydbs.findByIdAndDelete({_id});
        console.log(result);
        }catch(err){
         console.log(err);

}
}
// DeleteDoc("64137e5cc3db35ea5db0189f");