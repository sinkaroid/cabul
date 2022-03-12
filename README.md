<div align="center">
<img width="600" src="https://cdn.discordapp.com/attachments/952117487166705747/952118781944143912/node-cabul.png" alt="cabul!">

# Cabul [![Build and documentation](https://github.com/sinkaroid/cabul/actions/workflows/docs.yml/badge.svg)](https://github.com/sinkaroid/cabul/actions/workflows/docs.yml) [![Maintainability](https://api.codeclimate.com/v1/badges/90b543fc3495b932488a/maintainability)](https://codeclimate.com/github/sinkaroid/cabul/maintainability)
Cabul guide you to the NSFW world of reddit.

This module exist as a directory of all popular NSFW-related subreddits.
The endpoints that cabul handle is hand-picked and curated by the whole community, data taken is always wholesome, and easy to use check your intelisense.

<a href="#table-of-subreddit">Table of Subreddit</a> •
<a href="https://sinkaroid.github.io/cabul">Documentation</a> •
<a href="https://github.com/sinkaroid/cabul/blob/master/CONTRIBUTING.md">Add new endpoint</a>
</div>

----

## Features

- **Featureful**: resolves and interacts with ease
- **Fancy functional**: out of the box
- **Curated** by the whole community
- **Arbitrary**: GET request will be support as well
- **Easy to use**: check your intelisense
- **All in one**: packed with hentai, irl, and memes

## Prerequisites

- Node.js v12 or above.
- Can parse JSON

## Installation

`npm install cabul / yarn add cabul`


## Example
**Here I'll show you how to import either `hentai`, `irl`, or `meme`**

```js
const { Cabul } = require('cabul');
const reddit = new Cabul()

// To use and import hentai only
reddit.hentai("ahegao", "hot").then(res => {
    console.log(res); // Returns a object 
});

// To use and import irl only
reddit.irl("gonewild", "top").then(res => {
  console.log(res); // Returns a object 
});

// To use and import memes only
reddit.meme("hentaimemes", "controversial").then(res => {
  console.log(res); // Returns a object 
});
```
*That above one will returns a single random posts object.*

**If you dont want to get random, you can set the third parameter to `true`**

```js
reddit.hentai("atago", "hot", true).then(res => {
  console.log(res); // Returns a object 
});
```
*That above one will represents the 25 object posts.*

Not sure what the parameter looks like? Check your intelisense.

**Takes parameters:**

- Required: **type** (String, Check [endpoint.json](./endpoint.json)) The related endpoint of subreddit.
  - If not provided, it will throw you an error.
- Optional: **sortby** (String, Should be: `hot` | `new` | `top` | `controversial`) Gets data according popularity.
  - If not provided, it will be random between hot, new, top, and controversial.
- Optional: **no_random** (Boolean) If true, will returns 25 list instead of 1 random.
  - If not provided, it will default to `false`.

**Returns:** Single object or 25 list of object (if third parameter is true) that represents the data.


## Documentation

