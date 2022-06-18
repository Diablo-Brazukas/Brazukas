import { Guild } from 'discord.js';
import { client } from '../bot';

export const getGuildById = (guildId: string) => client.guilds.resolve(guildId);

export const getChannelByIdFromGuild = (channelId: string, guild: Guild) => guild.channels.resolve(channelId);
