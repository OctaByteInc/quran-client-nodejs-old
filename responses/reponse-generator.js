const GenerateModel = require("../models/generate_model");

class ResponseGenerator {
    constructor(res, modelCls){
        this.res = res;
        this.modelCls = modelCls;
        this.numberOfResults = 1;

        if(this.res.code == 200) {
            this.numberOfResults = this.res.data.numberOfResults;

            if(this.numberOfResults == 1) {
                const modelData = this.res.data[this.modelCls.name];
                const model = GenerateModel.fromDict(modelCls, modelData);
                this[this.modelCls.name] = model
            }
        }
    }
}

module.exports = ResponseGenerator;