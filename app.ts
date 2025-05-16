const mongoose = require("mongoose")


const connectToDb = async()=>{
 
    try {
        const res =  await mongoose.connect("mongodb+srv://mongocluster:1234567890@cluster-mongo-basics.raes7yv.mongodb.net/")

        // console.log(res);
        console.log("db connected");
        
        
    } catch (error) {
   
        console.log("something went wrong");
        
    }

}



const userSchema = new mongoose.Schema({
    name:String,
    age:Number,
    admin:Boolean,
    createdAt:{type:Date,default:Date.now()}
})


// model

const User = mongoose.model("User",userSchema)

const playWithMongo = async()=>{
await connectToDb()

// // METHOD ONE OF ADDDING NEW USER
// const createNewUser = await User.create({
//     name:"paschal",
//     age:23,
//     admin:true,
// })

// console.log(createNewUser);


// METHOD TWO OF ADDDING NEW USER

// const newUser = new User({
//     name:"jamex",
//     age:18,
//     admin:false,
// })

// await newUser.save()


// GET ALL USER FROM DATABASE

// const getAllUsers = await User.find({})
// console.log(getAllUsers);

// GET ALL USERS THAT HAVE ADMIN AS FALSE
// const getAllAdminFals = await User.find({admin:false})
// console.log(getAllAdminFals);


// FIND THE FIRST USER WITH THE NAME "jamex"

// const findFirstUser = await User.findOne({name:"jamex"})
// console.log(findFirstUser);


// GET USER WITH ID
// const getUserById = await User.findById({_id:"682323d298ae9eab89a3843f"})
// console.log(getUserById);

// GET SELECTED FIELDS OF USERS IN DATABASE

// const getSelectedFields = await User.find({}).select("name age -_id")
// console.log(getSelectedFields);



// SKIPPING FIRST USER AND GETTING THE FIRST TWO USERS AFTER SKIPPED USER

// const getSecondAndThirdUser = await User.find().limit(2).skip(1)
// console.log(getSecondAndThirdUser);

// SORT USERS FROM DATABASE BY AGE 
// const sortedUsers = await User.find().sort({age:-1}) DESCENDING ORDER
// const sortedUsers = await User.find().sort({age:1}) ASCENDING ORDER
// console.log(sortedUsers);

// COUNT DOCUMENTS THAT HAVE admin AS true FROM THE DATABASE

// const adminIsTrueFromDatabase = await User.countDocuments({admin:true})
// console.log(adminIsTrueFromDatabase);



// DELETE USER FROM DATABASE

const deleteUser = await User.findByIdAndDelete("68231f482fe16961664c26af")
console.log(deleteUser);

// UPDATE INFO OF A USER IN DATABASE

const updateUser = await User.findByIdAndUpdate("68232464123699324e2087b9",{$set : {name:"james agu",age:100}},{new:true})
console.log(updateUser);



}


playWithMongo()