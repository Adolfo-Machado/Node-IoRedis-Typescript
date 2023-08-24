// services/logService.ts
export const logService = (req:any) => {
  let logs = [];

  logs.push(`\n${req.method} ${req.originalUrl}`);

  if(Object.keys(req.params).length > 0)
      logs.push(`PARAMS: ${JSON.stringify(req.params)}`);

  if(Object.keys(req.query).length > 0)
      logs.push(`QUERY: ${JSON.stringify(req.query)} `);

//   if(Object.keys(req.body).length > 0)
//       logs.push(`BODY: ${JSON.stringify(req.body)}`);

  console.log(logs.join('\n'));
}

