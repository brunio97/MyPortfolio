const nodemailer = require('nodemailer');

enviarMail = async () => {
    const config = {
        host :'smtp.gmail.com',
        port: 587,
        auth : {
            user : 'bfsv97@gmail.com',
            pass : 'uaha ghsh cgbd cgsa'
        }
    }

    const mensaje = {
        from : 'bfsv97@gmail.com',
        to : 'bfsv97@gmail.com',
        subject : 'correo de puebas',
        text : 'kory'
    }
    
    const transport = nodemailer.createTransport (config);
    
    const info = await transport.sendMail(mensaje);

    console.log(info);
}

enviarMail();

