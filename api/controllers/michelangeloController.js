exports.index = function(req, res) {

    const stats = {
        ninjutsu: ["Ninjutsu: ", "Mikey is the most agile of all his brothers; his training as a ninja helped to balance and improve this, but his skills in skateboarding and dancing also gives Mikey an edge that will often shock his brothers. Mikey is an extremely good fighter. He's got a great knowledge with ninjutsu, which is why he is a good fighter. He may have the most raw talent of the four, but he does not seem to have the skill or the inclination to develop it."],
        pranks: ["Pranks: ", "He refers to himself as the king of pranks. Since he the most funniest of his brothers and he hasn't shown to be wrong since he was able to show his pranking skills against his brothers like water balloons as he wants to prank them all and he was able to use his prank of water ballon to use against the tank of the truck."],
        teaching: ["Teaching: ", "He has shown Napolean the right way of Ninjutsu correctly as he was shown great success as he may not be the great Ninja turtle for thinking of correctly of logic from his brothers but he proven to teach others to fight well."],
        strength: ["Enhanced Strength: ", "Since regular turtles are able to lift 5x their own body weight, his strength is likewise altered. His ninja training with Master Splinter has helped to improve and condition his strength. He isn't quite as strong as Raph, but he was able to throw barrels over his head against Spiderbite."],
        speed: ["Enhanced Speed: ", "He can run much faster than an athletic human."],
        stealth: ["Stealth: ", "Mikey has the ability to move in the shadows, like his brothers. He is also very stealthy, but does not enjoy when stealth is used on him."],
        weapon: ["Kusarigama: ", "His nunchucks has a built-in switchblade on one of the bars."],
        balance: ["Balance: ", "Mikey's skills as a skateboarder and a ninja give him a great ability with balance."],
        shell: ["Shell: ", "He has the normal ability of a turtle to go into his shell."],
        cooking: ["Cooking Skills: ", "He shows to love to cook for his family even though his brothers don't think his tastes great but to Mikey it does. Leatherhead seems to love his cooking skills. (Probably because he has never eaten anything delicious)"],
        puppetry: ["Shadow Puppet Skills: ", "He able to make different shadows out of his hands very well to be appear realistic of different objects. He used this to decive the Kraang, Fishface, and Rahzar."],
        intelligence: ["Intelligence and Communication: ", "He not the smartest of like his brothers are but he makes it up for knowing comics and naming creatures. As he shown to be excellent naming creatures if their appearance, abilities or powers. Just like any other creature mutated of humanoids able to speak. He also use his comic intelligence to defeat the mutation Squirrels and true genius in Dimension X. He is typically smarter than his brothers believe him to be, for he is capable of creating antidotes and retro-mutagen from random ingredients, though his brothers continue to doubt his intelligence for obvious reasons for example when Mikey sprinkled botched retro-mutagen onto his skin when Donnie had clearly labelled it as being dangerous."],
        stamina: ["Endurance and Stamina: ", "Mikey's ninja training helps with his stamnia, as he is able to withstand attacks and hits from enemies that might otherwise incapacitate a human showing his endurable body. But he shown that true strong opponents he will lose and can become unconscious."],
    };
    const picture = '/images/mikey.jpg';
    const introQuote = "Mikey here. I'm definitely the funnest of all my brothers. I love video games, skateboarding, pranking my brothers and duh, pizza!! Who does NOT like New York City Style Pizza? I mean, THEY'RE THE BEST!!! Speaking of pizza... I'm hungry.";
    const description = "Physically the smallest of the Turtles and the least mature. Mikey is easily distracted and enthusiastic about... well, pretty much everything. He's also extremely creative. He has a thousand ideas, and every now and then, one of them will be brilliant. This combination of creativity and lack of focus gives him a kind of 'flow' that the other Turtles cannot match. He's a social mutant and more than the others, pines to be part of the real world.";
    const randomQuote = sayRandomQuote();
    
    const michelangelo_object = { stats, picture , introQuote, description, randomQuote };

    res.render('turtle', { title: 'Michelangelo', data: michelangelo_object });
    
};

