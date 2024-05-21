const adminMiddleware = async (req,res,next)=>{
    try {
        // res.status(200).json({msg:req.user.isAdmin})
        const adminRole =req.user.isAdmin;
        if(!adminRole){
            return res.status(401).json({message:"You are not an admin" })  

        }
        next()
    } catch (error) {
        next(error)
    }
}
module.exports= adminMiddleware;