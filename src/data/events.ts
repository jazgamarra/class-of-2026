export type EventItem = {
  id: string;
  label: string;
  title: string;
  dateLabel: string;
  timeLabel?: string;
  isoDate: string;
  place: string;
  mapUrl: string;
  note?: string;
};

export const events: EventItem[] = [
  {
    id: 'misa',
    label: 'Primero',
    title: 'Misa de acción de gracias',
    dateLabel: 'Miércoles 25 de noviembre',
    timeLabel: '08:00 hs',
    isoDate: '2026-11-25T08:00:00-03:00',
    place: 'Centro Educativo Sagrado Corazón de Jesús',
    mapUrl: 'https://maps.app.goo.gl/qodifDz2me3LK7xz6',
  },
  {
    id: 'certificados',
    label: 'Después',
    title: 'Acto de graduación',
    dateLabel: 'Viernes 4 de diciembre',
    timeLabel: '18:00 hs',
    isoDate: '2026-12-04T18:00:00-03:00',
    place: 'Centro Educativo Sagrado Corazón de Jesús',
    mapUrl: 'https://maps.app.goo.gl/qodifDz2me3LK7xz6',
  },
  {
    id: 'colacion',
    label: 'El gran día',
    title: 'Fiesta de colación',
    dateLabel: 'Jueves 17 de diciembre',
    timeLabel: '21:00 hs',
    isoDate: '2026-12-17T21:00:00-03:00',
    place: 'Talleywand Costanera',
    mapUrl: 'https://maps.app.goo.gl/2L9VUBkVkyhn239P8',
    note: 'Tenida: Elegante',
  },
];
