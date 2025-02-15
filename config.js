const CONFIG = {
    valentineName: "Deartha",
    
    pageTitle: "Will You Be My Valentine? 💝",

 
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  
        bears: ['🧸', '🐻']
    },

   
    questions: {
        first: {
            text: "Do you like me?",                                   
            yesBtn: "Yes",                                             
            noBtn: "No",                                              
            secretAnswer: "I don't like you, I love you! ❤️"           
        },
        second: {
            text: "How much do you love me?",                        
            startText: "This much!",                                   
            nextBtn: "Next ❤️"                                         
        },
        third: {
            text: "Will you be my Valentine on February 14th, 2025? 🌹", 
            yesBtn: "Yes!",                                             
            noBtn: "No"                                                 
        }
    },


    loveMessages: {
        extreme: "WOOOOW You love me that much?? 🥰🚀💝",  
        high: "To infinity and beyond! 🚀💝",              
        normal: "And beyond! 🥰"                          
    },

    
    celebration: {
        title: "Yay! I'm the luckiest person in the world! 🎉💝💖💝💓",
        message: "Now come get your gift, a big warm hug and a huge love! Alay banyak ehehe",
        emojis: "🎁💖🤗💝💋❤️💕"  
    },


    colors: {
        backgroundStart: "#ffafbd",      
        backgroundEnd: "#ffc3a0",        
        buttonBackground: "#ff6b6b",     
        buttonHover: "#ff8787",         
        textColor: "#ff4757"             
    },

   
    animations: {
        floatDuration: "15s",          
        floatDistance: "50px",          
        bounceSpeed: "0.5s",            
        heartExplosionSize: 1.5        
    },


    music: {
        enabled: true,                    
        autoplay: true,                   
        musicUrl: "https://res.cloudinary.com/dqddodoxe/video/upload/v1739558824/One_Direction_-_What_makes_you_beautiful_-_Refrain__-_7E6joOANvVM_r1zq6q.mp3", 
        startText: "🎵 Play Music",        
        stopText: "🔇 Stop Music",        
        volume: 0.5                       
    }
};


window.VALENTINE_CONFIG = CONFIG; 
