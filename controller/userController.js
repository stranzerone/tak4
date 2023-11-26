import User from "../Schemas/userSchema.js"


export const addUser =async(req,res)=>{

const data = req.body;
console.log(data)

try{
    const addUser =  new User({username:data.username,password:data.password})
   await addUser.save()
    if(addUser){
      console.log("user added")
   res.status(200).json("user added successfully")
    }else{
        res.status(400).json("invalid input")
    }
}catch(error){
    console.error(error)
}

}


export const getUser = async (req, res,next) => {
  const data = req.body;
  console.log(data)

  try {
    const user = await User.findOne( {username:data.assignedUser});

    if (!user) {
      return res.status(401).json({ error: 'user-does not exist to add' });
    }
next()
  
  } catch (error) {
    console.error(error);
  }
};




export const authenticateUser = async (req, res,next) => {
  const data = req.body;

  try {
    const user = await User.findOne( {username:data.username,password:data.password});

    if (!user) {
      return res.status(401).json({ error: 'Unauthorized - Invalid credentials' });
    }
next()
  
  } catch (error) {
    console.error(error);
  }
};
