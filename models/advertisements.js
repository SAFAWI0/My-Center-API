const client = require("../db/index");

async function getAdvertisements(req, res) {
  const result = await client.query(`SELECT * FROM advertisements`);
  res.send(result.rows);
}

async function addAdvertisements(req, res) {
  let { img, video,ses_id } = req.body;
  const result = await client.query(
    `INSERT INTO advertisements (img,video,ses_id) VALUES ('${img}','${video}','${ses_id}') RETURNING *`
  );
  res.send(result.rows);
}


async function updateAdvertisements(req, res) {
  let ad_id = req.params.id;
  let {  img, video,ses_id } = req.body;
  const result = await client.query(`UPDATE advertisements
  SET img = '${img}' , video = '${video}', ses_id = '${ses_id}' WHERE ad_id = ${ad_id} RETURNING *`);
  res.send(result.rows);
}



async function deleteAdvertisements(req, res) {
  let ad_id = req.params.id;
  const result = await client.query(`DELETE FROM advertisements
  WHERE ad_id = ${ad_id} RETURNING *`);
  res.send(result.rows);
}

module.exports = {
  getAdvertisements,
  addAdvertisements,
  updateAdvertisements,
  deleteAdvertisements,
};
