import { Message } from 'discord.js';

export default interface CommandInterface {
    action(message: Message): void;
}