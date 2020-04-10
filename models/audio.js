class Audio {
  constructor(id, ayah_id, edition_id, type, audio) {
    this.id = id;
    this.ayahId = ayah_id;
    this.editionId = edition_id;
    this.type = type;
    this.link = audio;
  }
}

module.exports = Audio;
