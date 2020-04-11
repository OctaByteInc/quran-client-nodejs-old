class AyahModel {
  constructor(
    id,
    surah_id,
    number,
    number_in_surah,
    juz,
    manzil,
    ruku,
    hizb_quarter,
    sajda,
    arabic
  ) {
    this.id = id;
    this.surahId = surah_id;
    this.number = number;
    this.numberInSurah = number_in_surah;
    this.juz = juz;
    this.manzil = manzil;
    this.ruku = ruku;
    this.hizbQuarter = hizb_quarter;
    this.sajda = sajda;
    this.arabic = arabic;
  }
}

module.exports = AyahModel;
