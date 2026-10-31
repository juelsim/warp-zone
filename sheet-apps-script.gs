// Warp Zone booking page -> Google Sheet
//
// Setup (about 2 minutes):
// 1. Make a new Google Sheet called "Warp Zone leads".
// 2. Extensions > Apps Script. Delete what's there and paste this whole file. Save.
// 3. Deploy > New deployment > type "Web app".
//    Execute as: Me. Who has access: Anyone. Deploy, then approve the permissions.
// 4. Copy the web app URL (ends in /exec) into CONFIG.SHEET_URL in book.html.
//
// Each form submission adds one row. The header row is written on the first submission.
// If you change this script later, use Deploy > Manage deployments > Edit > New version,
// so the /exec URL stays the same.

const COLUMNS = [
  'submitted', 'name', 'centre', 'whatsapp', 'email',
  'centre_type', 'centres', 'world', 'students', 'monthly_fee', 'arr', 'msap_fit',
  'pdpa_consent', 'src',
  'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'ad_id', 'fbclid'
];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    if (sheet.getLastRow() === 0) sheet.appendRow(COLUMNS);
    const data = JSON.parse(e.postData.contents);
    // a leading apostrophe stops Sheets from turning +65 numbers into formulas
    sheet.appendRow(COLUMNS.map(k => {
      const v = data[k] == null ? '' : data[k];
      return typeof v === 'string' && /^[=+\-@]/.test(v) ? "'" + v : v;
    }));
    return ContentService.createTextOutput('ok');
  } finally {
    lock.releaseLock();
  }
}
