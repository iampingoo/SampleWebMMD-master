export const MotionObjects = [
    {
        "id" : "loop",
        "motions" : [
            { "name" : "pronamachan",       "vmd" : "./vmd/loop.vmd",               "vmdClip" : null },
            { "name" : "Appearance Miku",   "vmd" : "./vmd/loop.vmd",               "vmdClip" : null },
            { "name" : "tda_miku",          "vmd" : "./vmd/loop.vmd",               "vmdClip" : null },
        ],
        "audio" : null,
        "AudioClip": null,
        "CamVmdClip": false,
    },
    {
        "id": "kositantan",
        "motions" : [
            { "name" : "pronamachan",       "vmd" : "./vmd/kositantan.vmd",         "vmdClip" : null },
            { "name" : "Appearance Miku",   "vmd" : "./vmd/kositantan2.vmd",        "vmdClip" : null },
            { "name" : "tda_miku",          "vmd" : "./vmd/kositantan3.vmd",        "vmdClip" : null },
            { "name" : "camera",            "vmd" : "./vmd/kositantancamera.vmd",   "vmdClip" : null },
            { "name" : "stage",             "vmd" : "./vmd/autoRotation.vmd",       "vmdClip" : null },
        ],
        "audio" : null,
        //"AudioClip": "./audio/kositantan.mp3",
        "AudioClip": null,
        "CamVmdClip": true,
    },
    /*
    {
        "id": "kei_voice_010_2",
        "motions" : [
            { "name" : "pronamachan",       "vmd" : "./vmd/kei_voice_010_2.vmd",     "vmdClip" : null },
            { "name" : "Appearance Miku",   "vmd" : "./vmd/kei_voice_010_2.vmd",    "vmdClip" : null },
            { "name" : "tda_miku",          "vmd" : "./vmd/kei_voice_010_2.vmd",    "vmdClip" : null },
        ],
        "audio" : null,
        "AudioClip": null,
        "CamVmdClip": false,
    },
    */
];
export const performers = [
    { "id" : 1, "name" : "pronamachan",       "pmx" : "./pmx/LatMiku/LatMiku_Normal.pmd",         "mesh" : null },
    { "id" : 2, "name" : "Appearance Miku",   "pmx" : "./pmx/AppearanceMiku/Appearance Miku.pmx", "mesh" : null },
    { "id" : 4, "name" : "camera",                                                                "mesh" : null },
    { "id" : 5, "name" : "stage",             "pmx" : "./pmx/GoldBlackStage/GoldBlackStage.pmx",  "mesh" : null },
    //{ "id" : 3, "name" : "tda_miku",          "pmx" : "./pmx/miku/tda_miku.pmx",                  "mesh" : null },
    { "id" : 3, "name" : "tda_miku",          "pmx" : "./pmx/TumiMiku/Miku.pmx",                  "mesh" : null },
];
export const numLights = 40;
