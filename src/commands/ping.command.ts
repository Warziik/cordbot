import { Message } from 'discord.js';
import CommandInterface from './command.interface';
import { staticImplements } from '../utils/decorators';

@staticImplements<CommandInterface>()
export default class PingCommand {
    /**
     * Reçoit le message et exécute une action
     * @param message 
     */
    public static action(message: Message): void {
        message.reply('pong'); // Renvoie 'pong' en mentionnant l'utilisateur
    }
}