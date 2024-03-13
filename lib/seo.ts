export const seo = {
  title: 'Elle |  开发者、梦想家、细节控、小清新',
  description:
    '我叫 Elle，开发者、梦想家、细节控、小清新，还依旧是一名学生，希望我的博客给大家带来更多的乐趣和收获。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://cali.so'
      : 'http://localhost:3000'
  ),
} as const
