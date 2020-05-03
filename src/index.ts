import express from 'express';

import server from './server';

const PORT: number = 8080;

server.listen(PORT || 3000, () => {
  // tslint:disable-next-line:no-console
  console.log(`Up and running on PORT ${PORT || 3000}`);
});
