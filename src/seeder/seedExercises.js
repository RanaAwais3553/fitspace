import mongoose from "mongoose";
import Exercise from "../models/exerciseSchema.js";
const seedExercises = async () => {
    const exercises = [
      {
       "name": "Alternating battle rope slams",
       "category": "push",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": ["Shoulders"],
       "level": "bg",
       "equipment": "battle ropes",
       "mets": 6,
       "startingWeight":{
           "lbs":0,
           "kg":0
         }, 
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/794128669/rendition/1080p/file.mp4?loc=external&signature=958abec6d29477f8935ee079a5c4482f44e00c33825aed95bed1837cf1c580ab",
      "rep1":"",
      "rep2":"",
      "rep3":"",
      },
      {
       "name": "Alternating DB bench",
       "category": "push",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": ["Chest"],
       "level": "bg",
       "equipment": "dumbbells",
       "mets": 5,
       "startingWeight":{
         "lbs":10,
         "kg":5
       }, 
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/1020237252/rendition/1080p/file.mp4?loc=external&signature=7d6e47b3f09c5e4fb660d939339675042b788937a96ec66ceb39447c64b3224f",
       "rep1":"15",
      "rep2":"12",
      "rep3":"10",
      },
      {
       "name": "Alternating single arm chest fly",
       "category": "push",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": ["chest"],
       "level": "bg",
       "equipment": "machine",
       "mets": 4,
       "startingWeight":{
         "lbs":10,
         "kg":10
       }, 
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/794126245/rendition/1080p/file.mp4?loc=external&signature=f4bdf26f8e7c0bba3c28a346381e4469c3e482a4a8e7fe678cb8ef9e9c789b38",
       "rep1":"15",
       "rep2":"12",
       "rep3":"10",
      },
      {
       "name": "Alternating SL leg raises",
       "category": "Core",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": ["Abs" , "Hips"],
       "level": "bg",
       "equipment": "None",
       "mets": 5,
       "startingWeight":{
         "lbs":0,
         "kg":0
       }, 
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/764540407/rendition/1080p/file.mp4?loc=external&signature=01aa8cf4f01926007433be943262c0bec3d5cd81debbaff568007ab879e3050b",
       "rep1":"",
       "rep2":"",
       "rep3":"",
      },
      {
       "name": "Alternating toe touches",
       "category": "core",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": ["Abs" , "Hips"],
       "level": "bg",
       "equipment": "None",
       "mets": 5,
       "startingWeight":{
         "lbs":0,
         "kg":0
       }, 
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/768741893/rendition/1080p/file.mp4?loc=external&signature=946aabfa7509bfa2417619dd99f5f6db6b44a6617a60a6634245a5ae08a9576f",
       "rep1":"",
       "rep2":"",
       "rep3":"",
      },
      {
       "name": "band assisted pullups",
       "category": "pull",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": ["Back"],
       "level": "bg",
       "equipment": "Bands",
       "mets": 5,
       "startingWeight":{
         "lbs":0,
         "kg":0
       }, 
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/779466991/rendition/1080p/file.mp4?loc=external&signature=214688031e738db23712feed3d0883d7e6880c5beac89f6d06112f8d9bd90115",
       "rep1":"15",
       "rep2":"12",
       "rep3":"10",
      },
      {
       "name": "Banded Monster Walks",
       "category": "lower body",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": ["Hips"],
       "level": "bg",
       "equipment": "bands",
       "mets": 4,
       "startingWeight":{
         "lbs":0,
         "kg":0
       }, 
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/794125737/rendition/1080p/file.mp4?loc=external&signature=d96c5c8bfa92a664ac387df3e10ed43f1877c53ca193ced2c52b09189680c813",
       "rep1":"",
       "rep2":"",
       "rep3":"",
      },
      {
       "name": "Banded Pull-Aparts",
       "category": "pull",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup":["Shoulders" ,"back"],
       "level": "bg",
       "equipment": "Bands",
       "mets": 6,
       "startingWeight":{
         "lbs":0,
         "kg":0
       }, 
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/770810091/rendition/1080p/file.mp4?loc=external&signature=f56047b32ece17841c8b61b097a320fe0ba9a32f437e19cac26985f2055f784e",
       "rep1":"",
       "rep2":"",
       "rep3":"",
      },
      {
       "name": "Banded Side Steps",
       "category": "lower body",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": ["Hips"],
       "level": "bg",
       "equipment": "bands",
       "mets": 4,
       "startingWeight":{
         "lbs":0,
         "kg":0
       }, 
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/794127473/rendition/1080p/file.mp4?loc=external&signature=31093a86c69b07a928bd83cea13c9b1c2d0086b24bcb177895a4f85a5314b6f4",
       "rep1":"",
       "rep2":"",
       "rep3":"",
      },
      {
       "name": "Banded Wall sits",
       "category": "lower body",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": ["Legs"],
       "level": "bg",
       "equipment": "bands",
       "mets": 6,
       "startingWeight":{
         "lbs":10,
         "kg":10
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/794126156/rendition/1080p/file.mp4?loc=external&signature=1859da40101394a48e1a3cdd3d03654b0ac1b60120fd7fffb2cc87b34cd9c8be",
       "rep1":"",
       "rep2":"",
       "rep3":"",
      },
      {
       "name": "Battle rope inward circles",
       "category": "push",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": ["shoulders"],
       "level": "bg",
       "equipment": "battle ropes",
       "mets": 6,
       "startingWeight":{
         "lbs":0,
         "kg":0
       }, 
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/794127078/rendition/1080p/file.mp4?loc=external&signature=2e6a96b5bbe15e9bcdb4fa2ec4c49228da88b7aefc3e190b506ad9131e456315",
       "rep1":"",
       "rep2":"",
       "rep3":"",
      },
      {
       "name": "Battle rope Outward circles",
       "category": "push",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": ["shoulders"],
       "level": "bg",
       "equipment": "battle ropes",
       "mets": 6,
       "startingWeight":{
         "lbs":0,
         "kg":0
       }, 
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/794127139/rendition/1080p/file.mp4?loc=external&signature=da4c1b1f988b4d406fb3a8e718571b4c9dff3cd82dde61de785b1f406a6ca22c",
       "rep1":"",
       "rep2":"",
       "rep3":"",
      },
      {
       "name": "Battle rope slams together",
       "category": "push",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": ["shoulders"],
       "level": "bg",
       "equipment": "battle ropes",
       "mets": 6,
       "startingWeight":{
         "lbs":0,
         "kg":0
       }, 
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/794128806/rendition/1080p/file.mp4?loc=external&signature=13d65afd5797ac44d12a913953d31bef87aa6654ce30ff8e10598129427a876b",
       "rep1":"",
       "rep2":"",
       "rep3":"",
      },
      {
       "name": "Bent over Row 1-1-2",
       "category": "pull",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": ["Back"],
       "level": "bg",
       "equipment": "dumbbells",
       "mets": 5,
       "startingWeight":{
         "lbs":10,
         "kg":10
       }, 
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/1020231896/rendition/1080p/file.mp4?loc=external&signature=53cd0bc46d1a6bffc84fdac6822a50cefed5b08d9b711c98035ed34e34c2316e",
       "rep1":"15",
       "rep2":"12",
       "rep3":"10",
      },
      {
       "name": "Cable Curl (pause)",
       "category": "pull",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": ["Biceps"],
       "level": "bg",
       "equipment": "cables",
       "mets": 4,
       "startingWeight":{
         "lbs":10,
         "kg":10
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/794129022/rendition/1080p/file.mp4?loc=external&signature=7c0743b8a02abcc8126203e19ab3acd305b938db4b08a1ec9f45ca4f3993c33e",
       "rep1":"15",
       "rep2":"12",
       "rep3":"10",
      },
      {
       "name": "Cable Squats",
       "category": "lower body",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": ["Legs"],
       "level": "bg",
       "equipment": "cables",
       "mets": 6,
       "startingWeight":{
         "lbs":10,
         "kg":10
       }, 
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/794125924/rendition/1080p/file.mp4?loc=external&signature=dc63ff6c3e68d57d03da26af51bef525b11d53685fb7ce41e3621fb0fb70c7f7",
       "rep1":"15",
       "rep2":"12",
       "rep3":"10",
      },
      {
       "name": "Close Grip Floor Press",
       "category": "push",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": ["Chest" , "Triceps"],
       "level": "bg",
       "equipment": "Weighted bar",
       "mets": 5,
       "startingWeight":{
         "lbs":5,
         "kg":5
       }, 
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/770802375/rendition/1080p/file.mp4?loc=external&signature=7bbcb5b3b182e32142f287e0e7955c0e6389f889130c8b1cb04764dc2a26d146",
       "rep1":"15",
       "rep2":"12",
       "rep3":"10",
      },
      {
       "name": "Close Grip Push-ups",
       "category": "push",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": ["Chest" , "Triceps"],
       "level": "bg",
       "equipment": "None",
       "mets": 6,
       "startingWeight":{
         "lbs":0,
         "kg":0
       }, 
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/770801073/rendition/1080p/file.mp4?loc=external&signature=a830c93db7285bc204db1daa6505ce4666e610a2df43fe1a12a93efab9e1ff64",
       "rep1":"15",
       "rep2":"12",
       "rep3":"10",
      },
      {
       "name": "Crossover butterflies",
       "category": "core",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": ["Abs" , "Hips"],
       "level": "bg",
       "equipment": "Dumbbells",
       "mets": 5,
       "startingWeight":{
         "lbs":10,
         "kg":10
       }, 
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/768742538/rendition/1080p/file.mp4?loc=external&signature=23bc1e1f87e9bd31ee10c96b6826a6b050f3ab23fb41044934b1c777dcba9a6d",
       "rep1":"",
       "rep2":"",
       "rep3":"",
      },
      {
       "name": "DB skull crushers",
       "category": "push",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": ["Triceps"],
       "level": "bg",
       "equipment": "Dumbbells",
       "mets": 5,
       "startingWeight":{
         "lbs":5,
         "kg":5
       }, 
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/770802888/rendition/1080p/file.mp4?loc=external&signature=f1f1aab8c9633f49aa79a54b739452e2dabe79c7ab1e64ebc6e2a5c557b0ddcf",
       "rep1":"15",
       "rep2":"12",
       "rep3":"10",
      },
      {
       "name": "Deadbugs",
       "category": "core",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": ["Abs" , "Hips"],
       "level": "bg",
       "equipment": "None",
       "mets": 5,
       "startingWeight":{
         "lbs":0,
         "kg":0
       }, 
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/764541128/rendition/1080p/file.mp4?loc=external&signature=ca2b0a5f1ddd1010827c47797618fe513b51c781396369cc2975f248e3cc98a9",
       "rep1":"",
       "rep2":"",
       "rep3":"",
      },
      {
       "name": "Eccentric DB RDL",
       "category": "lower body",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": ["Legs"],
       "level": "bg",
       "equipment": "Dumbbells",
       "mets": 6,
       "startingWeight":{
         "lbs":10,
         "kg":10
       }, 
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/768745757/rendition/1080p/file.mp4?loc=external&signature=b0fca847e831f3d28e28d2d1670458c12d392adaca90f3523c034f08750c0ebd",
       "rep1":"15",
       "rep2":"12",
       "rep3":"10",
      },
      {
       "name": "Eccentric incline chest fly",
       "category": "push",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": ["Chest"],
       "level": "bg",
       "equipment": "dumbbells",
       "mets": 4,
       "startingWeight":{
         "lbs":10,
         "kg":10
       }, 
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/794126654/rendition/1080p/file.mp4?loc=external&signature=517f262f4e79f2f6e02ecc1c49ec070170937dbcf7b70a1f3d0808adaf895a39",
       "rep1":"15",
       "rep2":"12",
       "rep3":"10",
      },
      {
       "name": "Eccentric leg raises",
       "category": "core",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": ["Abs" , "Hips"],
       "level": "bg",
       "equipment": "None",
       "mets": 5,
       "startingWeight":{
         "lbs":0,
         "kg":0
       }, 
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/768743206/rendition/1080p/file.mp4?loc=external&signature=175990661956cccb542ec828664011dd9ec3251676199ec19c94f1a6c7d49b94",
       "rep1":"",
       "rep2":"",
       "rep3":"",
      },
      {
       "name": "Explosive Push-ups",
       "category": "push",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": ["Chest"],
       "level": "bg",
       "equipment": "None",
       "mets": 8,
       "startingWeight":{
         "lbs":0,
         "kg":0
       }, 
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/771264104/rendition/1080p/file.mp4?loc=external&signature=92710631d329cfb6e1f7fc0e9a8e50c5171c03316c349242eeae9772e6cfd40e",
       "rep1":"15",
       "rep2":"12",
       "rep3":"10",
      },
      {
       "name": "Face pulls (Lat machine)",
       "category": "pull",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": ["Back"],
       "level": "bg",
       "equipment": "Cables",
       "mets": 5,
       "startingWeight":{
         "lbs":10,
         "kg":10
       }, 
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/794128326/rendition/1080p/file.mp4?loc=external&signature=256f61e9802fed98fa2ec8e14e1279a443de2d13a8a9f2f818a5242e6fdcb1e7",
       "rep1":"15",
       "rep2":"12",
       "rep3":"10",
      },
      {
       "name": "Flutter Kicks",
       "category": "core",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": ["Abs"],
       "level": "bg",
       "equipment": "None",
       "mets": 5,
       "startingWeight":{
         "lbs":0,
         "kg":0
       }, 
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/764539843/rendition/1080p/file.mp4?loc=external&signature=71ab2cc609be408965391d466542abdae22fa5cec62bb3b3600b46abae4d1a91",
       "rep1":"",
       "rep2":"",
       "rep3":"",
      },
      {
       "name": "Goblet Squat with pause",
       "category": "lower body",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": ["Legs"],
       "level": "bg",
       "equipment": "Dumbbells",
       "mets": 6,
       "startingWeight":{
         "lbs":10,
         "kg":10
       }, 
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/770802022/rendition/1080p/file.mp4?loc=external&signature=3d7751d2b0021d8bcef47b2da6bcb120237564b588f03c916465d69096cb68a3",
       "rep1":"15",
       "rep2":"12",
       "rep3":"10",
      },
      {
       "name": "Hamstring curl (Pause)",
       "category": "lower body",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": ["Legs", "Hamstrings"],
       "level": "bg",
       "equipment": "machine",
       "mets": 5,
       "startingWeight":{
         "lbs":10,
         "kg":10
       }, 
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/794125483/rendition/1080p/file.mp4?loc=external&signature=57b479b6e778fb01d5b408e328f772a6967bccb4cb0b45d4ce6299a0e41bbd9d",
       "rep1":"15",
       "rep2":"12",
       "rep3":"10",
      },
      {
       "name": "Heel tap swivels",
       "category": "core",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": ["Abs" , "Hips"],
       "level": "bg",
       "equipment": "None",
       "mets": 5,
       "startingWeight":{
         "lbs":0,
         "kg":0
       }, 
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/764542741/rendition/1080p/file.mp4?loc=external&signature=21e39093534393abbc41222643708a19fe5bf2051bf956d06f253d59e9276581",
       "rep1":"",
       "rep2":"",
       "rep3":"",
      },
      {
       "name": "High plank with twist",
       "category": "core",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": ["Abs" , "Hips"],
       "level": "bg",
       "equipment": "None",
       "mets": 5,
       "startingWeight":{
           "lbs":0,
           "kg":0
         }, 
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/764543763/rendition/1080p/file.mp4?loc=external&signature=833980fd41fd1214b8c03d156660cbdc7e800444356d54eec2a6f323356b1dbb",
       "rep1":"",
       "rep2":"",
       "rep3":"",
      },
      {
       "name": "In & Outs",
       "category": "core",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": ["Abs"],
       "level": "bg",
       "equipment": "None",
       "mets": 5,
       "startingWeight":{
           "lbs":0,
           "kg":0
         }, 
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/764540020/rendition/1080p/file.mp4?loc=external&signature=e2613ecf4f89625acaa2814fb74b57a83fd27ed800874d7b310830764a523f8b",
       "rep1":"",
       "rep2":"",
       "rep3":"",
      },
      {
       "name": "Incline treadmill walks",
       "category": "cardio",
       "sets": 1,
       "distanceTime": "60",
       "muscleGroup": ["Lower body"],
       "level": "bg",
       "equipment": "Treadmill",
       "mets": 6,
       "startingWeight":{
           "lbs":0,
           "kg":0
         }, 
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/779402943/rendition/1080p/file.mp4?loc=external&signature=a75f8b0cdde834e13cbcb43241efe56172df9eb50ea8f055692f6f269b84bf92",
       "rep1":"",
       "rep2":"",
       "rep3":"",
      },
      {
       "name": "Isometric Curl hold",
       "category": "pull",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": ["Bicep"],
       "level": "bg",
       "equipment": "Dumbbells",
       "mets": 5,
       "startingWeight":{
         "lbs":5,
         "kg":5
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/770812050/rendition/1080p/file.mp4?loc=external&signature=f141eef2d81e53c3c12ff257c0ee24f927f1c23b5b895fa3852de49cac215894",
       "rep1":"",
       "rep2":"",
       "rep3":"",
      },
      {
       "name": "Isometric push-ups",
       "category": "push",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": ["Chest"],
       "level": "bg",
       "equipment": "None",
       "mets": 8,
       "startingWeight":{
           "lbs":0,
           "kg":0
         }, 
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/770943532/rendition/1080p/file.mp4?loc=external&signature=fcad51e867bc044d9c54f6fa0b1345aac42b40fffb0e15f19940cb3e074a24d7",
       "rep1":"",
       "rep2":"",
       "rep3":"",
      },
      {
       "name": "Lat Pushdowns",
       "category": "pull",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": ["Back"],
       "level": "bg",
       "equipment": "Cables",
       "mets": 5,
       "startingWeight":{
         "lbs":10,
         "kg":10
       }, 
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/794128424/rendition/1080p/file.mp4?loc=external&signature=35810c64465e48f31b53efa444f9123af3e40f440dd6650feb22b43c3ea040ae",
       "rep1":"15",
       "rep2":"12",
       "rep3":"10",
      },
      {
       "name": "Machine abduction (pause)",
       "category": "lower body",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": ["Glutes"],
       "level": "bg",
       "equipment": "machine",
       "mets": 4,
       "startingWeight":{
         "lbs":10,
         "kg":10
       }, 
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/794125827/rendition/1080p/file.mp4?loc=external&signature=8f0c6f9debe8e61cf39326da301fcf65103f9fbf62bfcafd56149db8ec148527",
       "rep1":"15",
       "rep2":"12",
       "rep3":"10",
      },
      {
       "name": "Plate drives",
       "category": "push",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": ["shoulders"],
       "level": "bg",
       "equipment": "weight plate",
       "mets": 4,
       "startingWeight":{
         "lbs":10,
         "kg":10
       }, 
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/794126966/rendition/1080p/file.mp4?loc=external&signature=de5a532c6f041745f7f5157ad492b73e44ec041d4d413de29ee054ed40c43093",
       "rep1":"15",
       "rep2":"12",
       "rep3":"10",
      },
      {
       "name": "Plate Press",
       "category": "push",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": ["Chest"],
       "level": "bg",
       "equipment": "weight plate",
       "mets": 4,
       "startingWeight":{
         "lbs":10,
         "kg":10
       }, 
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/794126823/rendition/1080p/file.mp4?loc=external&signature=0b4266fdc0301d5b3a448b66fd4030b591eeb4742c41af081db8c76510d1ee78",
       "rep1":"15",
       "rep2":"12",
       "rep3":"10",
      },
      {
       "name": "Pulse leg extensions",
       "category": "lower body",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": ["Legs", "Quads"],
       "level": "bg",
       "equipment": "machine",
       "mets": 6,
       "startingWeight":{
         "lbs":10,
         "kg":10
       }, 
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/794123966/rendition/1080p/file.mp4?loc=external&signature=3a1969fe736db5d970fa975c43ed371a44a4737f52cda3be6f345e725b7f7323",
       "rep1":"",
       "rep2":"",
       "rep3":"",
      },
      {
       "name": "Pulse Lunges",
       "category": "lower body",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": ["Legs"],
       "level": "bg",
       "equipment": "Dumbbells",
       "mets": 6,
       "startingWeight":{
         "lbs":10,
         "kg":10
       }, 
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/770801594/rendition/1080p/file.mp4?loc=external&signature=1855a74a05acd2cbcad8aea41efe3b425be0fdbb191990a60ce98afc807b483b",
       "rep1":"",
       "rep2":"",
       "rep3":"",
      },
      {
       "name": "Quadruped plank",
       "category": "core",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": [
         "Abs",
         "Legs"
       ],
       "level": "bg",
       "equipment": "None",
       "mets": 5,
       "startingWeight": {
         "lbs": 0,
         "kg": 0
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/764540154/rendition/1080p/file.mp4?loc=external&signature=13bc1924c0d338e754458aefde7396b19f16a8a6c8c19ec843197193cece77c1",
       "rep1":"",
       "rep2":"",
       "rep3":"",
     },
     {
       "name": "Reverse Curl",
       "category": "pull",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": [
         "Biceps"
       ],
       "level": "bg",
       "equipment": "Weight Bar",
       "mets": 5,
       "startingWeight": {
         "lbs": 10,
         "kg": 10
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/770812780/rendition/1080p/file.mp4?loc=external&signature=3afdf7c03f59ea14abf4740ee442e438c390e31391c094f145c1541596cbe954",
       "rep1":"15",
       "rep2":"12",
       "rep3":"10",
     },
     {
       "name": "Reverse fly (Rep 1 hold 1)",
       "sets": 4,
       "category": "lower body",
       "distanceTime": "60",
       "muscleGroup": [
         "Back"
       ],
       "level": "kids",
       "equipment": "dumbbells",
       "mets": 5,
       "startingWeight": {
         "lbs": 10,
         "kg": 10
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/794127598/rendition/1080p/file.mp4?loc=external&signature=837e5485f7765c9b923edf6e146025134107c07490cec23626d1b50451937b66",
       "rep1":"15",
       "rep2":"12",
       "rep3":"10",
     },
     {
       "name": "Reverse Monster walks",
       "category": "Lower body",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": [
         "Hips"
       ],
       "level": "bg",
       "equipment": "bands",
       "mets": 4,
       "startingWeight": {
         "lbs": 0,
         "kg": 0
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/794125737/rendition/1080p/file.mp4?loc=external&signature=d96c5c8bfa92a664ac387df3e10ed43f1877c53ca193ced2c52b09189680c813",
       "rep1":"",
       "rep2":"",
       "rep3":"",
     },
     {
       "name": "Rower Machine",
       "category": "Cardio",
       "sets": 1,
       "distanceTime": "10 Meters",
       "muscleGroup": [
         "Back"
       ],
       "level": "bg",
       "equipment": "Rower Machine",
       "mets": 6,
       "startingWeight": {
         "lbs": 10,
         "kg": 4.5
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/779402159/rendition/1080p/file.mp4?loc=external&signature=0e0a83f95f4bb976bb3af7f492c0bef0a356d65e6240c12ef046a8d63c2e4d20",
       "rep1":"",
       "rep2":"",
       "rep3":"",
     },
     {
       "name": "Seated Alternating front/side raise",
       "category": "Push",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": [
         "shoulders"
       ],
       "level": "bg",
       "equipment": "dumbbells",
       "mets": 4,
       "startingWeight": {
         "lbs": 10,
         "kg": 10
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/794123604/rendition/1080p/file.mp4?loc=external&signature=211942f3c613486ae73e1a08630514fd985583612466d214193daa1597f81519",
       "rep1":"15",
       "rep2":"12",
       "rep3":"10",
     },
     {
       "name": "Seated pistol squats",
       "category": "Lower body",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": [
         "Legs"
       ],
       "level": "bg",
       "equipment": "chair",
       "mets": 6,
       "startingWeight": {
         "lbs": 0,
         "kg": 0
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/794125580/rendition/1080p/file.mp4?loc=external&signature=ff1459526c4b85e99b749a77a5de98c278f4f1a77dbbd4377e6843cc2d02f5eb",
       "rep1":"15",
       "rep2":"12",
       "rep3":"10",
     },
     {
       "name": "Single arm cable row (Pause)",
       "category": "Pull",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": [
         "Back"
       ],
       "level": "bg",
       "equipment": "Cables",
       "mets": 4,
       "startingWeight": {
         "lbs": 10,
         "kg": 10
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/794128573/rendition/1080p/file.mp4?loc=external&signature=eaf02a68e9748a38316fa227bd0135069731cd328e8cf779e888b029d668d374",
       "rep1":"15",
       "rep2":"12",
       "rep3":"10",
     },
     {
       "name": "Single arm DB row (pause)",
       "category": "Pull",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": [
         "Back"
       ],
       "level": "bg",
       "equipment": "Dumbbells",
       "mets": 6,
       "startingWeight": {
         "lbs": 5,
         "kg": 5
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/770805766/rendition/1080p/file.mp4?loc=external&signature=30f75e296088cd02a2b698dbe23c851b35ae997a814e2dc69b916d7f0d8bbffb",
       "rep1":"15",
       "rep2":"12",
       "rep3":"10",
     },
     {
       "name": "Single leg leg extension (pause)",
       "category": "Lower body",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": [
         "Legs"
       ],
       "level": "bg",
       "equipment": "Machine",
       "mets": 5,
       "startingWeight": {
         "lbs": 10,
         "kg": 10
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/782127284/rendition/1080p/file.mp4?loc=external&signature=9241d381b81126a02a3f743ec89d90bff2b7b4303f749b09a18c81a9bace01bc",
       "rep1":"15",
       "rep2":"12",
       "rep3":"10",
     },
     {
       "name": "Standing Eccentric Tricep Extension",
       "category": "Push",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": [
         "Triceps"
       ],
       "level": "bg",
       "equipment": "Dumbbells",
       "mets": 5,
       "startingWeight": {
         "lbs": 10,
         "kg": 10
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/770800678/rendition/1080p/file.mp4?loc=external&signature=5d052630cda181a5bed36081c75ba9d3deba5ec62a6d68e2183239a6fb2635f2",
       "rep1":"15",
       "rep2":"12",
       "rep3":"10",
     },
   
     {
       "name": "Supermans with pause",
       "category": "Core",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": [
         "Lower back",
         "Shoulders"
       ],
       "level": "bg",
       "equipment": "None",
       "mets": 5,
       "startingWeight": {
         "lbs": 0,
         "kg": 0
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/768744118/rendition/1080p/file.mp4?loc=external&signature=6e0ff756efad1d48175d3ae3e7001c404b153e3b23614777b65831efe5f9b917",
       "rep1":"",
       "rep2":"",
       "rep3":"",
     },
     {
       "name": "Pulse curls",
       "category": "Pull",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": [
         "Biceps"
       ],
       "level": "adv",
       "equipment": " Dumbbells",
       "mets": 6,
       "startingWeight": {
         "lbs": 10,
         "kg": 10
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/779401314/rendition/1080p/file.mp4?loc=external&signature=c1676030f3253fab4deac34f28e6c94cb1f3b6216c6526e4f4f341e23dde16ed",
       "rep1":"",
       "rep2":"",
       "rep3":"",
     },
     {
       "name": "Single leg leg press",
       "category": "Lower body",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": [
         "Legs"
       ],
       "level": "adv",
       "equipment": " Leg press machine",
       "mets": 4,
       "startingWeight": {
         "lbs": 10,
         "kg": 10
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/779400193/rendition/1080p/file.mp4?loc=external&signature=38e0c79c7a00264b9280c471b285e79c58f3dc78260764c8da4f89030f0be233",
       "rep1":"12",
       "rep2":"10",
       "rep3":"8",
     },
     {
       "name": "Single arm eccentric tricep extension",
       "category": "Push",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": [
         "Triceps"
       ],
       "level": "adv",
       "equipment": " Cable machine",
       "mets": 4,
       "startingWeight": {
         "lbs": 10,
         "kg": 10
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/779399826/rendition/1080p/file.mp4?loc=external&signature=d02137cfba386714a8ddacf466f2e61033aded7f63fa7302746cb0abe50a2acc",
       "rep1":"12",
       "rep2":"10",
       "rep3":"8",
     },
     {
       "name": "Physioball High planks",
       "category": "Core",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": [
         "Abs",
         "Shoulders"
       ],
       "level": "adv",
       "equipment": " Physio ball",
       "mets": 4,
       "startingWeight": {
         "lbs": 10,
         "kg": 4.5
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/771274983/rendition/1080p/file.mp4?loc=external&signature=fe56180b5fe88c61d1671159738f7de81e035da196e9f9ec6a6cc0ca465b30b9",
       "rep1":"",
       "rep2":"",
       "rep3":"",
     },
     {
       "name": "Leg raise + Adduction",
       "category": "Core",
       "sets": 4,
       "distanceTime": "75",
       "muscleGroup": [
         "Abs"
       ],
       "level": "adv",
       "equipment": " Physio ball",
       "mets": 4,
       "startingWeight": {
         "lbs": 10,
         "kg": 4.5
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/771274505/rendition/1080p/file.mp4?loc=external&signature=3c7e000fe75f76bdcad6d0d058d1193c5c85be5e5c000528770c489c5b1d5b97",
       "rep1":"",
       "rep2":"",
       "rep3":"",
     },
     {
       "name": "OH walk + Carry",
       "category": "Push",
       "sets": 4,
       "distanceTime": "45",
       "muscleGroup": [
         "Shoulders",
         "Forearms",
         "abs"
       ],
       "level": "adv",
       "equipment": " Dumbbells",
       "mets": 5,
       "startingWeight": {
         "lbs": 25,
         "kg": 25
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/771274097/rendition/1080p/file.mp4?loc=external&signature=0349d946b3cf90b5f5b9f6beb51c26da63a7f8ead2da29b2f445e86539377d2a",
       "rep1":"",
       "rep2":"",
       "rep3":"",
     },
     {
       "name": "Hanging DB Side raise walks",
       "category": "Push",
       "sets": 4,
       "distanceTime": "45",
       "muscleGroup": [
         "Shoulders"
       ],
       "level": "adv",
       "equipment": " Dumbbells & bands",
       "mets": 5,
       "startingWeight": {
         "lbs": 5,
         "kg": 5
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/771273300/rendition/1080p/file.mp4?loc=external&signature=752b4b46dbe94c5e22241a350e0522b5ed41c9c096f7944789952681e69ba49d",
       "rep1":"",
       "rep2":"",
       "rep3":"",
     },
     {
       "name": "I, Y, Ts",
       "category": "Pull",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": [
         "Back",
         "Shoulders"
       ],
       "level": "adv",
       "equipment": " Dumbbells",
       "mets": 5,
       "startingWeight": {
         "lbs": 5,
         "kg": 2.25
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/771272875/rendition/1080p/file.mp4?loc=external&signature=16a025af843dfe7458dbaeb558f0fb57b2b19703885747e8b74d19a5b364d9c0",
       "rep1":"12",
       "rep2":"10",
       "rep3":"8",
     },
     {
       "name": "Banded DB shoulder press",
       "category": "Push",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": [
         "Shoulders"
       ],
       "level": "adv",
       "equipment": " Dumbbells & bands",
       "mets": 5,
       "startingWeight": {
         "lbs": 10,
         "kg": 5
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/771265530/rendition/1080p/file.mp4?loc=external&signature=395a22099378ee418ecb024fe52a53d7cc492ce807bfbf2f208106b6ea482f8a",
       "rep1":"12",
       "rep2":"10",
       "rep3":"8",
     },
   
     {
       "name": "Hanging band javelin farmer carry",
       "category": "Core",
       "sets": 4,
       "distanceTime": "75",
       "muscleGroup": [
         "Forearms",
         "Back"
       ],
       "level": "adv",
       "equipment": " Barbell & Bands",
       "mets": 6,
       "startingWeight": {
         "lbs": 0,
         "kg": 0
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/779467188/rendition/1080p/file.mp4?loc=external&signature=653ee50f79cf0e9e207894f40a09b5d3a472d1b5f1747a78288125f229143694",
       "rep1":"",
       "rep2":"",
       "rep3":"",
     },
     {
       "name": "Single Side Loaded Lungs",
       "category": "Lower body",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": [
         "Legs"
       ],
       "level": "adv",
       "equipment": " Barbell",
       "mets": 6,
       "startingWeight": {
         "lbs": 5,
         "kg": 5
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/779467365/rendition/1080p/file.mp4?loc=external&signature=1d97f18ba8f43e8999b2c8fcdb0253277e2537286a17d86857a4df170f213ebb",
       "rep1":"12",
       "rep2":"10",
       "rep3":"8",
     },
     {
       "name": "Incline overhead walks",
       "category": "Cardio",
       "sets": 1,
       "distanceTime": "600",
       "muscleGroup": [
         "Lower body"
       ],
       "level": "adv",
       "equipment": " Treadmill optional: med ball",
       "mets": 6,
       "startingWeight": {
         "lbs": 0,
         "kg": 0
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/782126760/rendition/1080p/file.mp4?loc=external&signature=6cae9e1b66efb898c467263faf66d1f0d3441eec7086b5802bdfd02c91724a9c",
       "rep1":"",
       "rep2":"",
       "rep3":"",
     },
     {
       "name": "Eccentric leg extension",
       "category": "Lower body",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": [
         "Legs",
         "Quads"
       ],
       "level": "adv",
       "equipment": " leg extension machine",
       "mets": 4,
       "startingWeight": {
         "lbs": 10,
         "kg": 10
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/782127159/rendition/1080p/file.mp4?loc=external&signature=571ad947d5a146616f65a5a7c1d0a6c96b003a8d954fce717caba27d3cb86059",
       "rep1":"12",
       "rep2":"10",
       "rep3":"8",
     },
     {
       "name": "Eccentric single leg extensions",
       "category": "Lower body",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": [
         "Legs",
         "Quads"
       ],
       "level": "adv",
       "equipment": " leg extension machine",
       "mets": 4,
       "startingWeight": {
         "lbs": 10,
         "kg": 10
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/782127432/rendition/1080p/file.mp4?loc=external&signature=dbb8f56462728077da4d42c34bf0157d371011a0b54e92bb4bb1c0c251264335",
       "rep1":"12",
       "rep2":"10",
       "rep3":"8",
     },
     {
       "name": "Incline lateral shuffles",
       "category": "Cardio",
       "sets": 1,
       "distanceTime": "600",
       "muscleGroup": [
         "Lower body"
       ],
       "level": "adv",
       "equipment": " Treadmill optional: med ball",
       "mets": 6,
       "startingWeight": {
         "lbs": 0,
         "kg": 2.25
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/782127043/rendition/1080p/file.mp4?loc=external&signature=380b6e75441058a71aacd5eb159ae3d4a781424d4dc0d78f2602e92e06f62415",
       "rep1":"",
       "rep2":"",
       "rep3":"",
     },
     {
       "name": "Incline backpedals",
       "category": "Cardio",
       "sets": 1,
       "distanceTime": "600",
       "muscleGroup": [
         "Lower body"
       ],
       "level": "adv",
       "equipment": " Treadmill optional: med ball",
       "mets": 6,
       "startingWeight": {
         "lbs": 10,
         "kg": 4.5
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/782126898/rendition/1080p/file.mp4?loc=external&signature=73dae6f0c365e9ae0c5ffb818c129f55b7a9234f25dd0f0d7463017d7a5e10a6",
       "rep1":"",
       "rep2":"",
       "rep3":"",
     },
     {
       "name": "one sided bench press",
       "category": "Push",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": [
         "Chest"
       ],
       "level": "adv",
       "equipment": "Barbell",
       "mets": 6,
       "startingWeight": {
         "lbs": 5,
         "kg": 5
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/779466730/rendition/1080p/file.mp4?loc=external&signature=a3ee5db3131f1e39b954b3149309941b64fbb5a22f5bcba9a04e08251e391ddc",
       "rep1":"12",
       "rep2":"10",
       "rep3":"8",
     },
     {
       "name": "Cable tricep Ext (Pause)",
       "category": "Push",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": [
         "Triceps"
       ],
       "level": "adv",
       "equipment": "Cable machine",
       "mets": 6,
       "startingWeight": {
         "lbs": 5,
         "kg": 5
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/779466347/rendition/1080p/file.mp4?loc=external&signature=e4eb331b6486f1f29148ff7e30690256dbf8b66465429f4ca3e0c044e7b5c56f",
       "rep1":"12",
       "rep2":"10",
       "rep3":"8",
     },
     {
       "name": "Eccentric Pull-ups",
       "category": "Pull",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": [
         "Back"
       ],
       "level": "adv",
       "equipment": "Pullup bar",
       "mets": 6,
       "startingWeight": {
         "lbs": 0,
         "kg": 0
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/779465410/rendition/1080p/file.mp4?loc=external&signature=02cac965af395428d33cbc68d8f9cef2b6f1db2e9e499db6afb60948a0f88029",
       "rep1":"12",
       "rep2":"10",
       "rep3":"8",
     },
     {
       "name": "Single arm cable row (twist)",
       "category": "Pull",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": [
         "Back"
       ],
       "level": "adv",
       "equipment": "Cable machine",
       "mets": 6,
       "startingWeight": {
         "lbs": 10,
         "kg": 10
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/779465751/rendition/1080p/file.mp4?loc=external&signature=a08f5fc911184970d6c69268aa8ac4a044ac03da6e4095db2f821323da937233",
       "rep1":"12",
       "rep2":"10",
       "rep3":"8",
     },
     {
       "name": "Single arm javalin carries",
       "category": "Core",
       "sets": 4,
       "distanceTime": "75",
       "muscleGroup": [
         "Forearms",
         "Back"
       ],
       "level": "adv",
       "equipment": "Barbell",
       "mets": 6,
       "startingWeight": {
         "lbs": 0,
         "kg": 0
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/779466138/rendition/1080p/file.mp4?loc=external&signature=337a80d783c6f2045246f2282bbb46926adebf9b81954acc8b37f42d18b84cd2",
       "rep1":"",
       "rep2":"",
       "rep3":"",
     },
     {
       "name": "incline treadmill walks",
       "category": "Cardio",
       "sets": 1,
       "distanceTime": "600",
       "muscleGroup": [
         "Lower body"
       ],
       "level": "adv",
       "equipment": "Treadmill",
       "mets": 6,
       "startingWeight": {
         "lbs": 0,
         "kg": 0
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/779402943/rendition/1080p/file.mp4?loc=external&signature=a75f8b0cdde834e13cbcb43241efe56172df9eb50ea8f055692f6f269b84bf92",
       "rep1":"",
       "rep2":"",
       "rep3":"",
     },
     {
       "name": "Single leg iso calf raise + calf raise",
       "category": "Lower body",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": [
         "Legs"
       ],
       "level": "adv",
       "equipment": "Leg press machine",
       "mets": 4,
       "startingWeight": {
         "lbs": 10,
         "kg": 10
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/779401961/rendition/1080p/file.mp4?loc=external&signature=c8686ea09a87c8890c4667c5811d2049c1c8bd168f94492da4481a3d3ea8efce",
       "rep1":"12",
       "rep2":"10",
       "rep3":"8",
     },
     {
       "name": "Rower machine",
       "category": "Cardio",
       "sets": 1,
       "distanceTime": "2000 M",
       "muscleGroup": [
         "Back"
       ],
       "level": "adv",
       "equipment": "Rower machine",
       "mets": 6,
       "startingWeight": {
         "lbs": 25,
         "kg": 12
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/779402159/rendition/1080p/file.mp4?loc=external&signature=0e0a83f95f4bb976bb3af7f492c0bef0a356d65e6240c12ef046a8d63c2e4d20",
       "rep1":"",
       "rep2":"",
       "rep3":"",
     },
     {
       "name": "Eccentric lat pulldowns",
       "category": "Pull",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": [
         "Back"
       ],
       "level": "adv",
       "equipment": "Cable machine",
       "mets": 6,
       "startingWeight": {
         "lbs": 15,
         "kg": 15
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/779402647/rendition/1080p/file.mp4?loc=external&signature=02a8245de1f62a8c8d833944192005accd846ee8549bb8270e9b70ce71daff6e",
       "rep1":"12",
       "rep2":"10",
       "rep3":"8",
     },
     {
       "name": "Single arm DB bench",
       "category": "push",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": [
         "Chest"
       ],
       "level": "adv",
       "equipment": "Dumbbells",
       "mets": 5,
       "startingWeight": {
         "lbs": 5,
         "kg": 5
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/770943290/rendition/1080p/file.mp4?loc=external&signature=5f6b1d9dba406ce3e2aafa35fb62953238a0932ae6c59d6ea409a3ff62ebb11e",
       "rep1":"12",
       "rep2":"10",
       "rep3":"8",
     },
     {
       "name": "Single leg hamstring curls w/ pause",
       "category": "Lower body",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": [
         "Legs",
         "Hamstrings"
       ],
       "level": "adv",
       "equipment": "Hamstring curl machine",
       "mets": 4,
       "startingWeight": {
         "lbs": 10,
         "kg": 10
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/779401578/rendition/1080p/file.mp4?loc=external&signature=08685e852223e4b51f3a60f466b9782e4867b45c49d43b623323c985a60dbabd",
       "rep1":"12",
       "rep2":"10",
       "rep3":"8",
     },
     {
       "name": "Isometric calf raise + calf raise",
       "category": "Lower body",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": [
         "Legs"
       ],
       "level": "adv",
       "equipment": "Leg press machine",
       "mets": 4,
       "startingWeight": {
         "lbs": 10,
         "kg": 10
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/779401769/rendition/1080p/file.mp4?loc=external&signature=dadd672b1e4cb999afa9dd22bd3286809693d80ba6481b47ddbdaa95f9aaabe8",
       "rep1":"12",
       "rep2":"10",
       "rep3":"8",
     },
     {
       "name": "eccentric single arm cable curl",
       "category": "pull",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": [
         "Biceps"
       ],
       "level": "adv",
       "equipment": "Cable machine",
       "mets": 6,
       "startingWeight": {
         "lbs": 10,
         "kg": 4.5
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/779466520/rendition/1080p/file.mp4?loc=external&signature=db4e6770b80cbb600779ee68c339892a5463b41cb2963458a86483de46cdc3f9",
       "rep1":"12",
       "rep2":"10",
       "rep3":"8",
     },
     {
       "name": "Kickstand rows",
       "category": "pull",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": [
         "Back"
       ],
       "level": "adv",
       "equipment": "Dumbbells",
       "mets": 5,
       "startingWeight": {
         "lbs": 5,
         "kg": 2.25
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/771264636/rendition/1080p/file.mp4?loc=external&signature=f3e9fb617bde7458a56871b5d9a44b1b5bd98bf5aaffe6eee41ff06f0dee9a81",
       "rep1":"12",
       "rep2":"10",
       "rep3":"8",
     },
     {
       "name": "Banded DB Front raise",
       "category": "Push",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": [
         "Shoulders"
       ],
       "level": "adv",
       "equipment": "Dumbbells/ bands",
       "mets": 5,
       "startingWeight": {
         "lbs": 5,
         "kg": 2.25
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/771265194/rendition/1080p/file.mp4?loc=external&signature=22c7bb9aa33255c14069e0155b86568b884f1c40f6c9a31583b037fd78d55928",
       "rep1":"12",
       "rep2":"10",
       "rep3":"8",
     },
     {
       "name": "Banded OH walks",
       "category": "Push",
       "sets": 4,
       "distanceTime": "45",
       "muscleGroup": [
         "Shoulders"
       ],
       "level": "adv",
       "equipment": "Dumbbells / band",
       "mets": 5,
       "startingWeight": {
         "lbs": 10,
         "kg": 4.5
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/771264817/rendition/1080p/file.mp4?loc=external&signature=489acd244c087bd0685a650d59df8fd6a951434e025f5519ec3dee63dc424d70",
       "rep1":"",
       "rep2":"",
       "rep3":"",
     },
     {
       "name": "Banded Curls",
       "sets": 4,
       "category": "Push",
       "distanceTime": "60",
       "muscleGroup": [
         "Upper body"
       ],
       "level": "kids",
       "Location: Home": "Yes",
       "Location: Beach": "Yes",
       "equipment": "Bands",
       "mets": 3,
       "startingWeight": {
         "lbs": 0,
         "kg": 0
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/791664886/rendition/1080p/file.mp4?loc=external&signature=dc0dccbc5419817d0ed9311149b2c3936196d7df0ded37f5be4d30d074aca6cb",
       "rep1":"20",
       "rep2":"",
       "rep3":"",
     },
     {
       "name": "Single Leg Floor Touches",
       "sets": 4,
       "category": "Lower body",
       "distanceTime": "60",
       "muscleGroup": [
         "Legs"
       ],
       "level": "kids",
       "Location: Home": "Yes",
       "Location: Beach": "Yes",
       "equipment": "none",
       "mets": 3,
       "startingWeight": {
         "lbs": 0,
         "kg": 0
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/791664822/rendition/1080p/file.mp4?loc=external&signature=1de1289bca64dbb28a99eb7c1fa0cfc5b782430102e5f6c09f240e49e17bdc5c",
       "rep1":"20",
       "rep2":"",
       "rep3":"",
     },
     {
       "name": "Single Leg Balance",
       "sets": 4,
       "category": "Lower body",
       "distanceTime": "60",
       "muscleGroup": [
         "Legs"
       ],
       "level": "kids",
       "Location: Home": "Yes",
       "Location: Beach": "Yes",
       "equipment": "none",
       "mets": 3,
       "startingWeight": {
         "lbs": 0,
         "kg": 0
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/791664740/rendition/1080p/file.mp4?loc=external&signature=c245c7010a649a2c27184414448194253f1ee96175a61423ef71fe3468406f66",
       "rep1":"20",
       "rep2":"",
       "rep3":"",
     },
     {
       "name": "Banded Squat + Front raise",
       "sets": 4,
       "category": "core",
       "distanceTime": "60",
       "muscleGroup": [
         "Legs",
         "Upperbody"
       ],
       "level": "kids",
       "Location: Home": "Yes",
       "Location: Beach": "Yes",
       "equipment": "Bands",
       "mets": 3,
       "startingWeight": {
         "lbs": 0,
         "kg": 0
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/791664425/rendition/1080p/file.mp4?loc=external&signature=76cb886346611e817498a3e9a675f5b8a3df9a5fb56442be7773940dcc7dd915",
       "rep1":"20",
       "rep2":"",
       "rep3":"",
     },
     {
       "name": "Banded Side Steps",
       "sets": 4,
       "category": "Lower body",
       "distanceTime": "60",
       "muscleGroup": [
         "Legs"
       ],
       "level": "kids",
       "Location: Home": "Yes",
       "Location: Beach": "Yes",
       "equipment": "bands",
       "mets": 4,
       "startingWeight": {
         "lbs": 0,
         "kg": 0
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/791664427/rendition/1080p/file.mp4?loc=external&signature=9626e0e5bad380aa4d5df34f37b4cb16209e98f94ce978b5d8484cdda28f0cb8",
       "rep1":"20",
       "rep2":"",
       "rep3":"",
     },
     {
       "name": "In Place Lunges",
       "sets": 4,
       "category": "Lower body",
       "distanceTime": "60",
       "muscleGroup": [
         "Legs"
       ],
       "level": "kids",
       "Location: Home": "Yes",
       "Location: Beach": "Yes",
       "equipment": "none",
       "mets": 3,
       "startingWeight": {
         "lbs": 0,
         "kg": 0
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/791664248/rendition/1080p/file.mp4?loc=external&signature=82aac3e65895b7ea3c8dbcd4e5dd06c30d22439194de45f0e846bc1b812c265f",
       "rep1":"20",
       "rep2":"",
       "rep3":"",
     },
     {
       "name": "Seated Squats",
       "sets": 4,
       "category": "Lower body",
       "distanceTime": "60",
       "muscleGroup": [
         "Legs"
       ],
       "level": "kids",
       "Location: Home": "Yes",
       "Location: Beach": "Yes",
       "equipment": "none",
       "mets": 2,
       "startingWeight": {
         "lbs": 0,
         "kg": 0
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/791664148/rendition/1080p/file.mp4?loc=external&signature=67c21022430858c11ee7dc74b9e45ec7177ac758f108ad39f452b44a2014be80",
       "rep1":"20",
       "rep2":"",
       "rep3":"",
     },
     {
       "name": "Low Plank",
       "sets": 4,
       "category": "Cardio",
       "distanceTime": "60",
       "muscleGroup": [
         "Core",
         "Upperbody"
       ],
       "level": "kids",
       "Location: Home": "Yes",
       "Location: Beach": "Yes",
       "equipment": "none",
       "mets": 3,
       "startingWeight": {
         "lbs": 0,
         "kg": 0
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/791664694/rendition/1080p/file.mp4?loc=external&signature=575095a627df8bc4fee870ec2770385425816980783feeb4ee2f328621403957",
       "rep1":"20",
       "rep2":"",
       "rep3":"",
     },
     {
       "name": "Plank Taps",
       "sets": 4,
       "category": "Core",
       "distanceTime": "60",
       "muscleGroup": [
         "Core",
         "Upperbody"
       ],
       "level": "kids",
       "Location: Home": "Yes",
       "Location: Beach": "Yes",
       "equipment": "none",
       "mets": 3,
       "startingWeight": {
         "lbs": 0,
         "kg": 0
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/791664625/rendition/1080p/file.mp4?loc=external&signature=97eb2a56e2fbcd5610c48e8099cb42d3d7bd2757acde97955ef019407128b89a",
       "rep1":"20",
       "rep2":"",
       "rep3":"",
     },
   
     {
       "name": "Banded Pull-aparts",
       "sets": 4,
       "category": "Cardio",
       "distanceTime": "60",
       "muscleGroup": [
         "Upperbody"
       ],
       "level": "kids",
       "Location: Home": "Yes",
       "Location: Beach": "Yes",
       "equipment": "bands",
       "mets": 4,
       "startingWeight": {
         "lbs": 0,
         "kg": 0
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/791664560/rendition/1080p/file.mp4?loc=external&signature=e9bebdbc31d42b68ff769a649e9914bcd6deb5b41a601a1954dabd5d8af998e6",
       "rep1":"20",
       "rep2":"",
       "rep3":"",
     },
     {
       "name": "Banded Hip Flexion",
       "sets": 4,
       "category": "Lower body",
       "distanceTime": "60",
       "muscleGroup": [
         "Legs"
       ],
       "level": "kids",
       "Location: Home": "Yes",
       "Location: Beach": "Yes",
       "equipment": "bands",
       "mets": 3,
       "startingWeight": {
         "lbs": 0,
         "kg": 0
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/791664509/rendition/1080p/file.mp4?loc=external&signature=6f048f1c2f64a5c99d17c532ffdf47dd5dd6b93f5d3dea13286baf5172972a6d",
       "rep1":"20",
       "rep2":"",
       "rep3":"",
     },
     {
       "name": "Battle rope inward circles",
       "category": "push",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": [
         "Shoulders"
       ],
       "level": "adv",
       "equipment": "battle ropes",
       "mets": 6,
       "startingWeight": {
         "lbs": 0,
         "kg": 0
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/794127078/rendition/1080p/file.mp4?loc=external&signature=2e6a96b5bbe15e9bcdb4fa2ec4c49228da88b7aefc3e190b506ad9131e456315",
       "rep1":"",
       "rep2":"",
       "rep3":"",
     },
     {
       "name": "Battle rope Outward circles",
       "category": "push",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": [
         "Shoulders"
       ],
       "level": "adv",
       "equipment": "battle ropes",
       "mets": 6,
       "startingWeight": {
         "lbs": 0,
         "kg": 0
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/794127139/rendition/1080p/file.mp4?loc=external&signature=da4c1b1f988b4d406fb3a8e718571b4c9dff3cd82dde61de785b1f406a6ca22c",
       "rep1":"",
       "rep2":"",
       "rep3":"",
     },
     {
       "name": "Battle rope slams together",
       "category": "push",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": [
         "Shoulders"
       ],
       "level": "adv",
       "equipment": "battle ropes",
       "mets": 6,
       "startingWeight": {
         "lbs": 0,
         "kg": 0
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/794128806/rendition/1080p/file.mp4?loc=external&signature=13d65afd5797ac44d12a913953d31bef87aa6654ce30ff8e10598129427a876b",
       "rep1":"",
       "rep2":"",
       "rep3":"",
     },
     {
       "name": "Alternating battle rope slams",
       "category": "push",
       "sets": 4,
       "distanceTime": "60",
       "muscleGroup": [
         "Shoulders"
       ],
       "level": "adv",
       "equipment": "battle ropes",
       "mets": 6,
       "startingWeight": {
         "lbs": 0,
         "kg": 0
       },
       "videoUrl": "https://player.vimeo.com/progressive_redirect/playback/794128669/rendition/1080p/file.mp4?loc=external&signature=958abec6d29477f8935ee079a5c4482f44e00c33825aed95bed1837cf1c580ab",
       "rep1":"",
       "rep2":"",
       "rep3":"",
     }
     ]
     
  
    try {
      await Exercise.insertMany(exercises);
      console.log('Data successfully seeded!');
    } catch (err) {
      console.error('Seeding error', err);
    } finally {
      mongoose.connection.close();
    }
  };
  export default seedExercises 