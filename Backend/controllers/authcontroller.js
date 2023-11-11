const UserModel = require("../models/authmodel")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { SendResponse } = require("../helpers/helper");

const AuthController = {
        signup: async (req, res) => {
        console.log(req.body)
        try {
            let {userName, email, password } = req.body
            let obj = {userName, email, password}
            let errArr = []

            if(!obj.userName){
                errArr.push("User Name is Required")
            }
            if(!obj.email) {
                errArr.push("Email is Required")
            }
            if(!obj.password){
                errArr.push("Password is Required")
            }
            if(errArr.length > 0){
                res.status(200).send(SendResponse(false, "Validation Error", errArr))
            }
            let userExist = await UserModel.findOne({userName: obj.userName})

            if(userExist){
                res.status(400).send(SendResponse(true, "User Already Exist with this User Name"))
            }

            obj.password = await bcrypt.hash(obj.password, 10)

            let User = new UserModel(obj)
            let result = await User.save()

            if(result){
                res.status(200).send(SendResponse(true, "User Created Successfully !", result))
            }
            
        } catch (error) {
            res.status(500).send(SendResponse(false, "Internal Server Error", error))
            
        }
    },

    login: async (req, res) => {
        try {
            let {userName, password} = req.body
            let obj = {userName, password}
            let existingUser = await UserModel.findOne({userName: obj.userName})

            if(existingUser) {
                let correctPassword = await bcrypt.compare(
                    obj.password,
                    existingUser.password
                )
                if(correctPassword) {
                    let token = jwt.sign({existingUser}, process.env.SECRET_KEY)
     
                    res.send(SendResponse(true, "login Successfully", {
                     token: token,
                     user: existingUser
                    }))
                 }else{
                    res.send(SendResponse(false, "Password Not Match"))
                 }
            }else{
                res.send(SendResponse(false, "User Not Found with this User Name"))
            }    
        } catch (error) {
           res.status(400).send(SendResponse(false, "Invalid Error"))    
        }
    },

    protected: async (req, res, next) => {
        // Bearer
        let token = req.headers.authorization?.split("")[1]
        if(!token){
            res.status(401).send(SendResponse(false, "Un Authorized"))
            return
        }else{
            jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
                if(err){
                    res.status(401).send(SendResponse(false, "Un Autorized"))
                
                }else{
                    // req.decoded = decoded
                    next()
                }
            })
        }
     
    }
}


module.exports = AuthController;