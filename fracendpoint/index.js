var express = require("express");
var app = express();
const Fraction = require('fraction.js');
const cors = require('cors')
app.use(cors());
app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.get("/url", (req, res) => {
    console.log(req);
    const f1 = req.query.f1;
    const f2 = req.query.f2;
    const op = req.query.op;
    const result = Calculate(f1,f2,op);
    console.log(result);
    res.send(result);
   });

function Calculate(f1, f2, op) {
    const fraction1 = new Fraction(f1);
    const fraction2 = new Fraction(f2);
    switch (op) {
        case '+':
            return fraction1.add(fraction2).toString(true);
        case '-':
            return fraction1.sub(fraction2).toString(true);
        case '/':
            return fraction1.div(fraction2).toString(true);
        case '*':
            return fraction1.mul(fraction2).toString(true);
        default:
            return fraction1.toString();
    }
}