export type Event = {
  title?: string;
  times: Array<{ hour: number; minute: number }>;
  days?: Array<number>;
  thumbnail?: string;
  imageURL?: string;
  location?: string;
};

export type EventKey = 'shadowMissions' | 'worldBosses';

export const EVENTS_TIME: Readonly<Record<EventKey, Event[]>> = Object.freeze({
  shadowMissions: [
    {
      title: 'Loteria das Sombras',
      times: [
        { hour: 12, minute: 0 },
        { hour: 18, minute: 0 },
        { hour: 21, minute: 0 }
      ],
      thumbnail:
        'https://static.wixstatic.com/media/96c242_eed75d1d704943b091085f1b4e30181b~mv2.jpg/v1/fill/w_148,h_148,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Screenshot_49.jpg'
    },
    {
      title: 'Cofre',
      times: [
        { hour: 12, minute: 0 },
        { hour: 19, minute: 0 }
      ],
      thumbnail:
        'https://static.wixstatic.com/media/96c242_09990beac9d546e2b2d0466074db7051~mv2.jpg/v1/fill/w_148,h_148,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Screenshot_49.jpg'
    },
    {
      title: 'Assembléia',
      days: [1, 2, 3, 4, 5, 6],
      times: [{ hour: 18, minute: 0 }],
      thumbnail:
        'https://static.wixstatic.com/media/96c242_b832d544348d4686a6d705b24d9a1b04~mv2.jpg/v1/fill/w_148,h_148,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Screenshot_49.jpg'
    },
    {
      title: 'Campos de Batalha',
      times: [
        { hour: 8, minute: 0 },
        { hour: 12, minute: 0 },
        { hour: 18, minute: 0 },
        { hour: 22, minute: 0 }
      ],
      thumbnail:
        'https://static.wixstatic.com/media/96c242_486a29d46a7b49289a5f25166b0432cf~mv2.jpg/v1/fill/w_148,h_148,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Screenshot_49.jpg'
    },
    {
      title: 'Rito do Exílio',
      days: [0],
      times: [{ hour: 20, minute: 0 }],
      thumbnail:
        'https://static.wixstatic.com/media/96c242_1747ba97b034463a8dca6f158abdaca4~mv2.jpg/v1/fill/w_148,h_148,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Screenshot_49.jpg'
    }
  ],
  worldBosses: [
    {
      title: 'Arena Ancestral',
      location: 'Lameira',
      days: [0, 2, 6],
      times: [{ hour: 21, minute: 30 }],
      imageURL:
        'https://static.wixstatic.com/media/96c242_a84bf71b02844248a1d8cfa10c89fef7~mv2.jpg/v1/fill/w_451,h_216,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Ancient_Nightmare.jpg',
      thumbnail:
        'https://static.wixstatic.com/media/96c242_abf8453d5edc41cf8b28934dbf45ebea~mv2.jpg/v1/fill/w_148,h_148,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Screenshot_49.jpg'
    },
    {
      title: 'Carruagem Assombrada',
      location: 'Cemitério de Ashwold',
      days: [2, 6],
      times: [
        { hour: 12, minute: 0 },
        { hour: 20, minute: 30 },
        { hour: 22, minute: 0 }
      ],
      imageURL:
        'https://static.wixstatic.com/media/96c242_da76df7a9e9549038b15bbb5eae47102~mv2.jpg/v1/fill/w_451,h_216,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Ancient_Nightmare.jpg',
      thumbnail:
        'https://static.wixstatic.com/media/96c242_cd56f7a692764685a511d8879afcab24~mv2.png/v1/fill/w_148,h_148,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screenshot_49.png'
    },
    {
      title: 'Portão Demoníaco',
      location: 'Reino da Perdição',
      days: [0, 1, 4],
      times: [
        { hour: 12, minute: 0 },
        { hour: 20, minute: 30 },
        { hour: 22, minute: 0 }
      ],
      imageURL:
        'https://static.wixstatic.com/media/96c242_b46a302cf32a44649098b7cc1597751f~mv2.jpg/v1/fill/w_451,h_216,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Ancient_Nightmare.jpg',
      thumbnail:
        'https://static.wixstatic.com/media/96c242_ff2be640faeb4dfbaefab839d021c865~mv2.jpg/v1/fill/w_148,h_148,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Screenshot_49.jpg'
    },
    {
      title: 'Pesadelo Ancestral',
      location: 'Monte Zavain',
      days: [3, 5],
      times: [
        { hour: 12, minute: 0 },
        { hour: 20, minute: 30 },
        { hour: 22, minute: 0 }
      ],
      imageURL:
        'https://static.wixstatic.com/media/96c242_66fdc9a226c14fdca597846cc29b7c0e~mv2.jpg/v1/fill/w_451,h_216,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Ancient_Nightmare.jpg',
      thumbnail:
        'https://static.wixstatic.com/media/96c242_7b142ef576bb4c838a87aba9bcf216ca~mv2.png/v1/fill/w_148,h_148,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screenshot_49.png'
    }
  ]
});
