import { Message } from 'discord.js';
import CommandInterface from './command.interface';
import { staticImplements } from '../utils/decorators';

@staticImplements<CommandInterface>()
export default class ClearCommand {
    /**
     * Reçoit le message et exécute une action
     * @param message 
     */
    public static action(message: Message): void {
        if (!message.member.permissionsIn(message.channel).has('MANAGE_MESSAGES')) return;

        message.channel.messages.deleteAll().forEach(message => {
            message.catch(console.error);
        });
    }
}