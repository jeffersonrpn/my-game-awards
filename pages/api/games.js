const { GoogleSpreadsheet } = require("google-spreadsheet");

export default async function handler(req, res) {
  const doc = new GoogleSpreadsheet(process.env.SHEET_ID_GAMES);

  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY,
  });

  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[0];
  const rows = await sheet.getRows();
  const games = rows.map(({ name, img }) => {
    return {
      name,
      img,
    };
  });

  res.status(200).json(games);
}
