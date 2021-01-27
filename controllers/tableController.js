var Table = require('../models/table');
var TableInstance = require('../models/tableinstance');

var async = require('async');

exports.index = function(req, res) {
    async.parallel({
       table_count: function(callback){
           Table.countDocuments({}, callback);
       },
       table_instance_count: function(callback){
           TableInstance.countDocuments({}, callback);
       },
       
    }, function(err, result){
        res.render('index', {titel: 'Restaurant Home', error: err, data: result});
    });
};

//Показать список всех столов
exports.table_list = function(req, res){
    res.send('NOT IMPLEMENTED: Table list');
};

// Показать подробную страницу для данного стола.
exports.table_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Table detail: ' + req.params.id);
};

// Показать форму создания стола по запросу GET.
exports.table_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Table create GET');
};

// Создать стол по запросу POST.
exports.table_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Table create POST');
};

// Показать форму удаления стола по запросу GET.
exports.table_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Table delete GET');
};

// Удалить стол по запросу POST.
exports.table_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Table delete POST');
};

// Показать форму обновления стола по запросу GET.
exports.table_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Table update GET');
};

// Обновить стол по запросу POST.
exports.table_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Table update POST');
};