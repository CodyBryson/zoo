import ATurtle from './App/Models/ATurtle.js'
import Barb from './App/Models/Barb.js'
import Creature from './App/Models/Creature.js'
import Drum from './App/Models/Drum.js'
import Eleven from './App/Models/Eleven.js'
import Foona from './App/Models/Foona.js'
import Greedy from './App/Models/Greedy.js'
import Hoodwink from './App/Models/Hoodwink.js'
import Irish from './App/Models/Irish.js'
import Jill from './App/Models/Jill.js'
import Kweet from './App/Models/Kweet.js'
import Lorax from './App/Models/Lorax.js'
import Moth from './App/Models/Moth.js'
import Nerkle from './App/Models/Nerkle.js'
import Obsk from './App/Models/Obsk.js'
import Propeller from './App/Models/Propeller.js'
import Quiet from './App/Models/Quiet.js'
import Ruffle from './App/Models/Ruffle.js'
import Slow from './App/Models/Slow.js'
import Thing from './App/Models/Thing.js'
import Unlucky from './App/Models/Unlucky.js'
import Vug from './App/Models/Vug.js'
import Whose from './App/Models/Whose.js'
import Xanathar from './App/Models/Xanathar.js'
import Ying from './App/Models/Ying.js'
import Zong from './App/Models/Zong.js'
import Zoo from './App/Models/Zoo.js'

let aTurtle = new ATurtle("A strange Flying Turtle Bird", "Flesh", "One Fish Two Fish Red Fish Blue Fish", "Great Race of Yith", 'aturtle.png');
let barb = new Barb("Barb-a-loot", "Dreams", "The Lorax", "Night-Gaunt", 'barb-a-loot.jpg');
let creature = new Creature("Creature Who Couldn't Hear", "Flesh", "One Fish Two Fish Red Fish Blue Fish", "Night-Gaunt", "creature.png");
let drum = new Drum("Drum-Tummied Snum", "Sorrow", "If I Ran the Circus", "Shoggoth", "drum-tummied.png");
let eleven = new Eleven("Eleven Finger Creature", "Flesh", "One Fish Two Fish Red Fish Blue Fish", "Chthonian", "eleven.png");
let foona = new Foona("Foona-Lagoona Baboona", "Flesh", "Dr. Seuss's Sleep Book", "Night-Gaunt", "foona.png");
let greedy = new Greedy("Greedy Ape", "Flesh", "Oh Say Can You Say?", "Night-Gaunt", "greedy.png");
let hoodwink = new Hoodwink("Hoodwink", "Dreams", "If I Ran the Circus", "Elder Thing", "hoodwink.png");
let irish = new Irish("Irish Ducks", "Sorrow", "Did I Ever Tell You How Lucky You Are?", "Cthulhi", "irish.png");
let jill = new Jill("Jill-ikka-Jast", "Stars", "Scrambled Eggs Super!", "Chthonian", "jill.png");
let kweet = new Kweet("Kweet", "Flesh", "Scrambled Eggs Super!", "Shoggoth", "kweet.png");
let lorax = new Lorax("The Lorax", "Everything", "The Lorax", "Cthulhi", "lorax.png");
let moth = new Moth("Moth-Watching Sneth", "Sorrow", "Scrambled Eggs Super!", "Great Race of Yith", "moth.png");
let nerkle = new Nerkle("Nerkle", "Dreams", "If I Ran The Zoo", "Deep One", "nerkle.png");
let obsk = new Obsk("Obsk", "Dreams", "If I Ran The Zoo", "Great Race of Yith", "obsk.png");
let propeller = new Propeller("Propeller Bug", "Stars", "If I Ran The Zoo", "Mi-Go", "propeller.png");
let quiet = new Quiet("Quiet Creature", "Sorrow", "One Fish Two Fish Red Fish Blue Fish", "Shoggoth", "quiet.png");
let ruffle = new Ruffle("Ruffle-Necked Sala-ma-goox", "Dreams", "Scrambled Eggs Super!", "Elder Thing", "ruffle.png");
let slow = new Slow("Slow Creature", "Sorrow", "One Fish Two Fish Red Fish Blue Fish", "Chthonian", "slow.png");
let thing = new Thing("Thing-A-Ma-Jigger", "Flesh", "One Fish Two Fish Red Fish Blue Fish", "Deep One", "thing.png");
let unlucky = new Unlucky("Unlucky Four-Tailed Creature", "Sorrow", "Did I ever Tell You How Lucky You Are?", "Great Race of Yith", "unlucky.png");
let vug = new Vug("Vug", "Stars", "There's a Wocket in my Pocket", "Elder Thing", "vug.png");
let whose = new Whose("Whose-horns-are-connected-from-one-to-the-other", "Dreams", "If I Ran the Zoo", "Cthulhi", "whose.png");
let xanathar = new Xanathar("Xanathar", "Dreams", "Fae-run", "Deep One", "xanathar.jpg");
let ying = new Ying("Ying", "Flesh", "One Fish Two Fish Red Fish Blue Fish", "Chthonian", "ying.png");
let zong = new Zong("Zong", "Sorrow", "Oh the Thinks you can Think!", "Mi-Go", "zong.png");

let zoo = new Zoo();

zoo.deepOnes = [...zoo.deepOnes, nerkle, thing, xanathar]
zoo.elderThings = [...zoo.elderThings, hoodwink, ruffle, vug]
zoo.shoggoths = [...zoo.shoggoths, drum, kweet, quiet]
zoo.miGo = [...zoo.miGo, propeller, zong]
zoo.yith = [...zoo.yith, aTurtle, moth, obsk, unlucky]
zoo.cthulhi = [...zoo.cthulhi, irish, lorax, whose]
zoo.chthonians = [...zoo.chthonians, eleven, jill, slow, ying]
zoo.nightGaunts = [...zoo.nightGaunts, barb, creature, foona, greedy]

window.zoo = zoo;