The documentation can be found [https://sinkaroid.github.io/cabul](https://sinkaroid.github.io/cabul)

- ### reddit.hentai(options)
  - Gets random or list data from related hentai subreddit.

- ### reddit.irl(options)
  - Gets random or list data from related irl nsfw subreddit.

- ### reddit.memes(options)
  - Gets random or list data from related nsfw memes subreddit.

## Table of subreddit
Here the list of popular subreddit that cabul can handle.  
Sometime specific subreddit is not available or maybe is ban, it will throw you an
error.

### Hentai
<details>
<summary>The list of popular hentai subreddit.</summary>

| Name             | Subreddit                                                              | Description                                                                                                              |
|------------------|------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| hentai           | [/r/Hentai](https://www.reddit.com/r/Hentai)                           | For all Japanese-style 18+ art                                                                                           |
| ecchi            | [/r/Ecchi](https://www.reddit.com/r/Ecchi)                             | For lewd artwork without a male presence.                                                                                |
| netorare         | [/r/netorare](https://www.reddit.com/r/netorare)                       | A subreddit dedicated to netorare, or cuckold                                                                            |
| kemonomimi       | [/r/kemonomimi](https://www.reddit.com/r/kemonomimi)                   | Animal girls                                                                                                             |
| yuri             | [/r/Yuri](https://www.reddit.com/r/Yuri)                               | Girl-on-girl action                                                                                                      |
| thicc            | [/r/Thighdeology](https://www.reddit.com/r/Thighdeology)               | A subreddit dedicated to thicc thighs                                                                                    |
| ahegao           | [/r/Ahegao](https://www.reddit.com/r/Ahegao)                           | Hentai where the woman is "fucked silly"                                                                                 |
| monster          | [/r/Monstergirl](https://www.reddit.com/r/Monstergirl)                 | Where the woman has more than just animal ears/tail                                                                      |
| bondage          | [/r/Hentaibondage](https://www.reddit.com/r/Hentaibondage)             | Hentai focused on bondage                                                                                                |
| trap             | [/r/traphentai](https://www.reddit.com/r/traphentai)                   | Traps and traps being fucked.                                                                                            |
| pantsu           | [/r/Pantsu](https://www.reddit.com/r/Pantsu)                           | A subreddit dedicated to fanservice moments and artworks of anime/manga/visual novels                                    |
| milf             | [/r/AnimeMILFS](https://www.reddit.com/r/AnimeMILFS)                   | Anime mothers you want to fuck                                                                                           |
| zettairyouiki    | [/r/ZettaiRyouiki](https://www.reddit.com/r/ZettaiRyouiki)             | The strip of visible skin between a skirt and high socks                                                                 |
| nekomimi         | [/r/Nekomimi/](https://www.reddit.com/r/Nekomimi/)                     | Cat girls                                                                                                                |
| paizuri          | [/r/Paizuri](https://www.reddit.com/r/Paizuri)                         | Hentai titjobs                                                                                                           |
| booty            | [/r/Animebooty](https://www.reddit.com/r/Animebooty)                   | An ass subreddit. That's all.                                                                                            |
| waifusgonewild   | [/r/Waifusgonewild](https://www.reddit.com/r/Waifusgonewild)           | Anime girls taking lewd selfies                                                                                          |
| gameovergirls    | [/r/GameOverGirls](https://www.reddit.com/r/GameOverGirls)             | Girls being dominated as if in a "Game Over" sequence.                                                                   |
| sukebei          | [/r/Sukebei](https://www.reddit.com/r/Sukebei)                         | Naked anime girls                                                                                                        |
| cum              | [/r/CumHentai](https://www.reddit.com/r/CumHentai)                     | Cum. Lots of it.                                                                                                         |
| corruptionhentai | [/r/Corruptionhentai](https://www.reddit.com/r/Corruptionhentai)       | Hentai Subreddit focused on the corruption of the innocent. Debauch the pure heroines and the like.                      |
| chiisai          | [/r/Chiisaihentai](https://www.reddit.com/r/Chiisaihentai)             | A subreddit dedicated to tiny boobs                                                                                      |
| muchi            | [/r/Muchihentai](https://www.reddit.com/r/Muchihentai)                 | Anime girls with a bit of extra meat on them                                                                             |
| tentai           | [/r/Tentai/](https://www.reddit.com/r/Tentai/)                         | Where the woman is fucked by tentacles                                                                                   |
| dekai            | [/r/Dekaihentai](https://www.reddit.com/r/Tentai/)                     | A subreddit dedicated to huge boobs                                                                                      |
| yaoi             | [/r/Yaoi](https://www.reddit.com/r/Yaoi)                               | Guy-on-guy action                                                                                                        |
| oral             | [/r/OralHentai](https://www.reddit.com/r/Animemidriff)                 | A subreddit dedicated to all things oral                                                                                 |
| armpits          | [/r/AnimeArmpits](https://www.reddit.com/r/AnimeArmpits)               | Armpits of cute anime girls                                                                                              |
| bodysuits        | [/r/Animebodysuits](https://www.reddit.com/r/Animebodysuits)           | Form fitting clothing that shows it all                                                                                  |
| rippedlegwear    | [/r/rippedanimelegwear ](https://www.reddit.com/r/rippedanimelegwear)  | Dedicated to ripped anime legwear                                                                                        |
| atago            | [/r/Atago](https://www.reddit.com/r/Atago)                             | A subreddit dedicated to the character Atago from Azur Lane                                                              |
| handbras         | [/r/Animehandbras](https://www.reddit.com/r/Animehandbras)             | Where the women substitute a bra with their hands and arms                                                               |
| elf              | [/r/ElfHentai](https://www.reddit.com/r/ElfHentai)                     | Dedicated to hentai with Elves (CURRENTLY BANNED)                                                                        |
| ecchibondage     | [/r/EcchiBondage](https://www.reddit.com/r/EcchiBondage)               | Like hentai bondage, just less lewd                                                                                      |
| cleavage         | [/r/HentaiCleavage](https://www.reddit.com/r/HentaiCleavage)           | Juicy cleavage                                                                                                           |
| maid             | [/r/MaidHentai](https://www.reddit.com/r/MaidHentai)                   | Hentai with maids                                                                                                        |
| usagi            | [/r/Usagimimi](https://www.reddit.com/r/Usagimimi)                     | Bunny girls                                                                                                              |
| lactation        | [/r/Hentailactation](https://www.reddit.com/r/Hentailactation)         | A subreddit dedicated to art depicting erotic lactation.                                                                 |
| feet             | [/r/AshiHentai](https://www.reddit.com/r/AshiHentai)                   | A subreddit dedicated to juicy anime feet                                                                                |
| lewd             | [/r/LewdAnimeGirls](https://www.reddit.com/r/LewdAnimeGirls)           | A smaller version of r/Ecchi                                                                                             |
| taihou           | [/r/Taihou](https://www.reddit.com/r/Taihou)                           | A subreddit dedicated the the characte Taihou from Azur Lane                                                             |
| christmascake    | [/r/ChristmasCake](https://www.reddit.com/r/ChristmasCake)             | Where the woman is unmarried and over the age of 25, thus, "unsold" before the 25th of december. hence, a Christmas cake |
| rikka            | [/r/ChurchOfRikka](https://www.reddit.com/r/ChurchOfRikka)             | A subreddit dedicated to the character Rikka Takarada from SSSS.Gridman.                                                 |
| hearts           | [/r/HentaiHearts](https://www.reddit.com/r/HentaiHearts)               | A hentai subreddits with hearts as a focus, particularly in the eyes                                                     |
| bisex            | [/r/BisexualHentai](https://www.reddit.com/r/BisexualHentai)           | A hentai subreddit with a bisexual focus                                                                                 |
| smothering       | [/r/HentaiSmothering](https://www.reddit.com/r/HentaiSmothering)       | Where the woman smothers another person with her body                                                                    |
| vacuum           | [/r/VacuumHentai](https://www.reddit.com/r/VacuumHentai)               | Women vacuum sealed in bags                                                                                              |
| humiliation      | [/r/HentaiHumiliation](https://www.reddit.com/r/HentaiHumiliation)     | Where the woman is degraded and humiliated                                                                               |
| forniphilia      | [/r/HentaiForniphilia](https://www.reddit.com/r/HentaiForniphilia)     | Where the woman is turned into an object                                                                                 |
| officelady       | [/r/OfficeLady](https://www.reddit.com/r/OfficeLady)                   | For business dressed women                                                                                               |
| dtittytouching   | [/r/2DTittyTouching](https://www.reddit.com/r/2DTittyTouching)         | For drawn titties touching other drawn titties.                                                                          |
| inumimi          | [/r/inumimi](https://www.reddit.com/r/inumimi)                         | Doggirls                                                                                                                 |
| cumsluts         | [/r/HentaiCumsluts](https://www.reddit.com/r/HentaiCumsluts)           | Girls who love being covered in cum.                                                                                     |
| heterochromia    | [/r/Heterochromiahentai](https://www.reddit.com/r/Heterochromiahentai) | Girls with different coloured eyes                                                                                       |
| ai               | [/r/MechanicalSluts](https://www.reddit.com/r/MechanicalSluts)         | A porn subreddit for androids, AI, cyborgs etc                                                                           |
| pokeporn         | [/r/PokePorn](https://www.reddit.com/r/PokePorn)                       | Pokemon-themed porn                                                                                                      |
| rule34           | [/r/rule34](https://www.reddit.com/r/rule34)                           | If it exists, there exists porn of it, likely found here                                                                 |
| western          | [/r/WesternHentai](https://www.reddit.com/r/WesternHentai)             | Hentai in a western style                                                                                                |
| lol              | [/r/Rule34LoL](https://www.reddit.com/r/Rule34LoL)                     | League Of Legends-themed porn                                                                                            |
| arknuts          | [/r/Arknuts](https://www.reddit.com/r/Arknuts)                         | Arknights- themed porn                                                                                                   |
| overwatch        | [/r/Overwatch_Porn](https://www.reddit.com/r/Overwatch_Porn)           | Overwatch-themed porn                                                                                                    |
| twob             | [/r/2Booty](https://www.reddit.com/r/2Booty)                           | NieR: Automata-themed porn                                                                                               |
| kanmusunights    | [/r/KanMusuNights](https://www.reddit.com/r/2Booty)                    | Kantai Collection-themed porn                                                                                            |
</details> 

### IRL
<details>
<summary>The list of popular Irl nsfw subreddit.</summary>

| Name                    | Subreddit                     | Description                                                                                         |
|-------------------------|-------------------------------|-----------------------------------------------------------------------------------------------------|
| r/gonewild              | [/r/gonewild](#)              | Reddit Gone Wild - A Decade of Debauchery -  million +                                              |
| r/nsfw                  | [/r/nsfw](#)                  | Not Safe for Work                                                                                   |
| r/NSFW_GIF              | [/r/NSFW_GIF](#)              | NSFW_GIF                                                                                            |
| r/RealGirls             | [/r/RealGirls](#)             | The Real Girls of Reddit                                                                            |
| r/ImGoingToHellForThis  | [/r/ImGoingToHellForThis](#)  | Where school shooters post before they are CNN-famous                                               |
| r/holdthemoan           | [/r/holdthemoan](#)           | r/holdthemoan: girls trying to get away with being naughty in socially risky situations             |
| r/BustyPetite           | [/r/BustyPetite](#)           | Busty Petite                                                                                        |
| r/cumsluts              | [/r/cumsluts](#)              | The stickiest place on reddit!                                                                      |
| r/nsfw_gifs             | [/r/nsfw_gifs](#)             | Satisfying your mom since 2010                                                                      |
| r/LegalTeens            | [/r/LegalTeens](#)            | Legal Teens                                                                                         |
| r/PetiteGoneWild        | [/r/PetiteGoneWild](#)        | GoneWild for small/petite girls                                                                     |
| r/adorableporn          | [/r/adorableporn](#)          | Adorable Porn                                                                                       |
| r/GirlsFinishingTheJob  | [/r/GirlsFinishingTheJob](#)  | GirlsFinishingTheJob                                                                                |
| r/Amateur               | [/r/Amateur](#)               | Amateur Pics                                                                                        |
| r/AsiansGoneWild        | [/r/AsiansGoneWild](#)        | An outlet for Asian women to express their sexuality                                                |
| r/rule34                | [/r/rule34](#)                | rule34                                                                                              |
| r/BiggerThanYouThought  | [/r/BiggerThanYouThought](#)  | Tits <3                                                                                             |
| r/porninfifteenseconds  | [/r/porninfifteenseconds](#)  | Porn in Fifteen Seconds                                                                             |
| r/ass                   | [/r/ass](#)                   | The Callipygian reddit                                                                              |
| r/TittyDrop             | [/r/TittyDrop](#)             | Let dem titties drop!                                                                               |
| r/collegesluts          | [/r/collegesluts](#)          | Slutty College Girls!                                                                               |
| r/pawg                  | [/r/pawg](#)                  | Phat Ass White Girls                                                                                |
| r/HappyEmbarrassedGirls | [/r/HappyEmbarrassedGirls](#) | Happy embarrassed girls bring great joy to everybody!                                               |
| r/NSFWFunny             | [/r/NSFWFunny](#)             | Humorous, NSFW content                                                                              |
| r/milf                  | [/r/milf](#)                  | The MILF Reddit                                                                                     |
| r/OnOff                 | [/r/OnOff](#)                 | When imagination just isn't enough                                                                  |
| r/hentai                | [/r/hentai](#)                | Hentai                                                                                              |
| r/LipsThatGrip          | [/r/LipsThatGrip](#)          | LipsThatGrip : We've got the grippiest lips                                                         |
| r/porn                  | [/r/porn](#)                  | You'll know it when you see it.                                                                     |
| r/Boobies               | [/r/Boobies](#)               | Boobies                                                                                             |
| r/celebnsfw             | [/r/celebnsfw](#)             | Celebrity NSFW Photos                                                                               |
| r/Blowjobs              | [/r/Blowjobs](#)              | Blowjobs                                                                                            |
| r/GWCouples             | [/r/GWCouples](#)             | Gonewild: Couples Edition                                                                           |
| r/nsfwhardcore          | [/r/nsfwhardcore](#)          | NSFW Hardcore                                                                                       |
| r/WatchItForThePlot     | [/r/WatchItForThePlot](#)     | We're all about the Plot                                                                            |
| r/dirtysmall            | [/r/dirtysmall](#)            | Little tits, big action action action!                                                              |
| r/homemadexxx           | [/r/homemadexxx](#)           | Homemade Porn Videos                                                                                |
| r/trashyboners          | [/r/trashyboners](#)          | Maybe a true hot mess?                                                                              |
| r/nsfwcosplay           | [/r/nsfwcosplay](#)           | For Cosplay Nudity and Sex                                                                          |
| r/gonewildcurvy         | [/r/gonewildcurvy](#)         | GWC: Where redditors can flaunt their curves                                                        |
| r/girlsinyogapants      | [/r/girlsinyogapants](#)      | Girls In Yoga Pants                                                                                 |
| r/juicyasians           | [/r/juicyasians](#)           | Women of the East with a little extra oomph                                                         |
| r/asstastic             | [/r/asstastic](#)             | Where every day is hump day!                                                                        |
| r/palegirls             | [/r/palegirls](#)             | Pale Girls: Porcelain-skinned beauties                                                              |
| r/pussy                 | [/r/pussy](#)                 | The happiest place on Earth!                                                                        |
| r/60fpsporn             | [/r/60fpsporn](#)             | 60fpsporn                                                                                           |
| r/NSFW_Snapchat         | [/r/NSFW_Snapchat](#)         | NSFW Snapchat                                                                                       |
| r/curvy                 | [/r/curvy](#)                 | /r/curvy: Buxom babes, voluptuous vixens, curvy cuties, plump peaches, hotties w/ hourglass figures |
| r/freeuse               | [/r/freeuse](#)               | freeuse - worlds where women are willing                                                            |
| r/StraightGirlsPlaying  | [/r/StraightGirlsPlaying](#)  | StraightGirlsPlaying                                                                                |
| r/gonewildplus          | [/r/gonewildplus](#)          | Gone Wild, 30+ Year Olds!                                                                           |
| r/workgonewild          | [/r/workgonewild](#)          | Gone Wild At Work                                                                                   |
| r/anal                  | [/r/anal](#)                  | Anal                                                                                                |
| r/AsianHotties          | [/r/AsianHotties](#)          | Women from the Orient to the Indian sub-continent!                                                  |
| r/FestivalSluts         | [/r/FestivalSluts](#)         | /r/FestivalSluts: If you know, you know.                                                            |
| r/TinyTits              | [/r/TinyTits](#)              | For all your small-breasted needs                                                                   |
| r/wifesharing           | [/r/wifesharing](#)           | Wife Sharing and Hotwife Pictures and Videos (NSFW)                                                 |
| r/thick                 | [/r/thick](#)                 | Thick                                                                                               |
| r/lesbians              | [/r/lesbians](#)              | Lesbians: NSFW Photos and Gifs                                                                      |
| r/GodPussy              | [/r/GodPussy](#)              | God Pussy- The best HD pussy pics on reddit                                                         |
| r/MorbidReality         | [/r/MorbidReality](#)         | The darkest recesses of humanity                                                                    |
| r/grool                 | [/r/grool](#)                 | Grool = Girl Drool                                                                                  |
| r/pornvids              | [/r/pornvids](#)              | Porn Videos, Streaming Porn, Hard Sex                                                               |
| r/gonewildstories       | [/r/gonewildstories](#)       | Gonewild Stories                                                                                    |
| r/gwcumsluts            | [/r/gwcumsluts](#)            | Cum-covered Redditors                                                                               |
| r/GirlswithGlasses      | [/r/GirlswithGlasses](#)      | Girls with Glasses (Some NSFW)                                                                      |
| r/bodyperfection        | [/r/bodyperfection](#)        | Show us your definition of perfect.                                                                 |
| r/rearpussy             | [/r/rearpussy](#)             | Pussy from the rear                                                                                 |
| r/NSFW411               | [/r/NSFW411](#)               | NSFW411                                                                                             |
| r/quiver                | [/r/quiver](#)                | Quiver: Shaking Orgasm GIFs & Vids                                                                  |
| r/ginger                | [/r/ginger](#)                | For all the ginger lovers out there                                                                 |
| r/redheads              | [/r/redheads](#)              | redheads: because redder is better                                                                  |
| r/JizzedToThis          | [/r/JizzedToThis](#)          | Show us what made you cum.                                                                          |
| r/BigBoobsGW            | [/r/BigBoobsGW](#)            | Big Boobs Gonewild                                                                                  |
| r/Stacked               | [/r/Stacked](#)               | Stacked: For the Enjoyment of Topheavy Females                                                      |
| r/Hotwife               | [/r/Hotwife](#)               | Hotwife Lifestyle Subreddit                                                                         |
| r/whenitgoesin          | [/r/whenitgoesin](#)          | When It Goes In: The First Moment of Pleasure                                                       |
| r/TooCuteForPorn        | [/r/TooCuteForPorn](#)        | Too cute for porn                                                                                   |
| r/SexInFrontOfOthers    | [/r/SexInFrontOfOthers](#)    | SexInFrontOfOthers                                                                                  |
| r/gettingherselfoff     | [/r/gettingherselfoff](#)     | Gifs and video of girls masturbating.                                                               |
| r/darkjokes             | [/r/darkjokes](#)             | Jokes by dark people, for dark people. Mayos get out!                                               |
| r/gonewildaudio         | [/r/gonewildaudio](#)         | For Those Aroused By Sound                                                                          |
| r/18_19                 | [/r/18_19](#)                 | Girls 18 and 19 yo                                                                                  |
| r/bigasses              | [/r/bigasses](#)              | Big asses on beautiful ladies                                                                       |
| r/boobbounce            | [/r/boobbounce](#)            | Titties in sweet, sweet motion.                                                                     |
| r/creampies             | [/r/creampies](#)             | Payload delivery                                                                                    |
| r/porn_gifs             | [/r/porn_gifs](#)             | Hard,Sexy,Porn Gifs                                                                                 |
| r/theratio              | [/r/theratio](#)              | hips:waist                                                                                          |
| r/tightdresses          | [/r/tightdresses](#)          | /r/tightdresses - Hot babes in tight dresses                                                        |
| r/Hotchickswithtattoos  | [/r/Hotchickswithtattoos](#)  | Hot Chicks With Tattoos                                                                             |
| r/burstingout           | [/r/burstingout](#)           | For pictures of women whose tops cannot contain their assets                                        |
| r/facedownassup         | [/r/facedownassup](#)         | Girls with their face down and ass up in the air.                                                   |
| r/BreedingMaterial      | [/r/BreedingMaterial](#)      | For Fertility Goddesses                                                                             |
| r/GoneWildTube          | [/r/GoneWildTube](#)          | Gonewild Tube - Amateur 'Gonewild' NSFW Videos                                                      |
| r/altgonewild           | [/r/altgonewild](#)           | Alternative Gone Wild                                                                               |
| r/O_Faces               | [/r/O_Faces](#)               | 'O' Faces. Faces of Ecstasy.                                                                        |
| r/amateurcumsluts       | [/r/amateurcumsluts](#)       | Amateur Cumsluts                                                                                    |
| r/hugeboobs             | [/r/hugeboobs](#)             | Huge Boobs: for when more than a handful is just getting started                                    |
| r/SheLikesItRough       | [/r/SheLikesItRough(#)        | SheLikesItRough                                                                                     |
| r/suicidegirls          | [/r/suicidegirls](#)          | SuicideGirls.com on Reddit                                                                          |
| r/CuteLittleButts       | [/r/CuteLittleButts](#)       | Cute Little Butts                                                                                   |
| r/tipofmypenis          | [/r/tipofmypenis](#)          | TOMP - To find the unfindable source                                                                |
| r/RandomActsOfBlowJob   | [/r/RandomActsOfBlowJob](#)   | RAOB. Matching mouths and members                                                                   |
| r/fitgirls              | [/r/fitgirls](#)              | Fit Girls                                                                                           |
| r/Upskirt               | [/r/Upskirt](#)               | Upskirt Fun                                                                                         |
</details> 

### Memes
<details>
<summary>The list of popular nsfw memes subreddit.</summary>

| Name                    | Subreddit                                                                   | Description           |
|-------------------------|-----------------------------------------------------------------------------|-----------------------|
| r/SexuallyExplicitMemes | [/r/SexuallyExplicitMemes](https://www.reddit.com/r/SexuallyExplicitMemes/) | SexuallyExplicitMemes |
| NSFWFunny               | [/r/NSFWFunny](https://www.reddit.com/r/NSFWFunny/)                         | NSFWFunny             |
| DeepFriedHentai         | [/r/DeepFriedHentai](https://www.reddit.com/r/DeepFriedHentai/)             | DeepFriedHentai       |
| PornMemes               | [/r/PornMemes](https://www.reddit.com/r/PornMemes/)                         | PornMemes             |
| hentaimemes             | [/r/hentaimemes](https://www.reddit.com/r/hentaimemes/)                     | hentaimemes           |
| hentaidankmemes         | [/r/hentaidankmemes](https://www.reddit.com/r/hentaidankmemes/)             | hentaidankmemes       |
| Hentai_memes            | [/r/Hentai_memes](https://www.reddit.com/r/Hentai_memes/)                   | Hentai_memes          |
| NsfwAnimemes            | [/r/NsfwAnimemes](https://www.reddit.com/r/NsfwAnimemes/)                   | NsfwAnimemes          | 
| PornoMemes              | [/r/PornoMemes](https://www.reddit.com/r/PornoMemes/)                       | PornoMemes            |
</details> 


## Results:

`no_random` is default false and will return a single object.
Otherwise it will return a list (25 posts) if `no_random` is true.

Useful keys:
- **res.data** parent object
- **res.data.url_overridden_by_dest** actionable image/videos/gifs
- **res.data.permalink** actionable links
- **res.data.title** title post
- **res.data.subreddit_name_prefixed** name of the subreddit. eg: /r/ahegao
- **res.data.score** number of score
- **res.data.subreddit_subscribers** number of subscribers
- **res.data.num_comments** number of comment in a post related
- **res.data.ups** number of upvotes
- ~~**res.data.downs** number of downvotes~~
- ..and more, see below:

```js
{
  kind: 't3',
  data: {
    approved_at_utc: null,
    subreddit: 'Atago',
    selftext: '',
    author_fullname: 't2_13mkmqwt',
    saved: false,
    mod_reason_title: null,
    gilded: 0,
    clicked: false,
    title: 'Atagos big behind',
    link_flair_richtext: [],
    subreddit_name_prefixed: 'r/Atago',
    hidden: false,
    pwls: null,
    link_flair_css_class: '',
    downs: 0,
    thumbnail_height: 78,
    top_awarded_type: null,
    hide_score: false,
    name: 't3_oh8uqe',
    quarantine: false,
    link_flair_text_color: 'dark',
    upvote_ratio: 0.99,
    author_flair_background_color: null,
    subreddit_type: 'public',
    ups: 534,
    total_awards_received: 3,
    media_embed: {},
    thumbnail_width: 140,
    author_flair_template_id: null,
    is_original_content: false,
    user_reports: [],
    secure_media: null,
    is_reddit_media_domain: true,
    is_meta: false,
    category: null,
    secure_media_embed: {},
    link_flair_text: 'Atago',
    can_mod_post: false,
    score: 534,
    approved_by: null,
    is_created_from_ads_ui: false,
    author_premium: false,
    thumbnail: 'https://b.thumbs.redditmedia.com/Rsh6Og-AsGTpfsAPlR1OOCr4voR3CAL5X0fX1IihAMM.jpg',
    edited: false,
    author_flair_css_class: null,
    author_flair_richtext: [],
    gildings: {},
    post_hint: 'image',
    content_categories: null,
    is_self: false,
    mod_note: null,
    created: 1625907932,
    link_flair_type: 'text',
    wls: null,
    removed_by_category: null,
    banned_by: null,
    author_flair_type: 'text',
    domain: 'i.redd.it',
    allow_live_comments: false,
    selftext_html: null,
    likes: null,
    suggested_sort: null,
    banned_at_utc: null,
    url_overridden_by_dest: 'https://i.redd.it/aabldcpvbaa71.jpg',
    view_count: null,
    archived: false,
    no_follow: false,
    is_crosspostable: false,
    pinned: false,
    over_18: true,
    preview: { images: [Array], enabled: true },
    all_awardings: [ [Object], [Object] ],
    awarders: [],
    media_only: false,
    link_flair_template_id: '15f3d18e-14cc-11eb-93fc-0e629d02b757',
    can_gild: false,
    spoiler: false,
    locked: false,
    author_flair_text: null,
    treatment_tags: [],
    visited: false,
    removed_by: null,
    num_reports: null,
    distinguished: null,
    subreddit_id: 't5_qdbs8',
    mod_reason_by: null,
    removal_reason: null,
    link_flair_background_color: '',
    id: 'oh8uqe',
    is_robot_indexable: true,
    report_reasons: null,
    author: 'verlene10',
    discussion_type: null,
    num_comments: 5,
    send_replies: true,
    whitelist_status: null,
    contest_mode: false,
    mod_reports: [],
    author_patreon_flair: false,
    author_flair_text_color: null,
    permalink: '/r/Atago/comments/oh8uqe/atagos_big_behind/',
    parent_whitelist_status: null,
    stickied: false,
    url: 'https://i.redd.it/aabldcpvbaa71.jpg',
    subreddit_subscribers: 24088,
    created_utc: 1625879132,
    num_crossposts: 1,
    media: null,
    is_video: false
  }
}
```

## Todo
Since i've using this wrapper on Node.js application, hence the other language is not supported yet.

Feature support:
- [x] Hentai
- [x] Irl
- [x] Memes

Multilingual support:
- [ ] Python modules
- [ ] Deno wrapper
- [ ] Ruby gem

## Legal

This tool can be freely copied, modified, altered, distributed without any attribution whatsoever. However, if you feel
like this tool deserves an attribution, mention it. It won't hurt anybody :)

Please, read the [license terms](LICENSE). Don't worry, it can be read in less than 30 seconds, unless you have some
sort of reading disability - in that case, I'm wondering why you're still reading this text. Really. Stop. Please. I
mean, seriously. Why are you still reading?

## Pronunciation
[`id_ID`](https://www.localeplanet.com/java/id-ID/index.html) • **/ca·bul/** — sange dan kotor / melanggar kesopanan _(?)_ offensive in a sexual way.

## Acknowledgements

Since this tool includes some contributions, and I'm not an asshole, I'll publically thank the following users for their
help:

- [/r/Hentai](https://www.reddit.com/r/hentai) actionable endpoints [#hentai](#hentai)
- [/r/NSFW411](https://www.reddit.com/r/NSFW411) actionable endpoints [#irl](#irl)