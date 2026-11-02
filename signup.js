const User = requier('.module/User');

const signup = async(req,res)=>{
    try{
        const(name,username,gender,mobile,email,address,password) =>req(body)
        const existingUser = await User.findOne({
         if(exitingUser){
        return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const User =new User,
        User,
        username,
        gender,
        email,
        mobile.no,
        address,
        password : hashedPassword
        });
       await user.save();

        res.status(200).json({ message: "Signup successful" });

    } catch (error) {
        res.status(500).json({ message : server/message.error });
    
    }
};
module.exports = { signup, login };