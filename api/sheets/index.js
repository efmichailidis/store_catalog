import { google } from 'googleapis';

export async function GET(request) {
  try {
    
    // 1. Ρύθμιση OAuth Client από τα Environment Variables του Vercel
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      'http://localhost' // Redirect URI
    );

    // 2. Ορισμός των Tokens (κυρίως του Refresh Token)
    const refresh_token = process.env.GOOGLE_REFRESH_TOKEN
      ? process.env.GOOGLE_REFRESH_TOKEN.replace(/\\n/g, '\n')
      : undefined;
    
    oauth2Client.setCredentials({
      refresh_token: refresh_token,
    });

    // 3. Αρχικοποίηση Google Sheets API
    const sheets = google.sheets({ version: 'v4', auth: oauth2Client });

    const spreadsheetId = process.env.SPREADSHEET_ID;

    // 4. Batch Get για Καταστήματα και Εγκαταστάσεις
    const response = await sheets.spreadsheets.values.batchGet({
      spreadsheetId,
      ranges: ['Καταστήματα!A1:Z', 'Εγκαταστάσεις!A1:Z'],
    });

    const valueRanges = response.data.valueRanges;

    // 5. Επιστροφή των δεδομένων ως JSON στο Frontend
    return Response.json({
      katastimata: valueRanges[0].values || [],
      egkatastaseis: valueRanges[1].values || [],
    });

  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
