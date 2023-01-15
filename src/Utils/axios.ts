import axios from 'axios';

const api_read_token =
  'ba1ee6fa777403c515f5ec9007444d62155673fa14278e7cc637913aafe5d54243cf1a53e922d4bff9f8ca4776fae50f20b5882dc376291349039305a45e53574c1ae62d87aeb741b0c3571a46c5a12d0529741aeaf8af5ee24aba07025b8a2f77a7db9c38799c81059e6cfb098bfd300d0d25c9c5af50f17fb829b48a258f5c';

const email_token =
  '0c0224ebf86c18038077ebf5fdeef2ed2a63e3701c16816325278052198982372ada2832df2cb190d9528ee9ce02810597801c431535e58f5be366ba29761042187161a1ccc5b795596f7ff70a9786bdbcaf296720b25d3147b7b841570ff96693188bb21b19bbcb7f6365acac3306aeade3925e3ecf98e1927819ee2a3ad493';

export const instance = axios.create({
  baseURL: 'https://portfolio-blog.fly.dev/api',
  headers: {
    authorization: `Bearer ${api_read_token}`,
  },
});

export const emailInstance = axios.create({
  baseURL: 'https://portfolio-blog.fly.dev/api',
  headers: {
    authorization: `Bearer ${email_token}`,
  },
});
