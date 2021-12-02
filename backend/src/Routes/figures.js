const express = require('express')
const router = express.Router();
const figures = require('../model/figures');

router.get('/', async (req, res) => {
    const { email } = req.body;

    if (!email) return res.status(400).send({ error: ' Houve um erro na busca por produtos' })
    try {
        const figureList = await figures.find({ email: { $regex: email } });

        return res.status(200).send({ figureList });

    } catch (err) {
        console.log(err)
    }
})

router.post('/', async (req, res) => {
    const { nome, serie, preco, altura, url, email } = req.body;

    if (!nome || !serie || !preco || !altura || !url || !email) return res.status(400).send({ error: 'Houve um erro no registro de figure, dados insuficientes' })

    try {

        const figure = await figures.create(req.body);

        return res.status(201).send({ figure });



    } catch (err) {
        return res.status(500).send({ error: err });
    }

})

router.put('/', async (req, res) => {
    const { _id, nome, serie, preco, altura, url } = req.body

    if (!nome || !_id || !serie || !preco || !altura || !url) return res.status(400).send({ error: 'Houve um erro no update, dados insuficientes' })
    const filter = { _id: _id }
    const update = { nome: nome, serie: serie, preco: preco, altura: altura, url: url, serie: serie }
    try {
        let fiture = await figures.findOneAndUpdate(filter, update)

        res.status(204).send({ message: 'Figure atualizada com sucesso' })
    } catch (err) {
        console.log(err)
    }
})

router.put('/movies/:id', function (req, res) {
    Movie.findOneAndUpdate(req.params.id, { title: "the gift4", releaseYear: "2012", director: "stefan", genre: "horror" }, function (err) {
        if (err) {
            return res.send(err);
        }
        console.log({ message: "movie updated" });
    });
});

module.exports = router;