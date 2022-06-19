import { Guild, MessageOptions } from 'discord.js';
import { eventNames } from 'process';
import { Event } from './diablo';

const buildDiaryMessageReminder = (guild: Guild): MessageOptions => ({
  content: '@everyone',
  embeds: [
    {
      color: '#ebc934',
      author: {
        name: guild.name,
        icon_url: guild.iconURL() ?? undefined
      },
      title: 'BOM DIA BRAZUKAS - LEMBRETE DE ATIVIDADES DIÁRIAS',
      thumbnail: {
        url:
          'https://static-cdn.jtvnw.net/ttv-boxart/Diablo%20Immortal.jpg' ?? ''
      },
      fields: [
        {
          name: 'Diárias comuns',
          value:
            '```- Caçadas\n- Legado de Horadrim\n- Quests Secundárias (3)```'
        },
        {
          name: 'Diárias das sombras',
          value:
            '```- Contrato\n- Assembléia (18:00 ~ 20:00hrs)\n- Cofre (12:00 ~ 14:00 / 19:00 ~ 21:00hrs)\n- Campos de Batalha (3)```'
        },
        {
          name: 'Códice',
          value: '```- Bestiário (3)```'
        }
      ]
    }
  ]
});

const buildEventReminderMessage = (
  event: Event,
  guild: Guild
): MessageOptions => ({
  content: '@everyone',
  embeds: [
    {
      color: '#ebc934',
      author: {
        name: event.title ?? '',
        icon_url: guild.iconURL() ?? undefined
      },
      title: `O(a) ${event.title} vai começar em 10 minutos!`,
      thumbnail: {
        url: event.thumbnail ?? ''
      },
      image: {
        url: event.imageURL ?? ''
      },
      footer: {
        text: event.location ?? ''
      }
    }
  ]
});

export default {
  buildDiaryMessageReminder,
  buildEventReminderMessage
};
