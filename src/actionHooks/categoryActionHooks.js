import { useStore } from "../store/store";
import { createEndpoint, fetchItems } from "../utils";

export const useInitialiseCategory = () => {
  const [state, setState] = useStore('categoryState');
  return async category => {
    setState({
      ...state,
      elements: [],
      loading: true
    });
    const fetchedItems = await fetchItems(
      createEndpoint(state, false, category)
    );
    setState({
      ...state,
      category: category,
      elements: [...fetchedItems.results],
      nextPage: fetchedItems.next && fetchedItems.next.match(/\d+/)[0], // Reg.ex for getting the next page nr from result.next
      loading: false
    });
  };
};

export const useUpdateCategoryItems = () => {
  const [state, setState] = useStore('categoryState');
  return async (loadMore, category, searchTerm = "&") => {
    setState({
      ...state,
      loading: true,
      elements: searchTerm !== "&" ? [] : [...state.elements]
    });
    const fetchedItems = await fetchItems(
      createEndpoint(state, loadMore, category, searchTerm)
    );
    setState({
      ...state,
      elements: loadMore
        ? [...state.elements, ...fetchedItems.results]
        : [...fetchedItems.results],
      searchTerm: loadMore ? state.searchTerm : searchTerm,
      nextPage: fetchedItems.next && fetchedItems.next.match(/\d+/)[0], // Reg.ex for getting the next page nr from result.next
      loading: false
    });
  };
};
