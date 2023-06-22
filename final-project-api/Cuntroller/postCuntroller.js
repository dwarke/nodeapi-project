const con = require('../cunfig/sqlCunnection')

const postinsert = (req, res) => {
    console.log(req.body);
    const { title, auther, date, category, discription } = req.body;
    const avatar = req.file.filename
    let sql = "INSERT INTO `post`(`title`, `auther`, `date`,`category`, `discription`, `avatar`) VALUES ('" + title + "','" + auther + "','" + date + "','" + category + "','" + discription + "','" + avatar + "')";
    con.query(sql, (err) => {
        if (err) {
            console.log(err);
            return false;
        }
        return res.status(200).json({ messege: "Record successfully insert" });
    })
}

const postviewdata = (req,res)=>{
    let sql = "SELECT * FROM `post`";
    con.query(sql, (err, userData) => {
        if (err) {
            console.log(err);
            return false;
        }
        return res.status(200).json({ messege: userData });
    })
}

const postdelet = (req,res)=>{
    console.log(req.query.id);
    const id = req.query.id
    const sql = "DELETE FROM `post` WHERE id = '" + id + "'";
    con.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            return false;
        }
        return res.json({ messege: result })

    });
}

const postupdet = (req,res)=>{
    console.log(req.file.filename);
    const id = req.params.id
    const { title, auther, date, category, discription } = req.body;
    const avatar = req.file.filename

    const sql = "UPDATE `post` SET `title`='"+title+"',`auther`='"+auther+"',`date`='"+date+"',`category`='"+category+"',`discription`='"+discription+"',`avatar`='"+avatar+"' WHERE  `id`='"+id+"'"

    
    con.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            return false;
        }
        return res.json({ mag: result })
    })
}



module.exports = {
    postinsert,postviewdata,postdelet,postupdet
}