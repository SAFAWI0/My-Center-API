const client = require("../db/index");

async function getSessions(req, res) {
  const result = await client.query(`SELECT * FROM Sessions`);
  res.send(result.rows);
}
async function addsession(req, res) {

  let { ses_name,img,video,details,center_id,evaluation, price, session_time, nu_ssession } = req.body;
  try {
    const result =
  await client.query(`insert into Sessions(ses_name,img,video,details,center_id,evaluation, price, session_time, nu_ssession)
    values('${ses_name}','${img}','${video}','${ses_id}','${details}','${center_id}','${evaluation}','${price}','${session_time}','${nu_ssession}')  `);

res.send({
  success: true,
  user: result.rows[0],
});
    
  } catch (error) {
    res.send({
      success: false,
        Error:error,
    });
        
    
  }
  
}

module.exports = {
    getSessions,
    addsession,
};
