// Put your code here
console.log("Do you believe in magic?");
console.log("------------------------");

const allSpells = [
    spellFactory(
        "Turn enemy into a newt",
        true,
        5.1
    ),
    spellFactory(
        "Conjure some gold for a local charity",
        false,
        2.99
    ),
    spellFactory(
        "Give a deaf person the ability to heal",
        false,
        12.2
    ),
    spellFactory(
        "Make yourself emperor of the universe",
        true,
        100.0
    ),
    spellFactory(
        "Convince your relatives your political views are correct",
        false,
        2921.5
    )
]

const getGoodSpells = () => {
    const goodSpells = allSpells.filter(spell => !spell.isEvil)
    let listString = ""
    for (const spell of goodSpells) {
        listString += `    ${spell}\n`
    }
    return listString
}

const getEvilSpells = () => {
    const evilSpells = allSpells.filter(spell => spell.isEvil)
    let listString = ""
    for (const spell of evilSpells) {
        listString += `    ${spell}\n`
    }
    return listString
}

console.log(`
Good Book
${getGoodSpells()}

Evil Book
${getEvilSpells()}
`)

// JS representation of a spell constructor
function spellFactory(name, isEvil, energyRequired) {
    return {
        name,
        isEvil,
        energyRequired,
        toString: function () {
            return this.name
        }
    }
}