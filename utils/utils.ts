import phin from "phin";
/**
   * GET request to scathach bot API
   * @param url The related endpoint
   * @param headers custom headers that you pass to the request
   * @returns Promise that resolves to the response body
   */
export async function get(url: string, headers: string) {
  return await phin({
    method: "get",
    url: url,
    headers: {
      "User-Agent": headers,
    },
    parse: "json",
    timeout: 10000
  });
}

/**
 * 
 * @param array The array to be shuffled
 * @returns The shuffled array
 */
export function shuffle(array: unknown[]) {
  let currentIndex = array.length,  randomIndex;

  while (currentIndex != 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

/**
   * random array in place.
   * @param arr An array containing the items.
   * @returns shuffled array
   */
export function randomArray(arr: string) {
  return arr[Math.floor(Math.random() * arr.length)];
}