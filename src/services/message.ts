import { MessageOptions, MessagePayload, TextBasedChannel, Message } from 'discord.js';
import { getChannelByIdFromGuild, getGuildById } from './discord';
import { constants } from '../conf';

type SendMessage = MessagePayload | MessageOptions | string;

type SendMessageToChannelArgs = {
  message: SendMessage,
  onMessageSent: (sentMessage: Message<boolean>) => void,
  onMessagError: (err: unknown) => void
}

export const sendMessageToChannel = async ({message, onMessageSent, onMessagError}: SendMessageToChannelArgs) => {
  let guild = getGuildById(constants.guildId);

  if (guild == null) {
    console.log('Server not found');
    return;
  }

  let channel = getChannelByIdFromGuild(
    constants.channelId,
    guild
  ) as TextBasedChannel;

  if (channel == null) {
    console.log('Channel not found');
    return;
  }

  try {
    const sentMessage = await channel.send(message);
    onMessageSent(sentMessage)
  }catch(err){
    onMessagError(err)
  }
};
