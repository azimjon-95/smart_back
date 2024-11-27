const Visitors = require('../models/visitorModel');


const visitorsCtrl = {
    mainCount: async (req, res) => {
        try {
            const visit = await Visitors.findOne({ name: "main" });
            const oldCount = visit?.count
            if (visit) {
                visit.count += 1;
                await visit.save();
                res.status(200).send(`${oldCount} ga ${1} qo'shildi va ${oldCount + 1} bo'ldi `);
            } else {
                const newVisit = new Visitors({
                    count: 1,
                    name: "main"
                });
                await newVisit.save().then(() => res.status(201).send(`ma'lumot yaratildi`))

            }
        } catch (error) {
            res.status(404).send(`serverda hato bor`);
        }
    },

    testCount: async (req, res) => {
        try {
            const visit = await Visitors.findOne({ name: "testcount" });
            const oldCount = visit?.count
            if (visit) {
                visit.count += 1;
                await visit.save();
                res.status(200).send(`${oldCount} ga ${1} qo'shildi va ${oldCount + 1} bo'ldi `);
            } else {
                const newVisit = new Visitors({
                    count: 1,
                    name: "testcount"
                });
                await newVisit.save().then(() => res.status(201).send(`ma'lumot yaratildi`))

            }
        } catch (error) {
            res.status(404).send(`serverda hato bor`);
        }
    },
    getCountMain: async (req, res) => {
        try {
            const visit = await Visitors.findOne({ name: "main" });
            res.status(404).send(visit);
        } catch (error) {
            res.status(404).send(`serverda hato bor`);
        }
    }
}

module.exports = visitorsCtrl;    