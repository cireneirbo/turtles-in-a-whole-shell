exports.index = function(req, res) {

    const stats = {
        weapon: `Sai: He normally uses sai as sharpened fist-held stabbing knives ("sharpened" is specified because sai are usually used for defense rather than offense). However, he does have a large collection of other weapons.`,

    };
    const picture = '/images/raph.jpg';
    const introQuote = `"Name's Raph. If there's a brawl, count me in. Leo loves to plan, but me? I'd rather fight first and ask questions later. If any shellbrains try to mess with me and my brothers, they won't know what hit 'em! Oh yeah, they will... ME! you bad guys heard me! If you guys ever mess with me and my brothers, you'll get it! I know that Leo and I have been fighting a lot but... we're brothers and brothers do fight. But we protect each other and that's what counts most in my life."`;
    const description = `Raphael is the most violent of the four brothers. A straight-up brawler, he has very little patience for things like stealth, hiding in shadows, or keeping his voice down. While he's fiercely loyal to his brothers, he's also often the one giving them a hard time. Raphael is also the one most likely to strike out on his own when he feels slighted or underappreciated. His closest confidante was his pet turtle named Spike. Raphael's temper can get the better of him, causing him to get into situations over his head.`;

    const raphael_object = { stats, picture, introQuote, description };

    res.render('turtle', { title: 'Raphael', data: raphael_object });
    
};
/*
Ninjutsu: Like his brothers, he has a great sense of balance and agility. He can jump farther and higher than a human, as well as move quicker and more easily on narrow surfaces. He is the strongest fighter of the group (this is certainly true when training) Raphael has beaten his brothers including Donatello before in fights, both with and without weapons.

Enhanced Strength: He is the strongest turtle, lifting people over his head. He is also the most violent, and so he can deal harder blows - though this is not a question of strength, more of morals, his brothers would most likely not hit someone as hard as Raphael would. He was able to tackle Slash away from his brother Mikey. His greater strength may be do in part to his ferocious temper.

Enhanced Speed: He and his brothers are very fast. They can easily run faster than most humans, however, April seems to manage it somewhat (this may be due to the turtles running slower for her benefit). Raphael is the fastest of his brothers, and this is probably due to his temper.

Stealth: Like his brothers, he is stealthy, can hide in the shadows, sneak around without being detected, and use hand to hand combat like a real ninja.


Shell: He has the normal ability of a turtle to go into his shell.

Healing Factor: As shown that he took damage from his enemy's and plenty of wounds like his brothers could heal much faster than an average person.

Stamina and Endurance: He is able to take many attacks from his enemy's. Cause of his training and hard-earned blocking and fighting skills.
*/
function randomQuote() {
    const quotes = [
        "It LITERALLY hurts to listen to you sometimes!",
        "Still standing, huh? I'll fix that!",
        "We're not Kung-Fu Frogs, We're Ninja Turtles!",
        "Stick it in your shell!",
        `*Takes a deep breathe* "Like a river over stone."`,
        "You could turn out handsome like me, or you could turn out disgusting and deformed, like Mikey here.",
        "Are you an idiot?! Wait, lemme rephrase that. You're an IDIOT!!",
        "Sometimes it's good to be a turtle...and sometimes it's good to be a short turtle.",
        "I never thought I'd taste anything better than worms and algae but this is AMAZING!",
        "You're not yourself Leo, Let me help ya!",
        "All right! An all you can BEAT buffet!",
        "Leo, do you know what's in wasp eggs...here's a hint, WASPS!",
        "This is how bored I am. Yes Donnie! I do.",
        "I know how they work. You hit 'em until the brainy toy surprise pops out!",
        "Yes! I never liked Mr. Nice-turtle.",
        "DID YOU JUST BITE ME!? YOU BIT ME!",
        "I don't know sensei, it was a disaster, and it's all my fault. I dunno what happened, i just .. froze up. I mean i have no problems with risking my own life, but...... risking my brothers...",
        "WHAT HAVE YOU DONE!?",
        "What about Michelangelo...?",
        "Boy, I sure hope this argument goes on for another four minutes and fifteen seconds!!",
        "I. don't. know. what. that. means!",
        "I just have to destroy Lame-o-nardo here.",
        "Frogs are not lizards and we're not frogs!",
        "SAY IT!!!!",
        "What, are you fighting a guy in slow motion?",
        "Sensei, Mikey made us bring a monster home with us!",
        "Sensei, he was the angriest, nastiest guy you ever met. You should've heard the insults this guy was throwin' at us, they were so.......... INSULTING!",
        "You mean you set 'im free?!?",
        "TCRI? They're behind the Kraang plot?",
        "AAAAAHHHH ROACH, ROACH!!!!!!",
        "It makes things go boom.",
        "Sounds weird when you say it.",
        "WHAT?! Where? Where the heck is he? He's underneath the van! HE'S UNDERNEATH THE VAN!!!!!",
        "HE HAS A SAW?!?!? The cockroach has a SAW!",
        "Really?! You're using me as bait?!",
        "Hey! Nobody hits Mikey except ME!",
        "Donnie? Why are there fingers on my feet?",
        "Important safety tip: Avoid the legs!",
        "This is either gonna be really cool or really painful.... Okay, it was both.",
        "She's Shredder's daughter, his blood. She was never gonna be on our side.",
        "Lets go whack some piñatas.",
        " Where were we? Oh yeah I was turnin' you Fishface into fish sticks.",
        "Aw, sewer-bunnies!",
        "Okay Spike, you'll like this show. It's called 'DOES MIKEY BEND THAT WAY!'",
        "Chew on your leaf if you understand me.",
        "If you tell anyone, I'll beat the green off you! But, you're a really awesome guy.",
        "MIKEY! Don't scare me like that buddy, I thought we lost you!",
        "Would you like the list alphabetically or in descending order of gross-ness?",
        "A Cockroach, WHY DID IT HAVE TO BE A COCKROACH!?",
        "Oh, Sorry Leo it was Spike's idea. He said 'Space Heroes' is too stupid for him.",
        "I'm coming Mikey. No six foot tall cockroach is gonna eat my brother!",
        "Hey! The Stealth cycle's my thing!",
        "Donnie, we're letting you keep him, but you gotta keep him in your lab so I don't have to look at it.",
        "Why does he make that sound like it's a bad thing?",
        "So what if Shredder's building an army of mutants. They're still no match for my sais! High three!",
        "Sensei, we don't get it. How does switching weapons help us in a fight.",
        "I guess that guy lost a lotta wars.",
        "OW! Look compassion is great, but the purple dragons are never gonna leave Murakami alone.",
        "Was that suppose to sound tough? or stupid?",
        "Why do I ask these questions!",
        "I was droppin' the foots like flies with my sais.",
        "But...that's...smart.",
        "Whoa...are you okay? Unmotivated bursts of anger's kinda my thing.",
        "In your face gravity!",
        "Leo! You Dork! You scared the heck out of us!",
        "All that mutagen? You two are the biggest screw-ups ever!",
        "Well, our friend's gone. But... We still have plenty of crazy...",
        "Ugh, I-it's in my guts! I-I can feel it and their munching on that popcorn I ate! IT'S FREAKIN' ME OUT MAN!!!!!",
        "Sweet mother of mutation...",
        "Sorry Slash, my brothers come first. No matter what.",
        "No turtle left behind. That's our rule.",
        "Slash! You see, that's what real friends do. They stand up for each other. I'd rather be like my brothers than you any day.",
        "LEO! Having, (Looks around the room) Tea time?!",
        "Meditate on THIS!",
        "That guy's outta control. Time for a little intervention.",
        "What am I DOING? Maybe I DO have anger issues...",
        "I'm freaking out... I'm freaking out... I'M FREAKING OUT!",
        "C'mom you tin can!",
        "We have to lead them away, and you're awesome at bein' bait!",
        "I know you're a little worried. We never put up a fight like this look. I will make it back just hang in there. I love you man.",
        "Let's bash some bots!",
        "I will pound you Mikey!!!",
        "Is this a rescue or a romantic comedy?",
        "YOU MONSTER!",
        "(To Splinter)Father?"
    ];
}