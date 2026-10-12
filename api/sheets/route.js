import { google } from 'googleapis';

export async function GET() {
  try {
    // Αυθεντικοποίηση με Service Account
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        // Διόρθωση για τα newlines (\n) αν χρειαστεί στο Vercel
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.SPREADSHEET_ID;

    // Batch Get για Καταστήματα και Εγκαταστάσεις
    const response = await sheets.spreadsheets.values.batchGet({
      spreadsheetId,
      ranges: ['Καταστήματα!A1:Z', 'Εγκαταστάσεις!A1:Z'],
    });

    const valueRanges = response.data.valueRanges;

    return Response.json({
      katastimata: valueRanges[0].values || [],
      egkatastaseis: valueRanges[1].values || [],
    });

  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
