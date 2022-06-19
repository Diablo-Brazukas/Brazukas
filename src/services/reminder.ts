import moment from 'moment';
import { EVENTS_TIME, EventKey, Event } from '../util/diablo';

export const remindIfNecessary = () => {
  // Checar times
  // - Verificar se times batem com o horario chegando
  // - Se bater -> Mandar mensagem avisando sobre evento
  // - Se nao bater -> Skippar

  const currentDate = moment();
  const currentDay = currentDate.day();

  const reminders: Event[] = [];

  Object.keys(EVENTS_TIME).forEach((eventTimeKey) => {
    const events = EVENTS_TIME[eventTimeKey as EventKey];

    events.forEach((event) => {
      // O evento se importa com o dia
      if (event.days) {
        if (!event.days.includes(currentDay)) return;
      }

      event.times.forEach((time) => {
        const dayToSet = event.days?.find((day) => day === currentDay);

        const dateFromTime = moment().set({ day: currentDay, ...time });

        const diff = dateFromTime.diff(currentDate);

        const shouldRemind = diff <= 600000 && diff > 0; //10 minutos

        if (shouldRemind) {
          reminders.push(event);
        }
      });
    });
  });
  console.log(`Reminder (${currentDate})`);
  return reminders;
};
