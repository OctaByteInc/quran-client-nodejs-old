const Fetcher = require("../fetcher");
const EditionModel = require("../models/edition_model");
const ResponseGenerator = require("../responses/reponse-generator");

class Edition {
    static async getAll() {
        const response = await Fetcher.get('/edition/all');
        const model = new ResponseGenerator(response, EditionModel);
        console.log(model);
    }
    static async byId() {
        const response = await Fetcher.get('/edition/edition-1');
        const model = new ResponseGenerator(response, EditionModel);
        console.log(model);
    }
}

module.exports = Edition