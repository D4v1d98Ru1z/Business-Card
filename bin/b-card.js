#!/usr/bin/env node

//importing modules
const chalk = require('chalk')
const boxen = require('boxen')

// define styles for boxen
const options = {
    padding: 1,
    margin: 1,
    borderStyle: "round"
}

// Data definition with chalk
const data = {
    name: chalk.white('David Ruiz / '),
    handle: chalk.cyan('davidle.codes'),
    work: chalk.white('Fullstack freelance developer'),
    twitter: chalk.white('https://twitter.com/davidle_codes'),
    instagram: chalk.white('https://www.instagram.com/davidle.codes'),
    linkedin: chalk.white('https://www.linkedin.com/in/davidlecodes'),
    github: chalk.white('https://github.com/D4v1d98Ru1z'),
    npx: chalk.white('npx davidle.codes'),
    labelWork: chalk.white.bold('       Work: '),
    labelTwitter: chalk.white.bold('    Twitter: '),
    labelInstagram: chalk.white.bold('  Instagram: '),
    labelLinkedin: chalk.white.bold('   Linkedin: '),
    labelGithub: chalk.white.bold('     Github: '),
    labelCard: chalk.white.bold('       Card: ')
}

// Making the string in the output
const newline = '\n'
const headline = `${data.name} ${data.handle}`
const working = `${data.labelWork} ${data.work}`
const twittering = `${data.labelTwitter} ${data.twitter}`
const instagraming = `${data.labelInstagram} ${data.instagram}`
const linkeding = `${data.labelLinkedin} ${data.linkedin}`
const githubing = `${data.labelGithub} ${data.github}`
const carding = `${data.labelCard} ${data.npx}`

// Mixing the output

const output =
    headline+
    newline+
    newline+
    working+
    newline+
    twittering+
    newline+
    instagraming+
    newline+
    linkeding+
    newline+
    githubing+
    newline+
    newline+
    carding

// printing the card
console.log(chalk.green(boxen(output, options)))