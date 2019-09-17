import * as Discord from 'discord.js';

import 'dotenv/config';

export default class Bot {
    private bot: Discord.Client;
    private readonly discord_token: string | undefined = process.env.DISCORD_TOKEN;

    constructor() {
        this.bot = new Discord.Client();
    }

    /**
     * Lance le bot
     * @return void
     */
    public start(): void {
        this.bot.login(this.discord_token);
    }
}