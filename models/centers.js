const client = require("../db/index");

async function getCenters(req, res) {
  let search = req.query.search || "";
  const result = await client.query(
    `SELECT * FROM centers WHERE center_name ILIKE '%${search}%'`
  );
  res.send(result.rows);
}

async function getCentersById(req, res) {
  let id = req.params.id;
  const result = await client.query(
    `SELECT * FROM centers WHERE center_id =${id}`
  );
  res.send(result.rows);
}

async function getCentersByCat(req, res) {
  let cat = req.query.cat;
  const result = await client.query(
    `SELECT * FROM centers WHERE cat_id = '${cat}' `
  );
  res.send(result.rows);
}

async function addCenters(req, res) {
  let {
    center_name,
    cover_img,
    logo,
    Evaluation,
    work_time,
    details,
    phone,
    lng,
    lat,
    write_website,
    cat_id,
  } = req.body;
  const result = await client.query(
    `INSERT INTO centers (center_name, cover_img,logo ,Evaluation ,work_time,details ,phone ,lng ,lat,write_website,cat_id ) VALUES 
    ('${center_name}','${cover_img}','${logo}','${Evaluation}','${work_time}','${details}','${phone}','${lng}','${lat}','${write_website}','${cat_id}') RETURNING *`
  );
  res.send(result.rows);
}

async function updateCenters(req, res) {
  let center_id = req.params.id;
  let {
    center_name,
    cover_img,
    logo,
    Evaluation,
    work_time,
    details,
    phone,
    lng,
    lat,
    write_website,
    cat_id,
  } = req.body;
  const result = await client.query(`UPDATE centers
  SET center_name = '${center_name}' , cover_img = '${cover_img}',logo = '${logo}', write_website = '${write_website}',cat_id = '${cat_id}' , Evaluation = '${Evaluation}',work_time = '${work_time}' , details = '${details}',lng = '${lng}',phone = '${phone}' , lat = '${lat}'  WHERE center_id = ${center_id} RETURNING *`);
  res.send(result.rows);
}

async function deleteCenters(req, res) {
  let center_id = req.params.id;
  const result = await client.query(`DELETE FROM centers
  WHERE center_id = ${center_id} RETURNING *`);
  res.send(result.rows);
}

module.exports = {
  getCenters,
  getCentersByCat,
  getCentersById,
  addCenters,
  updateCenters,
  deleteCenters,
};
