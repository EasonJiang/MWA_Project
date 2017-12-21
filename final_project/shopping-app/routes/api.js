const express = require('express');
const router = express.Router();
const mongoose =  require('mongoose');
const categoryModel = require('../model/products-category.model.js');
const productListModel = require('../model/products-list.model');
const saveSalesModel = require('../model/save-sales.model');
    router.get('/all',(req,res,next) => {
        productListModel.find((err,tasks) => {
            if(err){
                res.send(err);
            }

            res.json(tasks);
        })
    });

     //Save Task

     router.post('/save',(req,res,next) => {
         
        let task = req.body;
        
        // if(!task.name || !task.account){
        //     res.status(400);
        //     res.json({
        //         "error":"Bad Data"
        //     });
        // }else{
            //    model = { "name": "", "email": "", "payment": "", "phone": "", "account": "" };
            const saveSales = new saveSalesModel({
                productId:'1',
                name:task.name,
                email:task.email,
                payment:task.payment,
                phone:task.phone,
                account:task.account,
            });
            // res.send(saveSales);
            saveSales.save((err,task) => {
                if(err){
                    res.send(err);
                }
                res.json(task);
            })
        // }
    });

    //Get all tasks
    router.get('/',(req,res,next) => {
        categoryModel.find((err,tasks) => {
            if(err){
                res.send(err);
            }

            res.json(tasks);
        })
    });
    

    //Get All products what category_id is id
    router.get("/:id",(req,res) => {
        productListModel.find({categoryId:req.params.id},(err,tasks) => {
            if(err){
                res.send(err);
            }

            res.json(tasks);
        })

    });

   
   

    // //delete Single Tasks
    // router.get('/:id',(req,res,next) => {
    //     categoryModel.tasks.remove({_id:mongojs.ObjectId(req.params.id)},(err,tasks) => {
    //         if(err){
    //             res.send(err);
    //         }

    //         res.json(tasks);
    //     })
    // });

    // //Update Single Tasks
    // router.put('/:id',(req,res,next) => {
    //     let task = req.body;
    //     var updTask = {};

        

    //     if(task.isDone){
    //         updTask.isDone =  task.isDone;
    //     }

    //     if(task.title){
    //         updTask.title =  task.title;
    //     }

    //     if(!updTask){
    //         res.status(400);
    //         res.json({
    //             "error":"Bad Data"
    //         });
    //     }else{
    //         categoryModel.tasks.remove({_id:mongojs.ObjectId(req.params.id)},updTask,{},(err,tasks) => {
    //             if(err){
    //                 res.send(err);
    //             }
    
    //             res.json(tasks);
    //         })
    //     }

        
    // });
    module.exports = router; 