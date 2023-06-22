const con = require('../cunfig/sqlCunnection')

const resetinsert = (req,res)=>{
    const { title1, title2 } = req.body
    const avatar = req.file.filename
    let sql = "INSERT INTO `resetcontent`(`title1`, `title2`, `avatar`) VALUES ('" + title1 + "','" + title2 + "','" + avatar + "')";
    con.query(sql, (err) => {
        if (err) {
            console.log(err);
            return false;
        }
        return res.status(200).json({ messege: "Record successfully insert" });
    })
}

const resetviewdata = (req,res)=>{
    let sql = "SELECT * FROM `resetcontent`";
    con.query(sql, (err, userData) => {
        if (err) {
            console.log(err);
            return false;
        }
        return res.status(200).json({ messege: userData });
    })
}

const resetdelet = (req,res)=>{
    console.log(req.query.id);
    const id = req.query.id
    const sql = "DELETE FROM `resetcontent` WHERE id = '" + id + "'";
    con.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            return false;
        }
        return res.json({ messege: result })

    });
}

const resetupdet = (req,res)=>{
    console.log(req.file.filename);
    const id = req.params.id
    const {title1,title2} = req.body
    const img = req.file.filename

    const sql = "UPDATE `resetcontent` SET `title1`='"+title1+"',`title2`='"+title2+"',`avatar`='"+img+"' WHERE `id`='"+id+"'"

    
    con.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            return false;
        }
        return res.json({ mag: result })
    })
}

module.exports = {
    resetinsert,resetviewdata,resetdelet,resetupdet
}