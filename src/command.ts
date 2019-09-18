import { Message } from 'discord.js';

import PingCommand from './commands/ping.command';

export default class Command {
    /**
     * Reçoit la commande et l'envoie  à la classe correspondante
     * @param message 
     */
    public static parse(message: Message): void {
        const messageText: string = message.content.substring(1);
        switch (messageText) {
            case 'ping':
                PingCommand.action(message);
                break;
            default:
                break;
        }
    }
}