function sayRandomQuote() {
    const quotes = [/*
        "Booyakasha!"
"Cowabunga!"
(Seeing the kitten) "Awww, s' a lil' kitty."
"Michelangelo is on the move! You don't know what to do. I'm here, I'm there. I could be anywhere. How do you stop what you can't even see?" (Leo: Like that?) "Good one, Leo."
"You think you're tough, huh?! Y' think you're tough enough t' stand up to my HOT NUNCHUCK FURY?!"
"I see, well then..AHAHA!" (After the Kraang droid takes away his nunchunk after claiming to have "hot nunchuck fury?!").
"Piz-za? (Trying to pronounce the word Pizza)
"Uh, yuck! You guys won't like it. I'll take the rest!"
"It's like you always say", (Imitating Master Splinter) "The enemy of my enemy, is my bro."
(After unfriending Bradford) "Hahaha! Revenge!"
(Impersonating Spy-Roach) "On one condition." (Raph: "ANYTHING!") "Be good to Michelangelo. Let him read your comics once in awhile."
(As Bradford ties him up) "I thought we were friends! I introduced you to all my toes."
(After a rat bites him) "Oh no, they got the taste for Turtle now!"
"I love it up here!"
"Go for the green!"
"YOU'RE NOT LISTENING TO ME!" *Leo slaps him* "Did you just slap me?!?" (Leo: I was calming you down.) '"Why would that calm me DOWN?!!"
Leo: Raph, you're with me. Mikey, stay with Donnie. Donnie: Why' d I alway gets stuck with Mikey? Mikey: Hey... Leo: I don't want 'im, and I'm in charge. Mikey: Hey... Donnie: Well then, make Raph take Mikey. Raph: Over my dead body. Mikey: Y' know, I'm startin' a think nobody wants t' be with me. Fine! I'll just go on my own. (Mikey smokebombs himself to a closet) Mikey: (chuckles) That's a closet.
"Cool! Can we get tattoos? I'd get one of my face on my face! It'd be like I'm wearin' a mask and the mask is me!! *hard breath*. I just blew your minds, right?"
"Alien robots, huh? Hmmm, where have I heard that before? Oh yeah, I've been sayin' it for HOURS!!!"
"You KNOW I can't be trusted with nice things!!"
(It is suggested that turtles are slow) "That's a hurtful stereotype!"
"I kinda tuned out when he did his whole 'I'm evil' n blah blah blah' thing".
"Whoa! Bangin' entrance, dude!"
"Dude! Your weapon just exploded."
(Raph: What kinda church is that?) (responding) "A really awesome one!"
"Uh....excuse me, Sensei, but um....ninjas never had t' go up against guys in armor. (looks at samurai on tapestry behind Splinter) "I mean...ninjas ALWAYS had t' go up against guys in armor." Raphael: "Nice save."
"Oooh! What's that one do?" (annoying Donnie by pushing buttons repeatedly)
"You just can't admit that you're the R word!....Rong!" (his brothers groan)
"Cleansing breaths!"
"Are you talkin' to your pet turtle?" (Mikey asking Raph when he sees him talking to Spike)
"Are y' sure you're not sayin' Ten-goob? Because I'm hearin' Ten-goob. Anybody else hearin' that?"
"Gardenin'! Boom. Ha Ha! Oh yeah! Mikey put the sprinkles on dat sundae."
"OK. Now the healing can begin."
"Watch it fool!"
(Asked if he can hold his breath) "Like a turtle do!"
"Yeah boooy! Ramen!"
"Leatherhead. Wakey-wakey eggs' n bakey."
"What's taking so long. Donnie knows I have a short atten...Ooh! Gum!"
"Donnie, can I get this on a T-Shirt?"
"What does it do?"
"You poor, poor man." (As Baxter tells about his childhood.)
(Donnie asks if he is humming the Olympics Theme.) "It seemed appropriate."
(Calling Donnie) "DONNIE!!!!! We need help! Raph's been bitten by a giant, poisonous, robotic fish!" Donnie: "That's not possible! If he was bitten then it's venom, not poison." "Interesting. Interesting. GET OVER HERE!!!"
(Playing with Splinter's face) "Michelangelo is awesome. He's the greatest, handsomest, and most butt-kickenest of all of my...(Splinter sends him flying into the wall)...Sons..."
After Raph pukes* "UGH!...Check that! What the...I knew you ate my pizza! You LIAR!"
(In an obvious trap) "Careful guys! This could be a trap."
"Leprechauns aren't real?!"
"You know what's good advice when you're still confused afterwards."
Pretending to be possessed* "Yesss...I finally understand what is so awesome about this egg."
(To his brothers about The Pulverizer) "Dude, We have a stalker!"
"I dunno if we should pound him or buy 'im an ice cream cone..."
(Leo says that they are going to check out the Worldwide Genome Project) "But first, we have to take down the East Side High Panthers. According to that poster they got it comin' "
"I don't wanna live in a world without pizza!"
(When April doesn't get disintegrated) "Maybe it's because she's not made out of pizza."
"Aww, he's so cute!"
"How the heck am I gonna name THIS?!"
"No, let's name him Octo-eyeball-jelly-bug!-Eh, let's just call 'im Justin."
"Ha! Take that Justin!"
(When Spy-roach is hit by a truck) "HOW'S THAT GRILL TASTE!"
"Booyakasha, Shredhead."
"How do you sleep at night?!"
*Screams* "NO! NO! STAY AWAY! STAY AWAY!!!AAAHHH!! RUN AWAY!!!!!!!!!!!AH!!
"Timothy's jacked up!!!"
"Hey look, I'm Leo!" *Impersonates him* "Guys shh, we have be quiet. Ninjas are quiet. Quiet down."
"That dude's straight nasty!"
"Your real name's Pulverizer?"
"Uh excuse me, I'm the sword guy, I make the decisions here!...Uh... what Leo said."
after the first training session with the turtles weapons switched* "That. was, messed up."
(After seeing the caterpillar getting eaten by the wasps) "IT'S EATING HIM! IT'S EATING HIM!" *screams*
*Before the wasps could kill his brothers* "NO! GET AWAY FROM THEM! LEAVE THEM ALONE!"
(Before Leo beats him with a mop) "I'M A HERO!!!!!"
"Yeah it is. Just call me 'Doctor Einstein...'instein."
(Sees the Technodrome) "Holy giant, floating, shippy-ship!"
"Leo! Do the zippy-zappy thing NOW!"
"Turtles were born to fly!"
Can I touch that? (Donnie: Sure, if you want to blow us and the whole lair in pieces) Nah... m' good."
"I think I speak for all of us when I say, ahhh, Ahhh, AHHHHHHHHHHH!"
"Uh dude, I think I need to change my shell..."
"Hey! That comic's in mint...(Raph slaps him with it) near mint condition don't mess it up."
"Okay dudes that was gross, there's April derp on my chucks"
"M' not gonna say this happen in my comic, but this happen in my comic."
*Screams* "WHAT THE?! I'M A MUTANT!"
(After Raph tells him what happened to Spike) "Dude, this is too much to process. I'm. Gonna. *head explodes* (Raph:...) *faints before quickly getting back up* I'M FREAKIN' OOOOOOOOOOOUT!"
"Slash is back. Raph's in trouble." (Donnie: Raph's, ugh, fighting him?) "Not really fighting. More like gettin' stomped into green goo, c'mon!"
"Yeah! You just got Shell Shocked son!"
*whimpering* "Can we go home now? Please?"
(Raph:What is that?) *leans closer* "It's a mushroom! With feet. Aww, s' so cute. *Mushroom Man grabs Mikey's face* AHHHHH...get it off of me! Get it off of me!"
(when Splinter says what time is it) "uh...pizza time?"
dodging Spider Bytez's attack* "Is it me, or is Spider Bytez a lot less Spider Bytez and a lot more Kraang-y?!"
(Mikey is having some ice cream) "So I wonder what got into Master Splint- AAAAAAAHHHHHHH! BRAIN FREEZE! AAAAAAAAAH!!!"
"Don't worry my little friend." (place Ice Cream Kitty in the freezer) "This will keep you from melting." *Meow* "Until I use my scientific genius to figure somethin' out."
(Ice Cream Kitty licks Mikey's nose) *licks off the ice-cream on his nose* "Mmmm, you taste so good, my lil' Ice Cream Kitty." *sighs* *starts licking Ice Cream Kitty and moaning while rubbing his arms* (Leo: Mikey.) *quickly shuts the freezer and turns to look at his brothers, April and Casey that are right behind him* "Uh, I didn't do it! I swear I never touch it! And-" (Raph: What're you babbling about?)
"Smell the cheeeeeeese...*punch* Smell the cheese! *punch* C'mon, smell it!" *punch*
"Ice Cream Kitty! You're my hero!" *licks* "You taste so good."
(Sees 80's selves) "It's us! Why' d we look like dorks?"
"Ha! I know exactly who's behind this!" (Raph: "You better not say squirrels with lasers again!") *whines*
"Um. guys. I think I need to change my shell."(Enemy of my Enemy)
(After Raph sent Casey away) "Not cool, Raph! People have feelings, dude. Real. Squishy. Feelings."
(After seeing what Pizza Face is doing to the zombified people) "Pizza that eats YOU! It's my worst nightmare come true!"
(Raph: *answers his T-Phone* Casey? Casey? Casey, answer me! Something's wrong, Mikey, what're we gonna do?) "I know exactly what to do!" *Raph looks uncertain* We use our phones to triangulate the position of Casey's T-Phone by bouncing the locator signal off the satelite. (Raph: *stares at Mikey in disbelief* That's...actually a good idea. It's like we're in some kind of alternate universe, or something.) "You can also track pizza delivery guys that way. Booyah-kasha."
"Everyone STOP! I know exactly where' a go." (Donnie: "I feel scared.")
"Aw yeah, son! Never underestimate the water balloon arm!"
"Heads up, D. Hot potato!" (Mikey passes the helmet to Donnie.)
(After pizza is shot out of the Shellraiser for a distraction.) "Cannot...resist...the urge!"
"Okay, I got some good news, and I got some bad news." (Leo: "What's the good news?") "There's thousands of Kraang droids in there." (Leo: "I said GOOD news.") "I know." *Traag and Granitor appear* "THAT'S the bad news."
"Don't blame yourself, April. You were just tryin' to help a friend."
(Raph venting his out-of-control anger after The Shredder threw Spinter into a whirlpool) "That's enough Raph, enough! (hugs Raph) It's okay bro, Sensei's a master ninja, he's gonna be just fine. It's gonna be alright......"
(To April) You haven't lost your family, cause we are your family.
"Well it's that or RoboCarp." (Christening Fishface)*/
    ];

    let num = Math.floor(Math.random() * (quotes.length - 0) ) + 0;
    return quotes[num];
}