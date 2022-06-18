import { client } from './bot';
import { CronJob } from 'cron';
import { MessageOptions } from 'discord.js';
import { constants } from './conf';
import commonMessages from './util/commonMessages';

import { sendMessageToChannel } from './services/message';
import { getGuildById } from './services/discord';

async function startApp() {
  await client.login();

  // Estamos liberados pra f azer o que quiser com client apos logar...

  let guild = getGuildById(constants.guildId);

  if (!guild) {
    console.log('Guild not found.');
    return;
  }

  // '0 3 * * *' 3 HORAS DA MANHA
  // '*/10 * * * * *' 10  segundos para teste

  const job = new CronJob(
    '*/10 * * * * *',
    () => sendMessageToChannel({
        message: commonMessages.buildDiaryMessageReminder(guild!),
        onMessageSent: () => console.log('Mensagem diaria enviada com sucesso'),
        onMessagError: () => console.log('Ocorreu um erro ao mandar: Mensagem diaria')
    }),
    () => {},
    false,
    'America/Sao_Paulo'
  );

  job.start();
}

startApp();
