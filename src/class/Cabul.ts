import { hentai, irl, meme } from "../../endpoint.json";
import { get as fetch } from "superagent";
const popularity = ["hot", "top", "new", "controversial"];

export default interface Cabul {
  hentai(type: "hentai", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "ecchi", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "netorare", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "kemonomimi", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "yuri", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "thighdeology", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "ahegao", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "monstergirl", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "hentaibondage", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "traphentai", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "pantsu", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "animemilfs", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "zettairyouiki", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "nekomimi", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "paizuri", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "animebooty", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "waifusgonewild", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "gameovergirls", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "sukebei", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "cumhentai", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "corruptionhentai", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "chiisaihentai", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "muchihentai", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "tentai", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "dekaihentai", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "yaoi", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "oralhentai", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "animearmpits", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "animebodysuits", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "rippedanimelegwear", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "atago", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "handbras", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "elfhentai", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "ecchibondage", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "hentaicleavage", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "maidhentai", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "usagimimi", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "hentailactation", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "ashihentai", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "lewdanimegirls", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "taihou", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "christmascake", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "churchofrikka", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "hentaihearts", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "bisexualhentai", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "hentaismothering", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "vacuumhentai", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "hentaihumiliation", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "hentaiforniphilia", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "officelady", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "2dtittytouching", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "inumimi", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "hentaicumsluts", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "heterochromiahentai", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "mechanicalsluts", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "pokeporn", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "rule34", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "westernhentai", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "rule34lol", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "arknuts", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "overwatch_porn", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "2booty", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "kanmusunights", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "animemidriff", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "publichentai", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "subwayhentai", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "cutetraps", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "stuckhentai", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "kuroihada", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "tanime", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "thighhighhentai", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "uncensoredhentai", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "hentaipetgirls", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "soakedhentai", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "upskirthentai", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "embarrassedhentai", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "swimsuithentai", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "animelegs", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "masturbationhentai", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "hentaibreeding", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "uniform_hentai", sortby: string, no_random: boolean): Promise<string>;
  hentai(type: "skindentation", sortby: string, no_random: boolean): Promise<string>;

  irl(type: "gonewild", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "nsfw", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "nsfw_gif", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "realgirls", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "holdthemoan", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "bustypetite", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "cumsluts", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "nsfw_gifs", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "legalteens", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "petitegonewild", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "adorableporn", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "girlsfinishingthejob", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "amateur", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "asiansgonewild", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "rule34", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "biggerthanyouthought", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "porninfifteenseconds", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "ass", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "tittydrop", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "collegesluts", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "pawg", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "happyembarrassedgirls", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "nsfwfunny", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "milf", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "onoff", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "lipsthatgrip", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "porn", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "boobies", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "celebnsfw", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "blowjobs", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "gwcouples", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "nsfwhardcore", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "watchltfortheplot", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "dirtysmall", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "homemadexxx", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "trashyboners", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "nsfwcosplay", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "gonewildcurvy", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "girlsinyogapants", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "juicyasians", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "asstastic", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "palegirls", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "pussy", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "60fpsporn", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "nsfw_snapchat", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "curvy", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "freeuse", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "straightgirlsplaying", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "gonewild3oplus", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "workgonewild", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "anal", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "asianhotties", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "festivalsluts", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "tinytits", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "wifesharing", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "thick", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "lesbians", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "godpussy", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "morbidreality", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "grool", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "pornvids", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "gonewildstories", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "gwcumsluts", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "girlswithglasses", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "bodyperfection", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "rearpussy", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "nsfw411", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "ginger", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "redheads", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "jizzedtothis", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "bigboobsgw", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "stacked", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "hotwife", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "whenitgoesin", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "toocuteforporn", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "sexinfrontofothers", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "gettingherselfoff", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "darkjokes", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "gonewildaudio", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "18_19", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "bigasses", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "boobbounce", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "creampies", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "porn_gifs", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "theratio", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "tightdresses", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "hotchickswithtattoos", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "burstingout", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "facedownassup", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "breedingmaterial", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "gonewildtube", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "altgonewild", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "o_faces", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "amateurcumsluts", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "hugeboobs", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "shelikesitrough", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "suicidegirls", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "cutelittlebutts", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "tipofmypenis", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "randomactsofblowjob", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "fitgirls", sortby: string, no_random: boolean): Promise<string>;
  irl(type: "upskirt", sortby: string, no_random: boolean): Promise<string>;

