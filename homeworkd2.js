/* QUESTION 1:
Use the array of shop items provided and present the the information in the following format
*/
const shopItems=[{
    id:1,
    name:"Air Max 97",
    price:130.00,
    desc:"The design of the shoe is commonly thought to be inspired by the bullet trains of Japan, but the design was inspired by mountain bikes. ",
    category:"shoes"
},{
    id:2,
    name:"Adidas NMD R1",
    price:128,
    desc:"New-wave classics, with a timeless vintage design: men’s NMD R1 gear is the ultimate go-anywhere shoe. Vibrant styles and soft cushioning will have you gliding through life, wherever it may take you.",
    category:"shoes"
},{
    id:3,
    name:"Gucci Oversize T-shirt with Interlocking G",
    price:580,
    desc:"The now recognizable oversize Gucci T-shirt continues to evolve with each new collection, the Interlocking G print is influenced by an '80s design from the archives. Streetwear continues to be a defining feature of Gucci's collections and is often juxtaposed by tailored separates.",
    category:"shirts"
},{
    id:4,
    name:"Nike Sportswear Club",
    price:18.97,
    desc:"The Nike Sportswear Club T-Shirt is made with our everyday cotton fabric and a classic fit for a familiar feel right out of the bag. An embroidered Futura logo on the chest provides a signature Nike look.",
    category:"shirts"
},{
    id:5,
    name:"Spanx Flare Jeans, Vintage Indigo",
    price:148,
    desc:"These 70s inspired flare jeans are the perfect wear everywhere with anything style. Designed with premium stretch denim, high-rise coverage and hidden core shaping technology, this jean puts a new twist on a retro silhouette.",
    category:"pants"
},{
    id:6,
    name:"Bonobos Premium Stretch Jeans",
    price:69,
    desc:"Resilient stretch denim made incredibly soft. Yes, jeans can be unbelievably comfortable.",
    category:"pants"
}]

const storeFront = barr => {
    result = ``
    for ( let bdict in barr) {
        let item = barr[bdict]
        result += `=======================================\n`
        result += `Name:\t  ${item.name}\n`
        result += `Price:\t  ${item.price}\n`
        result += `About:\t  ${item.desc}\n`
        result += `Category: ${item.category.charAt(0).toUpperCase()}${item.category.slice(1)}\n`
    }
    return result
}

console.log(storeFront(shopItems))


/* QUESTION 2:
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/
const hwPerson = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

const iterateThroughList = function(anyList) {
    for (let key in anyList){
        console.log(`${key} contains:`)
        if (Array.isArray(anyList[key])){
            for (let example of anyList[key]){
                if (typeof example === "object"){
                    iterateThroughList(example)
                }
                else {
                    console.log(`       ${example}`)
                }
            }
        }
        else if (typeof anyList[key] === "object"){
            iterateThroughList(anyList[key])
        }
        else{
            console.log(`       ${anyList[key]}`)
        }
    }
}

iterateThroughList(hwPerson)



/* QUESTION 3:
Create a Promised based function that will check a string to determine if it's length is greater than 10. If the length is greater than 10 then resolve it and console log "Big word". If the length of the string is less than 10 then reject it and console log "Small String."
*/

const PromiseFunc = str => {
    return new Promise((res, rej) => {
        if (str.length > 10) {
            res(true)
            console.log("Big word")
        } else {
            rej(false)
            console.log("Small String")
        }
    })
}

PromiseFunc('This is a test string')

/* QUESTION 4:
-Create a base class of GameMember and 2 children classes of Dealer, Player
-both dealer and player have:
--hand : array of 2 numbers (1-13) ex: [5, 12] which starts with 2 random numbers
--hit() : ability to add  a random number [1-13] to their hand
-When a Dealer trys to hit he can only hit if he has his hand adds up to less than a total of 17 (so 16 and under)
-When a Player hits they can hit as long as their total is under 21
-Use the randomNumber function provided below to gernerate a random number 1-12

*/
class GameMember {
    constructor() {
        this.hand = []
        this.dealer = undefined
        this.hit = hit
        this.deal = deal
    }
   // Not too sure here
}

class Dealer extends GameMember {
    
}

class Player extends GameMember {
    
}