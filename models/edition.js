class Edition {
  constructor(id, language, translator, type, format, direction) {
    this.id = id;
    this.language = language;
    this.translator = translator;
    this.type = type;
    this.format = format;
    this.direction = direction;
  }
}

module.exports = Edition;
