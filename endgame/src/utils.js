export function getFarewellText(language) {
    const options = [
        `Farewell, ${language}`,
        `Adios, ${language}`,
        `R.I.P, ${language}`,
        `We'll miss you, ${language}`,
        `${language} bites the dust`,
        `Gone but not forgotten, ${language}`,
        `And this is the end, ${language}`,
        `It's been real, ${language}`,
        `${language}, your watch has ended`,
        `${language}, has left the buiding`,
    ]

    const randomIndex = Math.floor(Math.random() * options.length)
    return options[randomIndex]
}