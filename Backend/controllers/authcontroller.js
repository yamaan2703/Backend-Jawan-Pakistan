const UserModel = require("../models/authmodel")
const brypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { SendResponse } = require("../helpers/helpers");

const AuthController = {
    signup: async (req, res) => {
        try {
            let {userName, password, contact} = req.body
            let obj = {userName, password, contact}
            let errArr = []

            if(!obj.userName){
                errArr.push("User Name is Required")
            }
            if(!obj.password){
                errArr.push("Password is Required")
            }
            if(errArr.length > 0){
                res.status(200).send(SendResponse(false, "Validation Error", errArr))
            }
            else{
                await UserModel.findOne({userName})
            }
            // let userExist = await UserModel.findOne({userName: obj.userName})


        } catch (error) {
            
        }
    }
}