const Edition = require("./api/edition");

Edition.byId();

// const Fetcher = require("./fetcher");

// // console.log(Fetcher);
// // const f = Fetcher()
// // const res = f.get("/edition/all");
// // console.log(res);
// Fetcher.get("/edition/all").then(r => {
//     console.log(r)
// });

// var res = {
//     code: 200,
//     status: 'OK',
//     data: {
//         edition: [
//             {
//                 id: 'editino-1'
//             }
//         ],
//         audio:  {
//             id: 'audio-1'
//         }
//     }
// };

// const name = "edition";
// console.log(res.data[name])
// console.log(res.data["audio"])
// class BaseModel {
//     constructor() {
//         console.log(this.constructor.name)
//     }
//     static fromDict(){
//         console.log(this.constructor.name)
//         console.log(new.target.name)
//     }
// }
// class AudioModel extends BaseModel{
//     constructor(){
//         super();
//         this.number = 0;
//     }

//     setNumber(value) {
//         this["number"] = value;
//     }

//     getNumber(){
//         console.log(this.number);
//     }
// }

//new AudioModel()
//AudioModel.fromDict()
// const audio = new AudioModel()
// audio.number = 7;
// audio.asdad = "asdasda"
// console.log(audio.number)
// console.log(audio.asdad)
// console.log(Object.keys(new AudioModel()))
// const audio = new AudioModel();
// audio.setNumber(5);
// audio.getNumber();

// const audio = new AudioModel();
// console.log(audio.constructor.name);
// console.log(AudioModel.name);
// const EditionModel = require("./models/edition_model");

// var data = {
//   id: "edition-1",
//   language: "en",
//   name: "Edition-Name-1",
//   translator: "Edition-Translator-1",
//   type: "Translation",
//   format: "Format1",
//   direction: "ltr",
// };

// console.log(Object.keys(data))

// console.log("askdsbajd bakj sdk aksd ksad");
// console.log(...data);
//const model = new EditionModel(...data);
//console.log(model);
// console.log('asdsad')

// var arr = [1,2,3,4]

// console.log(9 in arr);