import { Message } from 'discord.js';

import HelpCommand from './commands/help.command';
import ClearCommand from './commands/clear.command';

export default class Command {
    /**
     * Reçoit la commande et l'envoie  à la classe correspondante
     * @param message 
     */
    public static parse(message: Message): void {
        const messageText: string = message.content.substring(1);
        switch (messageText) {
            case 'help':
                HelpCommand.action(message);
                break;
            case 'clear':
                ClearCommand.action(message);
                break;
            default:
                break;
        }
    }
}