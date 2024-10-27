module.exports = {
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en', 'es'],
  },
  localePath:
    typeof window === 'undefined'
      ? require('path').resolve('./public/locales')
      : '/locales',
}
