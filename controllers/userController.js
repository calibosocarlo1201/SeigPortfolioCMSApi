import User from '../models/users.js';
import generateToken from '../utils/generateToken.js';

export const registerUser = async (req, res) => {

    const { username } = req.body;

    try {

        const userExist = await User.findOne({username});
        if(userExist) return res.status(409).json({message: "Username already exist"});

        const user = new User(req.body);
        await user.save();

        const { password, ...userResponse} = user._doc;

        if(user){
            generateToken(res, user._id);
            res.status(200).json(userResponse);
        }else{
            res.status(404).json({message: "User creation failed"});
        }


    
    } catch (error) {
        res.send(error.message);
    }
}

export const authUser = async (req, res) => {

    const { username, password} = req.body;
    const user = await User.findOne({username});

    const { password: pass, ...userResponse} = user

    if(user && (await user.matchPassword(password))){
        generateToken(res, user._id);

        res.status(200).json(userResponse);
    }else{
        res.status(401).json({message: "Invalid Credentials"});
    }

}