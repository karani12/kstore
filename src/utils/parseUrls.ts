export function parseUrls(inputString: string): string[] {
    const regex: RegExp = /https?:\/\/\S+/g;
    const urls: string[] = inputString.match(regex) || [];
    console.log(urls);
    return urls;
}