//Danny Radosevich
//UWYO COSC4210

const nodemailer= require('nodemailer')

const mailTransport = nodemailer.createTransport(
    {
        auth: {
            "user": "your credentials here",
            "password": "Password here"
        }
    }
)


//send an email to a singular person 
try
{
    const result = await mailTransport.sendMail(
        {
            from: '"High Altitude travel" <info@highaltitudetravel.com',
            to: 'cowboyjoe@uwyo.edu',
            subject: 'Thanks for Joining!',
            html: '<h1>Thank you for signing up for the newsletter!</h1>',
            text: 'Thank you for signing up with the newsletter!'
        }
    )
    console.log('mail sent successfully',result )
}
catch(err)
{
    console.log(err)
}