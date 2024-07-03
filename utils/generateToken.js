import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '1h'
    });

    console.log(process.env.NODE_ENV === 'production')

    // console.log('Generated Token:', token);

    // res.cookie('jwt', token, {
    //     httpOnly: true,
    //     secure: process.env.NODE_ENV === 'production',
    //     sameSite: 'None',
    //     maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
    // });

    res.cookie('token', token, { httpOnly: true, sameSite: 'None', secure: false });

};

export default generateToken;
