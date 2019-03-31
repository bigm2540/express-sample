import express from "express";
const router = express.Router();
/*
Request
* */
let responseObject = {
    msg: "",
    result: ""
}

router.get("/getData", (req, res) => {
    let result = req.query.key1 * req.query.key2;
    res.send({ result: result })
});
// คำนวณสามเหลี่ยม
router.get("/getTriangle", (req, res) => {
    let result = 0.5 * req.query.base * req.query.height;
    res.send({ Area: result })
});
// คำนวณBMI
router.get("/getBMI", (req, res) => {
    let BMI = Number(req.query.weight / ((req.query.height / 100) * (req.query.height / 100))).toFixed(2);
    let msg = "";
    if (BMI < 50) {
        msg = "ผอม";
    } else if (BMI > 50) {
        msg = "อ้วน";
    }
    res.send({
        BMI: BMI,
        Status: msg
    })
});

/*
Request
* */
// if(value) value='',value=null,value=undefined return false  
router.post("/postData", async (req, res) => {
    responseObject={
    msg:"",
    result:""}
    if (!req.body.key) {
        responseObject.msg = "Bad request";
    } else {
        responseObject.msg = "success";
        responseObject.result = req.body.key * 5;
    }
    res.send(responseObject);
});

module.exports = router;
