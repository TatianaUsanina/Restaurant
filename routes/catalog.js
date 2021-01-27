var express = require('express');
var router = express.Router();

// Требующиеся модули контроллеров.
var table_controller = require('../controllers/tableController');
var table_instance_controller = require('../controllers/tableinstanceController');
var reservation_controller = require('../controllers/reservationController');


// GET catalog home page.
router.get('/', table_controller.index);


///Table///
router.get('/table/create', table_controller.table_create_get);


router.post('/table/create',table_controller.table_create_post);


router.get('/table/:id/delete', table_controller.table_delete_get);


router.post('/table/:id/delete', table_controller.table_delete_post);


router.get('/table/:id/update', table_controller.table_update_get);

router.post('/table/:id/update', table_controller.table_update_post);

router.get('/table/:id', table_controller.table_detail);

router.get('/tables', table_controller.table_list);

///Table Instance///
router.get('/tableinstance/create', table_instance_controller.tableinstance_create_get);

router.post('/tableinstance/create', table_instance_controller.tableinstance_create_post);

router.get('/tableinstance/:id/delete', table_instance_controller.tableinstance_delete_get);

router.post('/tableinstance/:id/delete', table_instance_controller.tableinstance_delete_post);

router.get('/tableinstance/:id/update', table_instance_controller.tableinstance_update_get);


router.post('/tableinstance/:id/update', table_instance_controller.tableinstance_update_post);

router.get('/tableinstance/:id', table_instance_controller.tableinstance_detail);

router.get('/tableinstances', table_instance_controller.tableinstance_list);

///Reservation///
router.get('/reservation/create', reservation_controller.reservation_create_get);

router.post('/reservation/create', reservation_controller.reservation_create_post);

router.get('/reservation/:id/delete', reservation_controller.reservation_delete_get);

router.post('/reservation/:id/delete', reservation_controller.reservation_delete_post);

router.get('/reservation/:id/update', reservation_controller.reservation_update_get);


router.post('/reservation/:id/update', reservation_controller.reservation_update_post);

router.get('/reservation/:id', reservation_controller.reservation_detail);

router.get('/reservations', reservation_controller.reservations_list);


module.exports = router;