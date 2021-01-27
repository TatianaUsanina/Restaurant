var TableInstance = require('../models/tableinstance');

//Показать список всех столов
exports.tableinstance_list = function(req, res, next){
    TableInstance.find({}, 'number location table')
    .populate('table')
    .exec(function(err, list_tables){
        if(err) {return next(err);}
        res.render('tableinstance_list', {title: 'Table List', tableinstance_list: list_tables});
    });
};

// Показать подробную страницу для данного стола.
exports.tableinstance_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: TableInstance detail: ' + req.params.id);
};

// Показать форму создания стола по запросу GET.
exports.tableinstance_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: TableInstance create GET');
};

// Создать стол по запросу POST.
exports.tableinstance_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: TableInstance create POST');
};

// Показать форму удаления стола по запросу GET.
exports.tableinstance_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: TableInstance delete GET');
};

// Удалить стол по запросу POST.
exports.tableinstance_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: TableInstance delete POST');
};

// Показать форму обновления стола по запросу GET.
exports.tableinstance_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: TableInstance update GET');
};

// Обновить стол по запросу POST.
exports.tableinstance_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: TableInstance update POST');
};