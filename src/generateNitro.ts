import { v4 as uuidv4 } from 'uuid';
const DISCORD_BASE_PROMOTION_URL =
    "https://discord.com/billing/partner-promotions/1180231712274387115/";
// We will use this to exploit the nitro generator
async function generateNitro(): Promise<string | null> {
    const response = await fetch("https://api.discord.gx.games/v1/direct-fulfillment", {
        headers: {
            accept: "*/*",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/json",
            "sec-ch-ua":
                '"Chromium";v="118", "Opera GX";v="104", "Not=A?Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"Windows"',
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site",
            Referer: "https://www.opera.com/",
            "Referrer-Policy": "strict-origin-when-cross-origin",
        },
        body: JSON.stringify({ partnerUserId: uuidv4() }),
        method: "POST",
    });
    if (!response.ok) {
        throw new Error('Failed to contact Discord Nitro servers');
    }
    const data: any = await response.json();

    const token: string = data.token;
    return DISCORD_BASE_PROMOTION_URL + token;
}

export default generateNitro;