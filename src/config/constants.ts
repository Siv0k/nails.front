import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';

export const TITLE = 'Nails_npolotsk';
export const COPYRIGHT = 'nails_npolotsk.by 2023 ©';

export const SOCIAL_LINKS = [
  {
    link: '#telegram',
    Icon: TelegramIcon,
  },
  {
    link: '#instagram',
    Icon: InstagramIcon,
  },
] as const;


export const ROOT_ROUTER = '/';

export const ROUTES = {
  SERVICES: {
    url: '/services',
    label: 'Услуги',
  },
  GALLERY: {
    url: '/gallery',
    label: 'Галерея',
  },
  SUBSCRIBE: {
    url: '/subscribe',
    label: 'Запись',
  },
  TRAINING: {
    url: '/training',
    label: 'Обучение',
  },
  CONTACTS: {
    url: '/contacts',
    label: 'Контакты',
  },
} as const;

export const NAIL_CONTACT_INFO = {
  EMAIL: 'nails_npolotsk@gmail.com',
  PHONE: '+375 (33) 357-15-91',
  ADDRESS: 'Новополоцк, ул. Юбилейная, 2A',
  WORK_TIME: {
    START: '9:00',
    END: '20:00',
  },
} as const;

export const TIME_INTERVAL = [
  '9:00',
  '9:30',
  '10:00',
  '11:00',
  '11:30',
  '12:30',
  '17:30',
  '18:00',
  '18:30',
  '19:00',
  '19:30',
  '20:00',
] as const;