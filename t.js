function test(config = {}) {
  let { params = { id: undefined } } = config;

  const { id } = params;

  console.log({ params, id });

  return config;
}

console.log(test());
