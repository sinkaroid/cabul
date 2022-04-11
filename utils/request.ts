/* eslint-disable @typescript-eslint/no-explicit-any */
import { get, shuffle, randomArray } from "./utils";

import c from "../constants";
type site = "reddit" | "nhentai"
const popularity: unknown = ["hot", "top", "new", "controversial"];
const rand: string = popularity as string;

export default async function request(url: site, options:
    {
        subreddit?: string | string[],
        apikey?: string,
        useragent?: string
    }) {

  switch (url) {
        
  case "reddit":
    if (!options.subreddit) throw Error("No subreddit provided");

    const reddit: any = (await get(`${c.reddit}/r/${options.subreddit.toString()}/${randomArray(rand)}.json?t=all&limit=25`, c.useragent)).body;

    let posts: unknown[] = [];
    for (let i = 0; i < reddit.data.children.length; i++) {
      posts.push(reddit.data.children[i].data);
    }

    posts = shuffle(posts);
    return posts;

  default:
    return {
      success: false,
      message: "Failed to get data"
    };
  }


}