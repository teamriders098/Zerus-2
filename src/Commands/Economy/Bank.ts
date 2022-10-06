import { BaseCommand, Command, Message } from '../../Structures'

@Command('bank', {
    description: '',
    usage: 'bank',
    category: 'economy',
    exp: 10,
    cooldown: 10
})
export default class command extends BaseCommand {
    override execute = async ({ from, sender, message }: Message): Promise<void> => {
        const { bank, tag } = await this.client.DB.getUser(sender.jid)
        const buttons = [
            {
                buttonId: 'id1',
                buttonText: { displayText: `${this.client.config.prefix}wallet` },
                type: 1
            }
        ]
        const buttonMessage = {
            text: `🏦 *Bank* 🏦\n\n⛩️ *Name: ${sender.username}*\n\n    💮 *tag: #${tag}*\n\n🪙 *Gold: ${bank}*`,
            footer: 'ZeRoTwO',
            buttons: buttons,
            headerType: 1
        }
        return void (await this.client.sendMessage(from, buttonMessage, {
            quoted: message
        }))
    }
}
