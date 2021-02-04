const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default (recipients) => {
    //first triim all spaces and split all recipients by the comma, then show invalid recipients
    const invalidEmails = recipients.split(',').map(email => email.trim()).filter(email => emailRegEx.test(email) === false);

    if (invalidEmails.length) {
        return `These recipients are invalid: ${invalidEmails}`
    }

    return;
};