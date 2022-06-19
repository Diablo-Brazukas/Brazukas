import 'dotenv/config';

export const constants = {
  discordToken: process.env.DISCORD_TOKEN,
  guildId: process.env.GUILD_ID ?? '',
  channelId: process.env.CHANNEL_ID ?? '',
  timezone: 'America/Sao_Paulo',
} 