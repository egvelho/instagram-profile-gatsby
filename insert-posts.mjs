import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import pg from "pg";
import parseMD from "parse-md";

dotenv.config();

const Client = pg.Client;

function getPost(path) {
  const fileContents = fs.readFileSync(path, "utf8");
  const {
    metadata: { title, date, author },
    content,
  } = parseMD(fileContents);
  return {
    title,
    date,
    author,
    content,
  };
}

(async () => {
  const insertPostQuery = `insert into posts ("title", "date", "author", "content") values ($1, $2, $3, $4);`;

  const pgClient = new Client(process.env.DATABASE_URL);
  await pgClient.connect();

  const postsToInsert = fs
    .readdirSync("posts")
    .map((post) => getPost(path.join("posts", post, "index.md")));

  for (const post of postsToInsert) {
    const postRes = await pgClient.query(insertPostQuery, Object.values(post));
    console.log(postRes);
  }

  await pgClient.end();
})();
