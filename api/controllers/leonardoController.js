// Import libraries and project files
const { sayRandomQuote } = require('../util/randomquote');

// export 'turtle.jade' for '/leonardo'
exports.index = function(req, res) {

    // Declare the page's content
    const stats = {
        ninjutsu: ["Ninjutsu: ", "He is an extremely skilled martial artist and swordsman. Like his brothers, he is a master ninja and is very agile, able to leap over rooftops and avoid attacks from enemies, including gunfire, weapons, and punches and kicks."],
        strength: ["Enhanced Strength: ", "He is pretty strong when it comes to defense and counter attacks and he is mainly a well balanced ninja. Since an actual turtle can pull 5x its body weight, he and his brothers have been mutated and trained for 15 years as master martial artists by Master Splinter, so their strength has been amplified as a result."],
        speed: ["Enhanced Speed: ", "Despite being a turtle, he is not slow. He can run fast enough to avoid laser fire from a Kraang weapon. He can also move things at enhanced speeds too, like twirling his katana blades."],
        stealth: ["Stealth: ", "Like his brothers, he is stealthy, can hide in the shadows, sneak around without being detected, and use hand to hand combat like a real ninja."],
        weapon: ["Katana: ", "He uses katana blades in a traditional niten-ryu style."],
        shell: ["Shell: ", "He has the normal ability of a turtle to get into his shell."],
        healing: ["Healing Factor: ", "His healing factor seem to work while in water, where he woke up after the villainous fight 3 months later but the fight left him very injured."],
        intelligence: ["Intelligence: ", "He has a good line of defense, and is the best at planning strategies."],
        stamina: ["Stamina and Endurance: ", "He shown off his high stamina in The Invasion, he was able to handle and stay much alive while the long Foot-Bot challenge, he was also able to defeat all of Shredder's henchmen, but all that work worn him out giving Shredder the chance to finish him off."],
        healing: ["Healing Power: ", "He was taught how to use ninjitsu to heal himself and others using a special technique by Splinter. It was effective in removing venom that had no cure."]
    };
    const picture = '/images/leo.jpg';
    const introQuote = "My name's Leo. I've got 3 rowdy brothers who always give me a hard time. But I keep them in line... usually. Master Splinter picked me to lead because I eat, sleep and breath Ninjustu. Not that my brothers aren't good, I'm just better. But nothing can get in my way in protecting my family.";
    const description = "The leader of the Turtles, Leonardo aspires to be a brave, decisive, perfect hero. Unfortunately, he's an inexperienced teen (for the moment at least) with three smart-aleck brothers. It's the gap between his aspiration and current situation that is the greatest source of frustration in Leo's life. He's the most driven of the four Turtles, training and studying relentlessly. He tends to be hard on himself, but his diligence does not go unnoticed; he is the favored student of Splinter, whose approval he very much craves.";
    const quotes = [
        "That's right! We're the Turtles of Justice!",
        "Halt Villain!",
        "Guys! What part of being in an enemy lair d' you not understand?!?",
        "We find that people treat us better when they don't know we exist.",
        "IT IS USELESS TO RESIST!! IT'S ONLY A MATTER OF TIME BEFORE THE EGG BURSTS, AND THE HATCHLING WILL FEED ON US ALLLLLLLLLLL!!!!!!!!!!!!!!!!!!!! ARGH! ",
        "Raphael...think of all we can learn from this egg.",
        "Sensei! Don't!",
        "I'll decide who gets a beat-down....That guy needs a beat-down!",
        "He-He might be on his way t-to....church.",
        "You did save our lives (Mikey) But you also used my favorite comic as TOILET PAPER!",
        "They're aliens from another dimension! What did you expect!? A big round ball with a lit fuse that says BOMB!?!",
        "Ok, so me and Raph against Mikey and Don. Uh, isn't that a little unfair?",
        "Follow the Shinobi code guys. A shinobi must never question a command.",
        "Raphael! What were you thinking!? Donnie and Mikey could've gotten hurt! Why can't you follow simple orders!?",
        "No, only an idiot would... oh boy.",
        "Remember who you are: Hamato Yoshi.",
        "Uh, thanks?" *"Turtles first.",
        "You turned Leatherhead's old subway car into this?",
        "There's a homing signal?!",
        "Something's not right.",
        "You're Shredder's daughter?",
        "OH, COME ON!",
        "This is way to easy.",
        "Would you shh-!? This's the best part!",
        "Really? Y-y' think I'm a-........(adorable)",
        "Having the swords doesn't necessarily means your the leader. Mikey.",
        "Switch weapons!",
        "Seriously, Donnie? A submarine powered by bicycles?",
        "Absolutely NOT! This is the only egg we have...we need to learn how it develops.",
        "Sensei, we know you're trying to protect us, but we can't spend our whole lives hiding down here.",
        "Can i be the leader?",
        "What a hero.",
        "Well what do you wanna do, take him back to the lair? (Puppy eyes) Oh no, Oh NO! Did you see what he did to those Kraangdroids? We are NOT bringing that Monster home with us!",
        "Raph, if you keep breaking your toys, we won't buy you new ones.",
        "Aww, and I just waxed her too." ,
        "Well, we got tired of waiting for you to escape on your own.",
        "Stop hiding behind your Foot-Bots! Face me, Shredder!",
        "Give me back my family, freak!",
        "Get on your feet, Leo. Stop whinin' and get up!",
        "Don't give up hope. Trust me on that.",
        "Well maybe I'm dreaming you, but your not dreaming me."
    ];
    const randomQuote = sayRandomQuote(quotes);

    // Create an object to pass as data
    const leonardo_object = { stats, picture, introQuote, description, randomQuote };

    // Render page and pass data as variables
    res.render('turtle', { title: 'Leonardo', data: leonardo_object });
    
};
