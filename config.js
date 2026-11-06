/* =====================================================================
   НАСТРОЙКИ САЙТА
   Всё, что нужно поменять (тексты, время, адреса, ссылки), — здесь.
   Вёрстку в index.html трогать не нужно.
   ===================================================================== */
window.WEDDING = {

  couple: {
    ru: ['Сергей', 'Виктория'],
    en: ['Sergey', 'Victoria'],
  },

  // Время указывается по Праге (+01:00 — зимнее время).
  timeZone: 'Europe/Prague',
  start:    '2027-01-22T12:00:00+01:00',   // начало дня — для обратного отсчёта
  end:      '2027-01-22T23:00:00+01:00',   // конец — для календаря

  // Куда отправлять ответы анкеты: URL веб-приложения Google Apps Script
  // (Google Таблица «Свадьба — анкета гостей», аккаунт filoks13@gmail.com).
  // Пусто — анкета работает в демо-режиме и ничего не сохраняет.
  rsvpEndpoint: 'https://script.google.com/macros/s/AKfycbwPzuQBYlRReJPTjWkHWY9tGmixG1VspCX4QE-SijHQSLUKS1TPtr6MHn8tCZYnhwnJ2Q/exec',

  // До какого числа ждём ответ (пусто — строка не показывается). Пример: '2027-01-08'
  rsvpDeadline: '',

  // Фото: положите файлы в папку img/. Если файла нет — показывается
  // аккуратная декоративная заглушка, сайт не «ломается».
  photos: {
    hero:     'img/hero.jpg',      // обложка (вертикальное фото пары, 3:4)
    ceremony: '',                  // обрядный зал ратуши — например 'img/ceremony.jpg'
    banquet:  '',                  // Veranda by Gazda — например 'img/banquet.jpg'
    closing:  'img/closing.jpg',   // финальное фото (3:4)
  },

  // ---------------- ТРАНСЛЯЦИЯ ----------------
  live: {
    start: '2027-01-22T12:20:00+01:00',
    end:   '2027-01-22T13:45:00+01:00',

    // Основной плеер — VK Видео: открывается и в России (YouTube и Telegram
    // там заблокированы), и за границей без регистрации.
    //   embed — адрес плеера для встраивания (VK: «Поделиться» → «Экспортировать» → src из кода iframe),
    //   link  — обычная ссылка на эфир (если встроить не получилось — на сайте будет кнопка «Смотреть»).
    // Второй источник (YouTube) — необязательный резерв для гостей из США/Европы.
    // Гостям из России всегда показывается источник с russia: true.
    // Пустые источники на странице не показываются.
    // Прямая ссылка на нужный плеер: ваш-сайт/?player=vk#live
    sources: [
      { id: 'vk',      label: 'VK Видео', embed: '', link: '', russia: true },
      { id: 'youtube', label: 'YouTube',  embed: '', link: '' },
    ],

    // Часы в блоке трансляции
    cities: [
      { tz: 'Europe/Prague',    ru: 'Прага',    en: 'Prague' },
      { tz: 'Europe/Moscow',    ru: 'Москва',   en: 'Moscow' },
      { tz: 'America/New_York', ru: 'Нью-Йорк', en: 'New York' },
    ],
  },

  // Необязательно: ссылка на общий альбом, куда гости грузят фото (Google Фото и т.п.).
  photoAlbum: '',

  // Необязательно: к кому обращаться с вопросами. Пустой список — блок скрыт.
  contacts: [
    // { ru: 'Стас — организационные вопросы', en: 'Stas — any questions', href: 'https://t.me/username' },
  ],

  // ---------------- ЛОКАЦИИ ----------------
  places: [
    {
      id: 'ceremony', time: '12:00',
      address: 'Havlíčkovo náměstí 700/9, 130 00 Praha 3 – Žižkov',
      map: 'https://www.google.com/maps/search/?api=1&query=Havl%C3%AD%C4%8Dkovo+n%C3%A1m%C4%9Bst%C3%AD+700%2F9+Praha+3',
      ru: { label: 'Церемония', name: 'Жижковская ратуша', note: 'Обрядный зал · Matrika Úřadu městské části Praha 3' },
      en: { label: 'Ceremony',  name: 'Žižkov Town Hall',  note: 'Wedding hall · Prague 3 Registry Office' },
    },
    {
      id: 'banquet', time: '15:00',
      address: '',
      map: 'https://www.google.com/maps/search/?api=1&query=Veranda+by+Gazda+Praha',
      ru: { label: 'Банкет',    name: 'Veranda by Gazda', note: 'Праздничный обед и ужин' },
      en: { label: 'Reception', name: 'Veranda by Gazda', note: 'Festive lunch & dinner' },
    },
  ],

  // ---------------- ПРОГРАММА ----------------
  timeline: [
    { time: '12:00',
      ru: { title: 'Сбор гостей', text: 'Встречаемся у Жижковской ратуши' },
      en: { title: 'Guests arrive', text: 'We meet at Žižkov Town Hall' } },
    { time: '12:30', live: true,
      ru: { title: 'Церемония', text: 'Торжественная регистрация брака' },
      en: { title: 'Ceremony', text: 'The wedding ceremony' } },
    { time: '13:30',
      ru: { title: 'Фотографии', text: 'Фотографируемся, чтобы запомнить этот день' },
      en: { title: 'Photos', text: 'Taking pictures to remember this day' } },
    { time: '15:00',
      ru: { title: 'Праздничный обед', text: '…плавно перетекающий в весёлый ужин · Veranda by Gazda' },
      en: { title: 'Celebration', text: 'A festive lunch flowing into a joyful dinner · Veranda by Gazda' } },
  ],

  // ---------------- ТЕКСТЫ ----------------
  // <em>…</em> — курсив в заголовках.
  text: {
    ru: {
      'hero.eyebrow':   'Приглашение на свадьбу',
      'hero.place':     'Прага',
      'hero.lead':      'Совсем скоро наступит день, который станет для нас особенным',

      'invite.eyebrow': 'Ждём вас',
      'invite.title':   'Дорогие гости!',
      'invite.text':    'Мы будем рады разделить с вами этот важный день и провести его в кругу самых близких людей.',

      'program.eyebrow':'22 января 2027',
      'program.title':  'Программа <em>дня</em>',

      'places.eyebrow': 'Прага',
      'places.title':   'Локации',

      'dress.eyebrow':  'Что надеть',
      'dress.title':    'Дресс-код',
      'dress.lead':     'У вас свободный выбор одежды — главное, чтобы вам было комфортно и красиво.',
      'dress.text':     'Будет очень классно, если вы дополните образ каким-нибудь необычным аксессуаром. Нам будет приятно увидеть вашу индивидуальность!',

      'rsvp.eyebrow':   'Анкета гостя',
      'rsvp.title':     'Будете <em>с нами?</em>',
      'rsvp.lead':      'Ответьте, пожалуйста, на несколько вопросов — это займёт меньше минуты и очень поможет нам всё подготовить.',

      'live.eyebrow':   'Для тех, кто далеко',
      'live.title':     'Свадьба <em>онлайн</em>',
      'live.lead':      'Не получается приехать в Прагу? Смотрите церемонию в прямом эфире — просто откройте эту страницу в нужное время. Вам не нужно ничего включать и ни с кем разговаривать: только смотреть и радоваться вместе с нами.',
      'live.tip1':      'Звук трансляции включается кнопкой в самом плеере.',
      'live.tip2':      'Если видео не грузится или тормозит — переключитесь на другой плеер.',

      'countdown.title':'До нашей свадьбы <em>осталось</em>',

      'album.title':    'Делитесь фотографиями',
      'album.text':     'Загружайте снимки со свадьбы в наш общий альбом — нам будет очень приятно!',
      'album.btn':      'Открыть альбом',
      'contacts.title': 'Остались вопросы?',

      'closing.text':   'Будем рады видеть вас и провести этот день вместе',
      'closing.sign':   'С любовью,',
    },
    en: {
      'hero.eyebrow':   'Wedding invitation',
      'hero.place':     'Prague',
      'hero.lead':      'Very soon comes a day that will be truly special for us',

      'invite.eyebrow': 'Save the date',
      'invite.title':   'Dear guests!',
      'invite.text':    'We would be delighted to share this important day with you and spend it surrounded by the people closest to us.',

      'program.eyebrow':'22 January 2027',
      'program.title':  'The <em>day</em>',

      'places.eyebrow': 'Prague',
      'places.title':   'Venues',

      'dress.eyebrow':  'What to wear',
      'dress.title':    'Dress code',
      'dress.lead':     'Wear whatever you like — what matters most is that you feel comfortable and beautiful.',
      'dress.text':     'It would be wonderful if you added an unusual accessory to your look. We’d love to see your personality!',

      'rsvp.eyebrow':   'RSVP',
      'rsvp.title':     'Will you <em>join us?</em>',
      'rsvp.lead':      'Please answer a few quick questions — it takes less than a minute and helps us plan everything.',

      'live.eyebrow':   'For those far away',
      'live.title':     'Watch <em>online</em>',
      'live.lead':      'Can’t make it to Prague? Watch the ceremony live — just open this page at the right time. Nothing to set up and no one to talk to: simply watch and celebrate with us.',
      'live.tip1':      'Turn on the sound with the button inside the player.',
      'live.tip2':      'If the video doesn’t load or keeps buffering, switch to the other player.',

      'countdown.title':'Our wedding <em>begins in</em>',

      'album.title':    'Share your photos',
      'album.text':     'Upload your pictures from the day to our shared album — it would mean a lot to us!',
      'album.btn':      'Open the album',
      'contacts.title': 'Any questions?',

      'closing.text':   'We can’t wait to see you and spend this day together',
      'closing.sign':   'With love,',
    },
  },
};
