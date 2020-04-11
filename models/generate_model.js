class GenerateModel {
    static fromDict(modelCls, dict) {
        const model = new modelCls();
        const modelObjects = Object.keys(modelCls);
        Object.keys(dict).map(key => {
            if(key in modelObjects) {
                model[key] = dict[key];
            }
        });
        return model;
    }
}

module.exports = GenerateModel;