  meme(type: "sexuallyexplicitmemes", sortby: string, no_random: boolean): Promise<string>;
  meme(type: "nsfwfunny", sortby: string, no_random: boolean): Promise<string>;
  meme(type: "deepfriedhentai", sortby: string, no_random: boolean): Promise<string>;
  meme(type: "pornmemes", sortby: string, no_random: boolean): Promise<string>;
  meme(type: "nsfwmemes", sortby: string, no_random: boolean): Promise<string>;
  meme(type: "hentaimemes", sortby: string, no_random: boolean): Promise<string>;
  meme(type: "hentaidankmemes", sortby: string, no_random: boolean): Promise<string>;
  meme(type: "hentai_memes", sortby: string, no_random: boolean): Promise<string>;
  meme(type: "nsfwanimemes", sortby: string, no_random: boolean): Promise<string>;
  meme(type: "pornomemes", sortby: string, no_random: boolean): Promise<string>;

}

/**
 * Cabul client
 * @export
 * @class Cabul
 */
export default class Cabul {
  private baseURL: string;
  private fetch;

  /**
   * Creates an instance of Cabul.
   * @memberof Cabul
   */
  public constructor() {
    this.baseURL = "https://scathach.redsplit.org/v4/reddit_cabul/?s=";
    this.fetch = fetch;
  }


  /**
   * @param {String} type The related hentai endpoint
   * @param {String} sortby Must be following: "hot" | "new" | "top" | "controversial"
   * @param {Boolean} no_random If true, will return 25 items instead of 1 random. Default is false.
   */
  public async hentai(type: string, sortby: string, no_random: boolean): Promise<string> {
    if (!type) throw new Error("Type must given");
    if (!hentai[type]) throw new ReferenceError("No results. Make sure you spelled everything right.");
    if (no_random && typeof no_random !== "boolean") throw new TypeError("Third parameter must be a boolean");
    if (!sortby) sortby = popularity[Math.floor(Math.random() * popularity.length)];
    if (sortby !== sortby.toLowerCase()) sortby = sortby.toLowerCase();

    if (!["top", "new", "hot", "controversial"].includes(sortby))
      throw new ReferenceError(
        "Sort must be one of the following: top, new, hot, controversial"
      );

    try {

      const { body } = await fetch(
        this.baseURL + hentai[type] + "&sort=" + sortby + "&get_25_item=" + no_random
      );

      if (!body) throw new Error("No results. Probably related subreddit is currently banned or private only")
      return body;
    } catch (e) {
      throw new Error(e);
    }

  }


  /**
  * @param {String} type The related irl endpoint
  * @param {String} sortby Must be following: "hot" | "new" | "top" | "controversial"
  * @param {Boolean} no_random If true, will return 25 items instead of 1 random. Default is false.
  */
  public async irl(type: string, sortby: string, no_random: boolean): Promise<string> {
    if (!type) throw new Error("Type must given");
    if (!irl[type]) throw new ReferenceError("No results. Make sure you spelled everything right.");
    if (no_random && typeof no_random !== "boolean") throw new TypeError("Third parameter must be a boolean");
    if (!sortby) sortby = popularity[Math.floor(Math.random() * popularity.length)];
    if (sortby !== sortby.toLowerCase()) sortby = sortby.toLowerCase();

    if (!irl[type]) throw new ReferenceError("No results. Make sure you spelled everything right.");

    if (!["top", "new", "hot", "controversial"].includes(sortby))
      throw new ReferenceError(
        "Sort must be one of the following: top, new, hot, controversial"
      );

    try {
      const { body } = await fetch(
        this.baseURL + irl[type] + "&sort=" + sortby + "&get_25_item=" + no_random
      );

      if (!body) throw new Error("No results. Probably related subreddit is currently banned or private only")
      return body;
    } catch (e) {
      throw new Error(e);
    }

  }


  /**
  * @param {String} type The related meme endpoint
  * @param {String} sortby Must be following: "hot" | "new" | "top" | "controversial"
  * @param {Boolean} no_random If true, will return 25 items instead of 1 random. Default is false.
  */
  public async meme(type: string, sortby: string, no_random: boolean): Promise<string> {
    if (!type) throw new Error("Type must given");
    if (!meme[type]) throw new ReferenceError("No results. Make sure you spelled everything right.");
    if (no_random && typeof no_random !== "boolean") throw new TypeError("Third parameter must be a boolean");
    if (!sortby) sortby = popularity[Math.floor(Math.random() * popularity.length)];
    if (sortby !== sortby.toLowerCase()) sortby = sortby.toLowerCase();

    if (!meme[type]) throw new ReferenceError("No results. Make sure you spelled everything right.");

    if (!["top", "new", "hot", "controversial"].includes(sortby))
      throw new ReferenceError(
        "Sort must be one of the following: top, new, hot, controversial"
      );

    try {
      const { body } = await fetch(
        this.baseURL + meme[type] + "&sort=" + sortby + "&get_25_item=" + no_random
      );

      if (!body) throw new Error("No results. Probably related subreddit is currently banned or private only")
      return body;
    } catch (e) {
      throw new Error(e);
    }

  }
}
