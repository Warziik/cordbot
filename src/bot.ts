import { Client, Message, GuildMember, GuildChannel, TextChannel } from 'discord.js';

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
        // S'exécute lorsque le bot est prêt
        this.bot.on('ready', () => {
            // this.bot.user.setAvatar('assets/avatar.png'); // Décommenter cette ligne si vous souhaitez mettre un avatar au bot
            this.bot.user.setActivity('Être à votre service.');
        })

        // S'exécute lorsqu'un utilisateur rejoint le server pour la première fois
        this.bot.on('guildMemberAdd', (member: GuildMember) => {
            const channel: GuildChannel | undefined = member.guild.channels.find(ch => ch.name === 'home' || ch.name === 'accueil');
            if (!channel || channel.type !== 'text') return;

            const channelText = <TextChannel>channel;
            channelText.send(`Bienvenue, ${member}`);
        })

        // Intercepte les messages, vérifie si c'est une commande, si c'est le cas, la classe Command s'occupe de les parser
        this.bot.on('message', (message: Message) => {
            if (!message.content.startsWith('!')) return;
            Command.parse(message);
        })

        // Connecte le bot
        this.bot.login(this.discord_token);
    }
}