import { Message, DMChannel, RichEmbed } from 'discord.js';
import CommandInterface from './command.interface';
import { staticImplements } from '../utils/decorators';
import { join } from 'path';

@staticImplements<CommandInterface>()
export default class HelpCommand {
    /**
     * Reçoit le message et exécute une action
     * @param message 
     */
    public static action(message: Message): void {
        message.author.createDM()
        .then((dmChannel: DMChannel) => {
            const embed: RichEmbed = new RichEmbed();
            embed
                .setTitle("List of commands")
                .setFooter("Do not answer")
                .setColor("#ff5500")
                .addField("!help", "Show all commands");

            if (message.member.hasPermission('MANAGE_MESSAGES')) embed.addField("!clear", "Clear history")

            dmChannel.sendEmbed(embed);

            setTimeout(() => {
                message.delete();
            }, 2000);
        })
        .catch(err => console.error);
    }
}