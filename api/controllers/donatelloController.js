// Import libraries and project files
const { sayRandomQuote } = require('../util/randomQuote');

// export 'turtle.jade' for '/donatello'
exports.index = function(req, res) {

    // Declare the page's content
    const stats = {
        ninjutsu: ["Ninjutsu: ", "Like his brothers, he is a master ninja and is very agile, able to leap over rooftops and avoid attacks from enemies, including gunfire, weapons, and punches and kicks."],
        strength: ["Enhanced Strength: ", "An regular turtle can pull 5x its body weight. He and his brothers have been mutated and have had years of training under a grand master of martial arts, so their strength has been amplified as a result."],
        speed: ["Enhanced Speed: ", "Despite being a turtle, he is not slow. He can run fast enough to avoid laser fire from a Kraang weapon. He can also move things at enhanced speeds too, such as twirling his bo-staff."],
        stealth: ["Stealth: ", "Like his brothers, he is stealthy, can hide in the shadows, sneak around without being detected, and use hand to hand combat."],
        weapon: ["Naginata: ", "His bo-staff has a built switch blade on one end."],
        shell: ["Shell: ", "He has the normal ability of a turtle to get into his shell."],
        healing: ["Healing Factor: ", "He was able to take numerous hits from mutants like Dr. Tyler Rockwell, Dogpound and Slash, seriously injuring himself and was still able to fight. He also was able to fight Shredder but was hurt by him."],
        intelligence: ["Intelligence and Communication: ", "He is incredibly intelligent able to calculate complex equations in his head, create different machines and handle the creation of medicines and other chemical compounds. He enjoys tinkering with items he finds in the junkyards and in the abandoned part of the sewers, which have allowed him to make the Shellraiser, the T-phone and Tpod. Donatello also is a master of strategy and helps Leonardo as a tactician in many of the more involved and complex missions. Touched by his father as human given the power to speak and understand perfectly human English."],
        stamina: ["Stamina and Endurance: ", "Due to his ninjitsu training, he has a great deal of stamina, which allows him to keep up with his training. A good exhibition of his stamina is seen when Donatello is training the Pulverizer. He able to take hits better then Mikey can take, but not as good when compared to Leo and Raph."]

    };
    const picture = '/images/don.jpg';
    const introQuote = "Hey. Donnie here. I'm the brains of this operation. I invent gadgets, weapons and awesome vehicles to keep me and my brothers safe. The only thing I can't figure out is to get our friend April to notice me. Can someone PLEASE help me on how to make April to notice me?!?";
    const description = "Donatello is the team inventor and weaponeer. He creates all their gadgets from the simplest bo-staff to their incredible vehicles. He's utterly brilliant, able to cobble together fantastic stuff from things he's literally scrounged from a trash heap. He's obsessively detail-oriented and often impatient that his brothers can't keep up with him intellectually. But Donnie also happens to be the most reclusive and socially awkward of the Turtles - especially when April is on her way!";
    const quotes = [
        "Give it all ya got.",
        "Booyakasha!",
        "I hate it when he does that.",
        "But we're still chaining 'im up right?",
        "I'm serious sensei!",
        "Holy MACKEREL!",
        "AW sewer apples!",
        "But we're not the ones taking the risk! The Pulverizer is!",
        "Gentlemen and Raphael.",
        "It's beautiful...Scientifically speaking.",
        "Aha! So in order to gain the wisdom we need we have to do the mistake, so we can go!",
        "And...OH! You don't keep your back straight when doing Omote Kote Gyaku! And You're Ugly!",
        "Run!",
        "Greenie? Really? I wonder how many brain cells he put to work on that.",
        "And the fact that he had me BY THE FACE MIKEY!!!",
        "I've been working on something pretty awesome.",
        "I don't know who see is *Karai* but I knowI hate 'er!",
        "When Spy-Roach takes Mikey* IT'S GOT MIKEY!!!!",
        "Tell me again why we're rescuing this guy?",
        "When April calls him* DID YOU HEAR THAT GUYS! MY SWEET SWEET PRINCESS IS ALIVE!!!",
        "He's also the one who likes to grab my face and shake me like a rag doll!!!",
        "Aw come on!",
        "Can we make sudden moves now!?",
        "He's grabbing me by the face again!",
        "Oh so the truth comes out.",
        "Upon Seeing April* She's the most beautiful girl I've ever seen.",
        "Uh...these aren't costumes....we're mutants.",
        "You can't smash this roach, okay. He's special. Reaaaally Speeeciaaal.",
        "That's not funny Raph! There's something out there tryin' a hurt my April! I mean our April...April.",
        "When Raph dubs Mikey and him the A minus Team* That's probably the best we're gonna get out of 'em.",
        "Well it would have worked out great, if SOMEBODY *Mikey* Hadn't hit me in the head with their nunchucks!",
        "You're just jealous that you're out in the cold while I'm here in the lair enjoyin' Mikey's last slice of pizza.",
        "It's like I got a one way ticket to Flavorville!",
        "And I'm not scrawny, I'm svelte.",
        "After Raph's joke* NOT FUNNY!",
        "After Cutting the green wire* It worked! *excited* GUYS! GUYS! MIKEY .....WAS RIGHT ABOUT SOMETHING!",
        "Mikey: I can't believe he's gone. Donnie: Oh don't worry Mikey, uh Leo.. He,he just need some space. You meant the pizza guy didn't you. Mikey: Yeah.",
        "Great, four times in a row! He'll never see that comin'!",
        "Don't worry April, we promise we'll get him back.",
        "He's not growin' them shellbrain, he's holding them captive.",
        "April: Are you hurt? Donnie: Just my pride...and my internal organs.",
        "My flow chart is awesome!",
        "April texted me. April texted me!? Oh this is the best day!",
        "Mikey STOP!",
        "A Mutant Version, then Leo bit Raph and passed the virus on to him.",
        "No it doesn't have a radio!",
        "Gentlemen and Lady, I give you, the T-Phone!",
        "T-Phone, Self-destruct!",
        "PEDAL FASTER!",
        "April, I'm sorry but we can't get there. But don't you worry, you just stay calm, and RUN! RUN FOR YOUR LIFE!",
        "That's it! It's got us! WE'RE GONNA DIE!",
        "Pulverizer got his wish!",
        "I promise Timothy...one day I'll turn you back.",
        "That's right Timothy...it's us. The Turtles.",
        "Sorry to burst your possessed bubble Leo. We may not have the egg, but a sample of your blood should provide a cure.",
        "Whoa, Leo. You're not thinking what I think you're thinking? ...HE'S THINKING IT!!",
        "So...Awesome...I LOVE BEIN' A TURTLE!",
        "Ugh...What hit me? It was like...Raph only, b-bigger and meaner! Angrier but, not quite as ugly...",
        "Mph! Taste like leather and sweat!",
        "It's a Kraang sweet sixteen birthday party. HOW AM I SUPPOSE TO KNOW?!",
        "By Darwins beard...",
        "Who're you calling Stickmaster, Puckhead?!",
        "Gap-tooth? Looked in the mirror lately CAVE-MOUTH?",
        "Nice jumpsuit!",
        "Anybody have any hand sanitizer?",
        "I hate to break up the reunion, but we have big, huge, GIANT PROBLEMS!",
        "YES! I did it! I rule!",
        "Aw you gotta be kidding me!",
        "Why would you eat random pizza you found on a roof anyway?",
        "Woo, king of the mountain, baby!",
        "You shall not pass!",
        "Two kisses in one day... Eat it Casey Jones. EAT IT! Haha! POWCHICAPOWPOW!",
        "Hey, the turtle sub is a fully amphibious strike vehicle, seats six and is turtle powered.",
        "Great, you-you know what this means right?? Now we have TWO RAPHAELS!!!!",
        "No way! It smells like cheese fossils!"
    ];
    const randomQuote = sayRandomQuote(quotes);

    // Create an object to pass as data
    const donatello_object = { stats, picture, introQuote, description, randomQuote };

    // Render page and pass data as variables
    res.render('turtle', { title: 'Donatello', data: donatello_object });
    
};
