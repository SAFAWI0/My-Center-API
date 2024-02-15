const client = require("../db/index");

async function getSessions(req, res) {
  let id = req.params.id;
  const result = await client.query(`SELECT * FROM Sessions WHERE center_id =${id}`);
  res.send(result.rows);
}
async function addsession(req, res) {
  let {
    ses_name,
    img,
    video,
    details,
    evaluation,
    price,
    session_time,
    nu_ssession,
    center_id,
  } = req.body;

  const result = await client.query(
    `insert into Sessions(ses_name,img,video,details,evaluation, price, session_time, nu_ssession,center_id)
    values('${ses_name}','${img}','${video}','${details}','${evaluation}','${price}','${session_time}','${nu_ssession}','${center_id}')RETURNING *  `
  );
  res.send(result.rows);
}

async function updateSession(req, res) {
  let ses_id = req.params.id;
  let {
    ses_name,
    img,
    video,
    details,
    evaluation,
    price,
    session_time,
    nu_ssession,
    center_id,
  } = req.body;
  const result = await client.query(`UPDATE Sessions
  SET ses_name = '${ses_name}' , img = '${img}',video = '${video}' , details = '${details}',evaluation = '${evaluation}' , session_time = '${session_time}',center_id = '${center_id}',nu_ssession = '${nu_ssession}' , price = '${price}'  WHERE ses_id = ${ses_id} RETURNING *`);
  res.send(result.rows);
}

async function deleteSession(req, res) {
  let ses_id = req.params.id;
  const result = await client.query(`DELETE FROM Sessions
  WHERE ses_id = ${ses_id} RETURNING *`);
  res.send(result.rows);
}

module.exports = {
  getSessions,
  addsession,
  updateSession,
  deleteSession,
};
