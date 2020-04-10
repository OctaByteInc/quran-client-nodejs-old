class Surah {
  constructor(
    id,
    number,
    english_name,
    english_name_translation,
    number_of_ayahs,
    revelation_type
  ) {
    this.id = id;
    this.number = number;
    this.englishName = english_name;
    this.englishNameTranslation = english_name_translation;
    this.numberofAyah = number_of_ayahs;
    this.revelationType = revelation_type;
  }
}

module.exports = Surah;
