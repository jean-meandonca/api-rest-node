const { neon } = require("@neondatabase/serverless");
require("dotenv").config();

const sql = neon(process.env.DATABASE_URL);

(async () => {

  // await sql`
  //   DROP TABLE IF EXISTS videos
  // ;`.then(() => {
  //   console.log('Tabela apagada')
  // })

  await sql`
    CREATE TABLE IF NOT EXISTS videos (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      description TEXT,
      duration INTEGER
    );
  `;
  console.log("✅ Tabela criada com sucesso");
})();
