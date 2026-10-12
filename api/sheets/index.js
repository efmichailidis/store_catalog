import { google } from 'googleapis';

export default async function handler(req, res) {
  try {

    const refreshToken = process.env.GOOGLE_REFRESH_TOKEN?.trim();
    const clientId = process.env.GOOGLE_CLIENT_ID?.trim();
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET?.trim();
    console.log(1);

    console.log('refreshToken: '+ refreshToken);
    console.log('clientId: '+ clientId);
    console.log('clientSecret: '+ clientSecret);
    
    const oauth2Client = new google.auth.OAuth2(
      clientId,
      clientSecret,
      'http://localhost' // Redirect URI
    );
    
    console.log(2);
    oauth2Client.setCredentials({
      refresh_token: refreshToken,
    });

    console.log(3);
    const sheets = google.sheets({ version: 'v4', auth: oauth2Client });

    console.log(4);
    const response = await sheets.spreadsheets.values.batchGet({
      spreadsheetId: process.env.SPREADSHEET_ID,
      ranges: ['Καταστήματα!A1:Z', 'Εγκαταστάσεις!A1:Z'],
    });

    console.log(5);
    return res.status(200).json({
      katastimata: response.data.valueRanges[0].values || [],
      egkatastaseis: response.data.valueRanges[1].values || [],
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
