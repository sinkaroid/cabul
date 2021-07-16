<div align="center">

[![](https://img.shields.io/npm/v/cabul)](https://www.npmjs.com/package/cabul)
[![](https://img.shields.io/badge/dynamic/json.svg?style=plastic&logo=appveyor&label=endpoint%20count&url=http://192.145.238.5/~pasirm5/v3/cabul/data.json&query=%24.tags_count&colorB=#4c1)](http://192.145.238.5/~pasirm5/v3/cabul/data.json)

   <a href="#">
   <img width="600" src="test/cabul.png" alt="logo"></a></br><h2>CabulAPI</h2>
   easy, feature rich, wholesome


</div>

# Cabul
Next level hentai generator.  
Cabul is aggregator with the dedicated subreddits. This wrapper exist as a directory of all hentai-related subreddit. TLDR; make it into readable res.  

## Getting started

```sh
# npm
npm i cabul

# yarn
yarn add cabul
```

## Usage

All functions return <code>Promise()</code>

```js
const { Client } = require('cabul');
const reddit = new Client();

reddit.atago().then((res) => console.log(res.data));
```

## Mix 'em all

Useful enough to mix them if your implementation based on Telegram or Discord bot/webhook.

```js
const { Client } = require('cabul');
const reddit = new Client();

async function mix() {
    const list = [
        reddit.atago(),
        reddit.ecchi(),
        reddit.hentai() // and your more subreddit going below
    ];
    const random = list[Math.floor(Math.random() * list.length)];
    let rlist = await random;
    console.log(rlist.data);
}

mix().catch((err) => console.log(err.message));
```

## Useful keys:
<details>
  <summary>Show example</summary>
  <img src="test/Discord.png" width="600"></img>
</details>  

-   **res.data** all data
-   **res.data.url_overridden_by_dest** Actionable image/videos/gifs
-   **res.data.permalink** Actionable links
-   **res.data.title** Title post
-   **res.data.subreddit_name_prefixed** name of the Subreddit. eg: /r/blonde
-   **res.data.score** number of Score
-   **res.data.subreddit_subscribers** number of Subscribers
-   **res.data.num_comments** number of Comment in a post related
-   **res.data.ups** number of Upvotes
-   **res.data.downs** number of Downvotes
-   Other key check the rest in the **data**



## Example Returns of `res.data`:
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


## Eof

Some function may banned or priv8 only, adjust with your own handler.

## Docs
Read it if can help you, over 60 available here.
[Documentation](https://sinkaroid.github.io/cabul 'Documentaion')
<details>
<summary>Show tables</summary>

| Function         | subReddit                                                              | description                                                                                                              |
| ---------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
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


## Todo

-   [x] Hentai
-   [ ] Real (porn)

## Legal

This tool can be freely copied, modified, altered, distributed without any attribution whatsoever. However, if you feel like this tool deserves an attribution, mention it. It won't hurt anybody :)

Please, read the [license terms](LICENSE). Don't worry, it can be read in less than 30 seconds, unless you have some sort of reading disability - in that case, I'm wondering why you're still reading this text. Really. Stop. Please. I mean, seriously. Why are you still reading?

## Acknowledgements

Since this tool includes some contributions, and I'm not an asshole, I'll publically thank the following users for their help:

-   [/r/Hentai](https://www.reddit.com/r/hentai) Data reference
