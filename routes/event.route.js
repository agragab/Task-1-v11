const exress = require('express');
const Event = require('../models/event.model.js');
const router = exress.Router();
const eventController = require('../controllers/event.controller.js');

router.get('/', eventController.getAllEvents)
router.get('/upcoming', eventController.getUpcomingEvents)
router.get('/:id', eventController.getEventById)
router.post('/', eventController.createEvent)
router.put('/:id', eventController.updateEventById)
router.delete('/:id', eventController.deleteEventById)


module.exports = router;