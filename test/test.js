const { Cabul } = require('./../build/src/index');
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
