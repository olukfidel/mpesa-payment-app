// This is your backend file that handles payments

const initiateStkPush = async (req, res) => {
    // For a real application, you'd get the customer's phone number and amount from the request body
    // const { phoneNumber, amount } = req.body;

    // FOR TESTING: Hardcode your phone number and the test amount here
    const phoneNumberForTesting = "254705171059 "; // 👈 YOUR TEST NUMBER GOES HERE
    const amountForTesting = 1; // 👈 Sandbox only likes 1 KES for tests

    // The other details are pulled securely from your .env file
    const shortcode = process.env.MPESA_BUSINESS_SHORTCODE;
    const passkey = process.env.MPESA_LIPA_NA_MPESA_PASSKEY;
    const callbackURL = process.env.MPESA_CALLBACK_URL;

    // ... code to generate the password and timestamp ...

    const payload = {
        "BusinessShortCode": shortcode,
        "Password": "...", // The password generated above
        "Timestamp": "...", // The timestamp generated above
        "TransactionType": process.env.MPESA_TRANSACTION_TYPE,
        "Amount": amountForTesting,
        "PartyA": phoneNumberForTesting,
        "PartyB": shortcode,
        "PhoneNumber": phoneNumberForTesting, // 👈 AND HERE
        "CallBackURL": callbackURL,
        "AccountReference": "Test Transaction",
        "TransactionDesc": "Testing M-Pesa API"
    };

    // ... code to send this payload to the Safaricom API ...
};
