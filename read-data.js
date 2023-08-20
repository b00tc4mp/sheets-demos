const { google } = require("googleapis")

const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
})


    ; (async () => {

        const authClient = await auth.getClient()

        google.options({ auth: authClient })

        const sheets = google.sheets({ version: "v4", auth: authClient })
       
        const res = await sheets.spreadsheets.values.get({
            spreadsheetId: '1zjVN5dTaMG0IuR4L2l3prHOXxFgRnvzoUH24hUk3vRo',
            auth,
            range: 'Sheet1'
          });

          console.log(res.data.values, 'res');
    })()

