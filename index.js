function rexios(config) {
  let {
    method = 'get',
    baseURL = '/',
    params,
    params: data,
    params: { id = '' },
  } = {
    params: {},
    ...config,
  };

  const args = {
    url: `${baseURL}${id}${String(id).length > 0 ? '/' : ''}`,
    data,
    params: { params },
  };

  switch (method) {
    case 'copy':
      delete args.data;
      method = 'post';
      break;
    case 'post':
      delete args.params;
      args.url = baseURL;
      break;
    case 'put':
      delete args.params;
      break;
    case 'delete':
      delete args.params;
      delete args.data;
      break;
    default:
      delete args.data;
      if (Reflect.has(args.params.params, 'id')) {
        delete args.params.params.id;
      }
      break;
  }

  return {
    method,
    args: Object.values(args),
  };
}

module.exports = {
  rexios,
};
