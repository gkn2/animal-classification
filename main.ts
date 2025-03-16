let my_sprite = sprites.create(assets.image`mc`, SpriteKind.Player)
my_sprite.sayText("Think of one of these animals: Dog, Cat, Snake, Pigeon, Parrot, Fish, Piranha, Shark.")
let answer = game.ask("Does it swim?")
if (answer) {
    answer = game.ask("Only survives in water?")
    if (answer) {
        my_sprite.sayText("It's a Fish!")
    } else {
        answer = game.ask("Are people scared of them?")
        if (answer) {
            my_sprite.sayText("It's a Shark!")
        } else {
            my_sprite.sayText("It's a Piranha!")
        }
        
    }
    
} else {
    answer = game.ask("Do they lays nests?")
    if (answer) {
        answer = game.ask("Does it have a beak?")
        if (answer) {
            my_sprite.sayText("It's an Pigeon!")
        } else {
            my_sprite.sayText("It's a Parrot!")
        }
        
    } else {
        answer = game.ask("Are they kept as pets?")
        if (answer) {
            answer = game.ask("Does they hiss?")
            if (answer) {
                my_sprite.sayText("It's a Cat!")
            } else {
                my_sprite.sayText("It's a Dog!")
            }
            
        } else {
            my_sprite.sayText("It's a Snake!")
        }
        
    }
    
}

