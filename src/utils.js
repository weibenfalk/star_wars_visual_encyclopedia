export const createEndpoint = (state, loadMore, category, searchTerm = '&') => {
  return `https://swapi.co/api/${category}/?page=${
    loadMore ? state.nextPage : "1"
  }${searchTerm !== "&" ? `&search=${searchTerm}` : loadMore ? `&search=${state.searchTerm}` : ''}`;
};

export const createEndpointSingle = (category, id) => {
  return `https://swapi.co/api/${category}/${id}`;
}

export const fetchItems = async endpoint => {
  const result = await (await fetch(endpoint)).json();
  return result;
};