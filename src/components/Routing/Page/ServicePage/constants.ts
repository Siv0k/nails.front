export const SERVICE_STRINGS = [
  'Снятие предыдущего покрытия',
  'Комбинированный маникюр',
  'Исправление клюющих ногтей(1-3 ногтя)',
  'Ремонт 1-3 ногтей(4 и больше - цена наращивания)',
  'Укрепление',
  'Достраивание уголков',
  'Любой дизайн',
] as const;

export const SERVICE_PRICE = [
  {
    title: 'Длина от 1 до 3',
    price: '40BYN',
  },
  {
    title: 'Длина от 4 до 6',
    price: '45BYN',
  },
  {
    title: 'Длина от 7 до 9',
    price: '50BYN',
  },
  {
    title: 'Длина от 10 до 12',
    price: '60BYN',
  },
] as const;

export const NAIL_EXTENSIONS_STRINGS = [
  'Снятие предыдущего покрытия',
  'Комбинированный маникюр',
  'Наращивание любой длины',
  'Любой дизайн',
] as const;

export const NAIL_EXTENSIONS_PRICE = [
  {
    title: 'Длина от 1 до 3',
    price: '50BYN',
  },
  {
    title: 'Длина от 4 до 6',
    price: '55BYN',
  },
  {
    title: 'Длина от 7 до 9',
    price: '65BYN',
  },
  {
    title: 'Длина от 10 до 12',
    price: '70BYN',
  },
] as const;

export const ADDITIONALLY_PRICE = [
  {
    title: 'Укрепление всех ногтей под квадрат, поднятие всех клюющих',
    price: '7BYN',
  },
  {
    title: 'Ремонт в течение 7 дней',
    price: '0BYN',
  },
  {
    title: 'Ремонт после 7 дней',
    price: '5BYN',
  },
]
