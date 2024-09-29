// АПИ для всего приложения
export const API = {
  product: {
    find: process.env.NEXT_PUBLIC_DOMAIN + "/api/product/find",
  },
  review: {
    createDemo: process.env.NEXT_PUBLIC_DOMAIN + "/api/review/create-demo",
  },
  topPage: {
    find: process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    id: process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/byAlias/",
  },
};

// https://courses-top.ru + ..............
