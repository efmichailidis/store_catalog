import { google } from 'googleapis';

export default async function handler(req, res) {
  try {
    console.log("Client ID loaded:", process.env.GOOGLE_CLIENT_ID ? process.env.GOOGLE_CLIENT_ID.substring(0, 10) + "..." : "MISSING");
    console.log("Refresh Token loaded:", process.env.GOOGLE_REFRESH_TOKEN ? process.env.GOOGLE_REFRESH_TOKEN.substring(0, 5) + "..." : "MISSING");
    
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      'http://localhost' // Redirect URI
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
    });

    const sheets = google.sheets({ version: 'v4', auth: oauth2Client });

    const response = await sheets.spreadsheets.values.batchGet({
      spreadsheetId: process.env.SPREADSHEET_ID,
      ranges: ['Καταστήματα!A1:Z', 'Εγκαταστάσεις!A1:Z'],
    });

    return res.status(200).json({
      katastimata: response.data.valueRanges[0].values || [],
      egkatastaseis: response.data.valueRanges[1].values || [],
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
