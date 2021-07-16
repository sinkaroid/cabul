import fetch from 'node-fetch';
import { stringify } from 'query-string';

/**
 * @interface CabulClientOptions
 */
interface CabulClientOptions {
    url: string;
}

/**

 * @interface CabulResponse
 */
interface CabulResponse {
    code: number;
    url: string;
}

/**
 * CabulClient
 *
 * @class CabulClient
 */
class CabulClient {
    private baseURL: string;

    constructor(
        options: CabulClientOptions = {
            url: 'http://192.145.238.5'
        }
    ) {
        this.baseURL = options.url;
    }

    /**
     *
     * @return {*} [/r/Hentai](https://www.reddit.com/r/Hentai)
     * @memberof CabulClient
     */
    hentai() {
        return this.get('hentai');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    ecchi() {
        return this.get('ecchi');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    netorare() {
        return this.get('netorare');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    kemonomimi() {
        return this.get('kemonomimi');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    yuri() {
        return this.get('yuri');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    thicc() {
        return this.get('thicc');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    ahegao() {
        return this.get('ahegao');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    monster() {
        return this.get('monster');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    bondage() {
        return this.get('hentaibondage');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    trap() {
        return this.get('trap');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    pantsu() {
        return this.get('pantsu');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    milf() {
        return this.get('milf');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    zettairyouiki() {
        return this.get('zettairyouiki');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    nekomimi() {
        return this.get('nekomimi');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    paizuri() {
        return this.get('paizuri');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    booty() {
        return this.get('booty');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    waifusgonewild() {
        return this.get('waifusgonewild');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    gameovergirls() {
        return this.get('gameovergirls');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    sukebei() {
        return this.get('sukebei');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    cum() {
        return this.get('cum');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    corruptionhentai() {
        return this.get('corruptionhentai');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    chiisai() {
        return this.get('chiisai');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    muchi() {
        return this.get('muchi');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    tentai() {
        return this.get('tentai');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    dekai() {
        return this.get('dekai');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    yaoi() {
        return this.get('yaoi');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    oral() {
        return this.get('oral');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    armpits() {
        return this.get('armpits');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    bodysuits() {
        return this.get('bodysuits');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    rippedlegwear() {
        return this.get('rippedlegwear');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    atago() {
        return this.get('atago');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    handbras() {
        return this.get('handbras');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    elf() {
        return this.get('elf');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    ecchibondage() {
        return this.get('ecchibondage');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    cleavage() {
        return this.get('cleavage');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    maid() {
        return this.get('maid');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    usagi() {
        return this.get('usagi');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    lactation() {
        return this.get('lactation');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    feet() {
        return this.get('feet');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    lewd() {
        return this.get('lewd');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    taihou() {
        return this.get('taihou');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    christmascake() {
        return this.get('christmascake');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    rikka() {
        return this.get('rikka');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    hearts() {
        return this.get('hearts');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    bisex() {
        return this.get('bisex');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    smothering() {
        return this.get('smothering');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    vacuum() {
        return this.get('vacuum');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    humiliation() {
        return this.get('humiliation');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    forniphilia() {
        return this.get('forniphilia');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    officelady() {
        return this.get('officelady');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    dtittytouching() {
        return this.get('2dtittytouching');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    inumimi() {
        return this.get('inumimi');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    cumsluts() {
        return this.get('cumsluts');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    heterochromia() {
        return this.get('heterochromia');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    ai() {
        return this.get('ai');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    pokeporn() {
        return this.get('pokeporn');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    rule34() {
        return this.get('rule34');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    western() {
        return this.get('western');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    lol() {
        return this.get('lol');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    arknuts() {
        return this.get('arknuts');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    overwatch() {
        return this.get('overwatch');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    twob() {
        return this.get('2b');
    }

    /**
     *
     * @return {*}
     * @memberof CabulClient
     */
    kanmusunights() {
        return this.get('kanmusunights');
    }

    /**
     * @param {string} endpoint
     * @param {string} [user='~pasirm5']
     * @param {string} [version='v3']
     * @param {string} [folder='redditjanda']
     * @param {string} [wrap='cabul.php']
     * @param {object} [params]
     * @return {*}
     * @memberof CabulClient
     */
    async get(
        endpoint: string,
        user: string = '~pasirm5',
        version: string = 'v3',
        folder: string = 'redditjanda',
        wrap: string = 'cabul.php',
        params?: object
    ) {
        let fetchURL = `${this.baseURL}/${user}/${version}/${folder}/${wrap}/?${endpoint}`;
        if (params) {
            fetchURL += stringify(params);
        }
        const res = await fetch(fetchURL);
        if (res.status !== 200) throw res;
        const data: CabulResponse = await res.json();
        return data;
    }
}

export default CabulClient;
