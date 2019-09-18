import { Client, Message } from 'discord.js';

import 'dotenv/config';
import Command from './command';

export default class Bot {
    private bot: Client;
    private readonly discord_token: string | undefined = process.env.DISCORD_TOKEN;

    constructor() {
        this.bot = new Client();
    }

    /**
     * Lance le bot
     * @return void
     */
    public start(): void {
        // Intercepte les messages, vérifie si c'est une commande, si c'est le cas, la classe Command s'occupe de les parser
        this.bot.on('message', (message: Message) => {
            if (!message.content.startsWith('!')) return;
            Command.parse(message);
        })

        // Connecte le bot
        this.bot.login(this.discord_token);
    }
}