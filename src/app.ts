import { client } from './bot';
import { CronJob } from 'cron';
import { constants } from './conf';
import { remindIfNecessary } from './services/reminder';
import commonMessages from './util/commonMessages';

import { sendMessageToChannel } from './services/message';
import { getGuildById } from './services/discord';

async function startApp() {
  await client.login();

  // Estamos liberados pra fazer o que quiser com client apos logar...

  let guild = getGuildById(constants.guildId);

  if (!guild) {
    console.log('Guild not found.');
    return;
  }

  // '0 3 * * *' 3 HORAS DA MANHA
  // '*/10 * * * * *' 10  segundos para teste

  const diaryJob = new CronJob(
    '0 3 * * *',
    () =>
      sendMessageToChannel({
        message: commonMessages.buildDiaryMessageReminder(guild!),
        onMessageSent: () => console.log('Mensagem diaria enviada com sucesso'),
        onMessagError: () =>
          console.log('Ocorreu um erro ao mandar: Mensagem diaria')
      }),
    () => {},
    false,
    constants.timezone
  );

  const reminderJob = new CronJob(
    '*/10  * * * *',
    () => {
      let reminder = remindIfNecessary();
      reminder.forEach((event) => {
        sendMessageToChannel({
          message: commonMessages.buildEventReminderMessage(event, guild!),
          onMessageSent: () =>
            console.log(`Reminder de ${event.title} enviado!`),
          onMessagError: () =>
            console.log('Ocorreu um erro ao mandar o reminder')
        });
      });
    },
    () => {},
    false,
    constants.timezone
  );

  diaryJob.start();
  reminderJob.start();
}

startApp();
