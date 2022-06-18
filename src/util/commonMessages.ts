import { Guild, MessageOptions } from 'discord.js';

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
      fields: [
        {
          name: 'Diárias comuns',
          value:
            '```- Caçadas\n- Legado de Horadritti\n- Quests Secundárias (3)```'
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

export default {
  buildDiaryMessageReminder
};
