// 不做錯誤處理 不針對參數判斷 單純做DB CRUD

export async function findUserEmail(email, db) {
  const result = await db.query('SELECT * FROM "UserAuthentication" WHERE accountname = $1', [email])
  return result.rows[0] ?? null
}

export async function InsertUser(account, password, aliceName, userid, db) {
  const result = await db.query('INSERT INTO "UserAuthentication" (userid,accountname,password,alicename) VALUES ($1,$2,$3,$4) RETURNING *', [userid, account, password, aliceName])
  const user = {
    userid: result.rows[0].userid,
    accountname: result.rows[0].accountname,
    alicename: result.rows[0].alicename
  }
  return user ?? null
}

export async function GetUserById(userId, db) {
  const result = await db.query('SELECT * FROM "UserAuthentication" WHERE userid = $1', [userId])
  return result.rows[0] ?? null
}