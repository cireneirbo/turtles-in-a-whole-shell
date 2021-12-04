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
    
    const michelangelo_object = { stats, picture , introQuote, description };

    res.render('turtle', { title: 'Michelangelo', data: michelangelo_object });
    
};
