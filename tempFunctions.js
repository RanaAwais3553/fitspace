
const testLogger = (text="TEST LOG",payload) => console.log(text,payload)


export { testLogger}

const excercise = [

   {
    "name": "Banded Pull-aparts",
    "sets": 4,
    "category": "Upperbody",
    "distanceTime": "60",
    "muscleGroup": ["Upperbody"],
    "level": "Kids",
    "Location: Home": "Yes",
    "Location: Beach": "Yes",
    "equipment": "bands",
    "mets": 4,
    "startingWeight":{
      "lbs":0,
      "kg":0
    },
    "videoUrl": "https:\/\/player.vimeo.com\/progressive_redirect\/playback\/791664560\/rendition\/1080p\/file.mp4?loc=external&signature=e9bebdbc31d42b68ff769a649e9914bcd6deb5b41a601a1954dabd5d8af998e6"
   },
   {
    "name": "Banded Hip Flexion",
    "sets": 4,
    "category": "Lower body",
    "distanceTime": "60",
    "muscleGroup": ["Legs"],
    "level": "Kids",
    "Location: Home": "Yes",
    "Location: Beach": "Yes",
    "equipment": "bands",
    "mets": 3,
    "startingWeight":{
      "lbs":0,
      "kg":0
    },
    "videoUrl": "https:\/\/player.vimeo.com\/progressive_redirect\/playback\/791664509\/rendition\/1080p\/file.mp4?loc=external&signature=6f048f1c2f64a5c99d17c532ffdf47dd5dd6b93f5d3dea13286baf5172972a6d"
   },
   {
    "name": "Battle rope inward circles",
    "category": "push",
    "sets": 4,
    "distanceTime": "60",
    "muscleGroup":["Shoulders"],
    "level": "Advanced",
    "equipment": "battle ropes",
    "mets": 6,
    "startingWeight":{
        "lbs":0,
        "kg":0
      }, 
    "videoUrl": "https:\/\/player.vimeo.com\/progressive_redirect\/playback\/768743206\/rendition\/1080p\/file.mp4?loc=external&signature=175990661956cccb542ec828664011dd9ec3251676199ec19c94f1a6c7d49b94"
   },
   {
    "name": "Battle rope Outward circles",
    "category": "push",
    "sets": 4,
    "distanceTime": "60",
    "muscleGroup": ["Shoulders"],
    "level": "Advanced",
    "equipment": "battle ropes",
    "mets": 6,
    "startingWeight":{
        "lbs":0,
        "kg":0
      }, 
    "videoUrl": "https:\/\/player.vimeo.com\/progressive_redirect\/playback\/771264104\/rendition\/1080p\/file.mp4?loc=external&signature=92710631d329cfb6e1f7fc0e9a8e50c5171c03316c349242eeae9772e6cfd40e"
   },
   {
    "name": "Battle rope slams together",
    "category": "push",
    "sets": 4,
    "distanceTime": "60",
    "muscleGroup": ["Shoulders"],
    "level": "Advanced",
    "equipment": "battle ropes",
    "mets": 6,
    "startingWeight":{
        "lbs":0,
        "kg":0
      }, 
    "videoUrl": "https:\/\/player.vimeo.com\/progressive_redirect\/playback\/764539843\/rendition\/1080p\/file.mp4?loc=external&signature=71ab2cc609be408965391d466542abdae22fa5cec62bb3b3600b46abae4d1a91"
   },
   {
    "name": "Alternating battle rope slams",
    "category": "push",
    "sets": 4,
    "distanceTime": "60",
    "muscleGroup": ["Shoulders"],
    "level": "Advanced",
    "equipment": "battle ropes",
    "mets": 6,
    "startingWeight":{
        "lbs":0,
        "kg":0
      }, 
    "videoUrl": "https:\/\/player.vimeo.com\/progressive_redirect\/playback\/764540407\/rendition\/1080p\/file.mp4?loc=external&signature=01aa8cf4f01926007433be943262c0bec3d5cd81debbaff568007ab879e3050b"
   }
]
   const cleanUrls = excercise.map(exercise => {
    exercise.videoUrl = exercise.videoUrl.replace(/\\\//g, '/');
    return exercise;
  });
  console.log(JSON.stringify(cleanUrls, null, 2));
let userId = [1,2,3,4,5,6,7,8,9,10];
// const userAvatar = "avatar.svg"
var accessToken = "";

const testObject = {
    testFunction : {damnFunction: function consoleFunction() {console.log("fuck")}},
    surname:"maclachlan"
}


let testArray = [1,2,3,4,5,6,7,8,9,10]

// console.log(typeof array)
// console.log(testObject["user name"])
// console.log(testObject.username)
// testObject.testFunction();
// console.log(testObject)


