import { Message } from 'discord.js';

export default interface CommandInterface {
    /**
    * Reçoit le message et exécute une action
    * @param message
    */
    action(message: Message): void;
}