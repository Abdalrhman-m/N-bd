var config = {
    // The length of each sentence can be arbitrary. You can write ten sentences or twenty sentences.
    // Each sentence should ideally not exceed 15 characters for better display effects.
    texts: [
        "Happy Birthday, Nesreen ❤️🥺",     
        "From the moment we met, I knew you were someone special.",  
        "Your kindness, strength, and unwavering support",
        " mean the world to me.",
        "On your special day",
        "I wish you all the happiness, love, and joy that you deserve",
        "Thank you for being the incredible person you are",
        "and for making my life brighter just by being in it.",
        "you are the best teacher ,doctor and ofcourse the best friend ever 💕",
        "lemme tell you a samll secret 🙈",
        "you are my favorite girl in my all multiverses❤️🥺",
        "With all my love",
        "COCO 🥺👉👈",
    ],
    
    /**
     * Images are optional. If you want to use them, you must follow the format below:
     * "Exact text from above" : "image path, you can put the images in the imgs folder"
     * Example:
     * "Beloved cutie": "./imgs/cutie.jpg"
     *
     * If you don't want an image for a particular text, simply comment it out with two slashes. For example, the image for "Today is your birthday" will not be displayed.
     * Tip: Images are best if they are square or close to square for better visual effect.
     */
    imgs: {
        "Beloved cutie": "./imgs/cutie.png",
        // "Today is your birthday": "./imgs/birthday.jpg",
    },
    
    // Button text descriptions. Below are the default button texts in English, which you can change to your preferred texts.
    desc: {
        turn_on: "😊 دوسي هنا يا نسنوسه",           
        play: "😎🕺💃! نشغل مزيكا بقا و نحتفل",              // Button to play music
        bannar_coming: "يلا نعلق الزينة ؟",     // Button to change colors
        balloons_flying: "Something's missing", // Button to release balloons
        cake_fadein: "Cake?",       // Button to reveal the cake
        light_candle: "Candles?",   // Button to light the candles
        wish_message: "بس كفاية هبل بقا", // Button to show birthday message
        story: "A MESSAGE FOR YOU sweety", // Button to show a special message
    }
};
