// import { isServer, PORT } from '../constants/env';

// const envAwareFetch = (url: string, options?: Record<string, unknown>) => {
//   const fetchUrl =
//     isServer && url.startsWith('/') ? `http://localhost:${PORT}${url}` : url;

//   return fetch(fetchUrl, options).then((res) => res.json());
// };

// export { envAwareFetch as fetch };


  
import { isServer, PORT } from '../constants/env';

type FetchContext = {
  basePath: string;
};

const context: FetchContext = {
  basePath: '',
};

const initializeFetch = (basePath: string) => {
  context.basePath = basePath;
};

const getFetchUrl = (url: string) => {
  if (isServer) {
    return url.startsWith('/') ? `http://localhost:${PORT}${url}` : url;
  }

  return url.startsWith('/') ? context.basePath + url : url;
};

const envAwareFetch = (url: string, options?: Partial<RequestInit>) => {
  const fetchUrl = getFetchUrl(url);

  return fetch(fetchUrl, options).then((res) => res.json());
};

export { envAwareFetch as fetch, initializeFetch };
