const sgMail=require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail=async(email,name)=>{
    try{
        await sgMail.send({
            to:email,
            from:'sensoumya533@gmail.com',
            subject:'Thanks for joining us:)',
            text:`Welcome to the app, ${name}.Let me know how you get along the app.`
        });
    }catch(e){
        console.log(e);
        console.log(e.response.body.errors);
    }
};

const sendCancelationEmail=async(email,name)=>{
    try{
        await sgMail.send({
            to:email,
            from:'sensoumya533@gmail.com',
            subject:'Sorry to see you go:(',
            text:`Good bye,${name}.I hope we will see you sometime soon.`
        })
    }catch(e){
        console.log(e);
        console.log(e.response.body.errors);
    }
}

module.exports={
    sendWelcomeEmail,
    sendCancelationEmail
};