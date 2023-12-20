const sequenceControler = require('../controllers/sequenceControler')
module.exports = (app) => {
    app.post('/sequence', sequenceControler.post)
    app.put('/sequence', sequenceControler.put);
    app.delete('/sequence', sequenceControler.delete);
    app.get('/sequence', sequenceControler.get);
    app.get('/sequence/:id', sequenceControler.getById);
}