import server from '../../dist/server/server.js';

export default async (request, context) => {
  const response = await server.fetch(request, {}, context);
  return response;
};
