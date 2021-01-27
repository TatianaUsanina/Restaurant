var Reservation = require('../models/reservation');
var Customer = require('../models/customer');
var TableInstance = require('../models/tableinstance');
const validator = require('express-validator');
var async = require('async');


//Показать список всех броней
exports.reservations_list = function(req, res){
    res.send('NOT IMPLEMENTED: Reservation list');
};

// Показать подробную страницу для данной брони.
exports.reservation_detail = function(req, res, next) {    

           var reservation =  Reservation.findById(req.params.id, function(err, doc){
               if(err) {return next(err)};
               if (doc==null){
                    var err = new Error('Reservation not found');
                    err.status = 404;
                    return next(err);
                } 
                Customer.findById(doc.customer, function(err, cust){
                    if(err) {return next(err)};
                    TableInstance.findById(doc.tableinstance, function(error, table){
                        if(error) {return next(err)};
                        res.render('resrervation_succses', {title: 'Reservation Done!', text: 'Reservation done succsesfully!', date: doc.date, customer: cust, table: table});

                    })

                })
           });
};

// Показать форму создания брони по запросу GET.
exports.reservation_create_get = function(req, res, next) {
    TableInstance.find({}, 'number').exec(function(err, tables){
        if (err) {return next(err);}
        res.render('reservation_form', {title: 'Create Reservation', table_list: tables});
    });
    
};

// Создать бронь по запросу POST.
exports.reservation_create_post = [

    validator.body('name', 'Name required').trim().isLength({min: 1}),
    validator.sanitizeBody('name').escape(),

    validator.body('family_name', 'Family name required').trim().isLength({min: 1}),
    validator.sanitizeBody('family_name').escape(),

    validator.body('table', 'Table number required').trim().isLength({min: 1}),
    validator.sanitizeBody('table').escape(),

    validator.body('phone'),
    validator.sanitizeBody('phone').escape(),

    validator.body('email', 'Email required').trim().isLength({min: 1}),
    validator.sanitizeBody('email').escape(),

    validator.body('date', 'Date required').trim(),
    validator.sanitizeBody('date'),

    (req, res, next) => {
        const errors = validator.validationResult(req);

        Customer.findOne({email: req.body.email}, function(err, customer){
            if (customer == null){
                customer = new Customer({
                    first_name: req.body.name,
                    family_name: req.body.family_name,
                    email: req.body.email,
                    phone: req.body.phone
                });
                customer.save(function(err){
                    if (err) {return next(err);}
                    
                });
            }

            TableInstance.findOne({'number': req.body.table}, function(error, tab){    
                if (error) {return next(error)};     
                if(tab == null) {
                    var err = new Error('Table not found');
                    err.status = 404;
                    return next(err);
                }   
                var reservation = new Reservation({
                    tableinstance: tab,
                    customer: customer,
                    date: req.body.date
                });
        
                reservation.save(function(err){
                    if (err) {return next(err);}
                    res.redirect(reservation.url);
                });            
            });
        });
    }    
];


// Показать форму удаления стола по запросу GET.
exports.reservation_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Reservation delete GET');
};

// Удалить стол по запросу POST.
exports.reservation_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Reservation delete POST');
};

// Показать форму обновления стола по запросу GET.
exports.reservation_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Reservation update GET');
};

// Обновить стол по запросу POST.
exports.reservation_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Reservation update POST');
};