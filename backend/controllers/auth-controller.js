const otpService = require("../services/otp-service");
const hashService = require("../services/hash-serivce");
const userService = require("../services/user-service");
const tokenService = require("../services/token-service");
const UserDto = require("../dtos/user-dto");

class AuthController {
    async sendOtp(req, res) {
        const { phone } = req.body;
        if(!phone) {
            res.status(400).json({message:"phone field is required"});
        }

        const otp = await otpService.generateOtp();

        const ttl = 1000 * 60 * 5; // 5 mins time to live
        const expires = Date.now() + ttl;
        const data = `${phone}.${otp}.${expires}`;
        const hash = hashService.hashOtp(data);

        try {
            // await otpService.sendBySms(phone, otp);
            res.json({
                hash: `${hash}.${expires}`,
                phone,
                otp
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({message: "message sending failed"});
        }
    }

    async verifyOtp(req, res) {
        const { otp, hash, phone } = req.body;
        
        if(!otp || !hash || !phone) {
            res.status(400).json({message: 'All Fields are required!'});
        }
        
        const [hashedOtp, expires] = hash.split('.');
        
        if(Date.now() > +expires) {
            res.status(400).json({message: "Otp Expired!"});
        }
        
        const data = `${phone}.${otp}.${expires}`;

        const isValid = otpService.verifyOtp(hashedOtp, data);

        if(!isValid) {
            res.status(400).json({message: 'Invalid Otp'});
        }

        let user;

        try {
            user = await userService.findUser({phone});
            if(!user) {
                user = await userService.createUser({phone: phone});
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({message: "DB error"});
        }

        // Token
        const {accessToken, refreshToken} = tokenService.generateTokens({_id: user._id, activated: false});

        res.cookie('refreshtoken', refreshToken ,{
            maxAge: 1000 * 60 * 60 * 24 * 30,
            httpOnly: true,
        });

        const userDto = new UserDto(user);

        res.json({accessToken, user: userDto});
    }
}

module.exports = new AuthController();