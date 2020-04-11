class TranslationModel {
  constructor(id, ayah_id, ayah_number, edition_id, text) {
    this.id = id;
    this.ayahId = ayah_id;
    this.ayahNumber = ayah_number;
    this.editionId = edition_id;
    this.text = text;
  }
}

module.exports = TranslationModel;
