//generate first idea on page load
$('document').ready(function(){generate()});

//generator
  function generate() {
      randomIdea = ideas[Math.floor(Math.random() * ideas.length)];
    document.getElementById('idea').innerHTML = randomIdea;
    };

  //idea list; add more
  var ideas = ["Put 10 comedians in a room; they have to make eachother laugh, last one to laugh wins 1 million",
  "Buy a monkey. Haven't you always wanted a monkey?",
  "Pay two private investigators to follow each other around",
  "Convert millions to pennies and swim in it like Scrooge Mcduck",
  "Build a sex dungeon for use by the community",
  "Buy an island, put sexy naked women on it and live in your own paradise",
  "Start your own research centre and hire top scientists to develop new technologies",
  "Create your own theme park",
  "Build or buy buildings and let people live there for free on the condition that you can record them 24/7",
  "Create a TV Show with prisoners on a island that fight to death",
  "Drop random crates of food and items around Africa",
  "Make death rows criminals fight in a colosseum style battle against all types of hazard, animals and even each other, for a chance to live and repay the society via entertainment",
  "TV show: Every week a group of orphans perform various, random tasks to impress a set of adoptive parents but only one kid gets chosen and the rest come back the following week to try with another set of parents.",
  "Create a game show where two contestants are given a million dollars to make each other's lives hell",
  "Put prisoners serving life sentences on an island and let them set up a society by themselves",
  "Buy a castle and completely destroy it using modern weaponry",
  "Built a large trebuchet and launch animals towards poor villages",
  "Start your own space company so you can be the first to colonize Mars",
  "Become the president of the US",
  "Create a high tech suit like Iron man and become a real life superhero",
  "Hire a female prostitute, tell her to meet you at a fancy restaurant, and ask her to pretend to be your colleague from the bank. Hire a male prostitute, and tell him the same thing. Reserve the table next to theirs and listen to them trying to improvise sexy bank-themed dialogue at each other.",
  "Remove the drinking age: make it so that you have to graduate high school to legally drink, increasing graduation rates all over the country.",
  "Hang the Mona Lisa from the right field bleachers at a baseball stadium. The first player to put a ball through it gets to decide whether karaoke remains legal in the US.",
  "Attach sensors to every car that determine the exact weight of bugs killed while driving. Add up the score at years end and announce the winner on TV. Since bats also kill an impressive amount of bugs, the winner is dubbed Batman and can legally conduct vigilante justice until the next year.",
  "Host your own Olympics where there is no limit to using drugs or body modifications",
  "Start your own charity",
  "Buy a round of drinks for everyone",
  "Buy stuff online and send it to a random address",
  "Give a homeless person 1000 dollars and see what he does with it",
  "Send 1 dollar to 1 million people through mail",
  "Tell poor people money doesn’t matter",
  "Buy Fox News and change the programming to nothing but literal news about foxes",
  "Hire four ripped dudes to carry you around in a palanquin",
  "Design an underwater breathing apparatus for ostriches. Then, strap on a Scuba suit yourself. Ride it into the water close to a private beach where no one can see. Migrate underwater to the busy part of the beach and come storming out of depths on your aqua ostrich.",
  "Keep a stack of bills in your wallet at all times for the sole purpose of paying people to stop talking. Whenever someone says something that annoys you, whip out a crisp new bill, hand it to them, and tell them to shut the fuck up.",
  "Build your own private army",
  "Take over the world",
  "Shoot a car into space",
  "Put up billboards all across the world of you just smiling",
  "Make a commercial where you just show off all your fancy shit",
  "Make it literally rain money and watch the chaos ensue",
  "Buy an ungodly amount of kit kats, fill a backpack with them, and go along public walkways eating them without breaking them apart first",
  "Outbid people at art auctions.",
  "Outbid people at auctions even if you don’t want the item.",
  "Buy a busy international airport like JFK or EWR and declare it a no-fly zone",
  "Buy Super Bowl commercial time and air a video of you eating chicken wings with no explanation","Create a non-profit mercenary army that spends its time overthrowing corrupt, despotic governments in the developing world","Buy out all ISPs and set up State Farm style customer owned corporations to own all of the major connection points for the Internet","Build the tallest statue ever built of yourself holding a giant dildo sword",
  "Buy the Colosseum, renovate it and host gladiator fights using modern weapons and martial arts","Build the greatest survival bunker in case the world ends","Buy nukes, go into space, launch the nukes and watch the world burn","Buy gold pills that turn your shit into gold","Host a competition where you tell all the people in secret that they have to lose on purpose; watch and laugh your ass off","Built giant robots to fight with",
  "Hide 7 Dragonballs all over the world. Whoever finds all 7 gets a wish granted.",
  "Hire a group of attractive males and females to roam individually around the city. Their job is to smile, make eye contact with, and complement strangers in order to increase morale and general mental well being.","Build a retirement home on the moon so the elderly find it easier to move around","Power wash the Statue of Liberty to return it back to its original copper color","Donate 1000 shirts with your face on it to people and charities and see how long it takes to see a person wearing one in public",
  "Hire two hit men to kill each other. Hire the winner and another hitman to kill each other. Repeat until you have found the world's greatest hitman.","Buy McAfee, kill the brand and release a final version that completely uninstalls itself.","Release a bunch of wild gorillas on gorilla steroids into downtown LA wearing Coca-Cola shirts so that people think it's an advertising campaign… until they start smashing everything.","Make a beer called Responsibly and market it with the slogan Drink Responsibly",
  "Give an entire nation free tickets for an all inclusive cruise. While they enjoy cocktails near the Caribbean, completely bulldoze their infrastructure. Rebuild it all 3 feet to the left before they get back. Laugh as a whole country stubs its toes trying to find the toilet in the dark.","Dig a full scale Grand Canyon in Kansas and use the dug up earth to fill in the old Grand Canyon. Pretend like it's always been in Kansas",
  "Secretly send an army of people to Mars, convince people on Earth we found Martians, start a war between Earth and Mars, and win the war thus uniting Earth and elevating humanity.","Create a Reverse-Make-A-Wish Foundation where terminally ill people carry out the wishes of the general public, as their final contribution to society, since they are going to die soon anyway.","Start a fortune cookie company that has really ominous and specific fortunes in the cookies like be sure to duck at 11:43 tomorrow.",
  "Buy me the biggest bottle of Bacardi ↓ ",
  "Have Morgan Freeman speak every word in the English language so we can continue to make documentaries when he dies",
  "Give hamsters steroids and have them fight in cages",
  "Built a bunch of enormous dinosaurs and randomly place them around the world",
  "Carve your name so large into the earth it will be visible from space",
  "Throw paper planes made out of dollar bills",
  "Buy enough gold coins to swim in like Scrooge Mcduck",
  "Build a giant palace and factory on the North Pole; get a fat, old man with a white beard to be the CEO and hire children to work in the factory",
  "Wipe your ass with gold toilet paper while you sit on a golden toilet"];


// css button animation
$(function(){
  $(".fancy-button").mousedown(function(){
    $(this).bind('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function(){
        $(this).removeClass('active');
    })
     $(this).addClass("active");
  });
});


//press spacebar to click button
window.onkeydown = function(event){
    if(event.keyCode === 32) {
        event.preventDefault();
        document.querySelector('.button').click(); //This will trigger a click on the first <a> element.
        $('.fancy-button').bind('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function(){
            $('.fancy-button').removeClass('active');
        })
         $('.fancy-button').addClass("active");
    }
};
