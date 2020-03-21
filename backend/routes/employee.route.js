const express = require('express');
const app = express();
const employeeRoute = express.Router();

//Employee Model
let Employee = require("../models/Employee");

//Add Employee
employeeRoute.route('/create').post((req,res,next) => {
    Employee.create(req.body,(error,data) => {
        if(error) return next(error)
        else res.json(data);
        })
});

//Get All Employee
employeeRoute.route('/').get((req,res) => {
    Employee.find((error,data) => {
    if(error) return next(error);
    else res.json(data);
})
});

//Get Single Employee
employeeRoute.route('/read/:id').get((req,res) => {
    Employee.findById((error,data)  => {
        if(error) return next(error);
        else return json.parse(data);
    })

});

//Delete Employee
employeeRoute.route('/delete/:id').delete((req,res) => {
    Employee.findOneAndRemove(req.params.id, (error, data) => {
        if (error) return next(error);
        else {
            res.status(200).json({
                msg: data
            })
        }

    })
});

//Update Employee
employeeRoute.route('/update/:id').put((req, res, next) => {
    Employee.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('Data updated successfully')
        }
    })
})

module.exports = employeeRoute;