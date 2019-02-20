import React, { useEffect } from "react";
import { useStore } from "../../store/store";
import { useFetchSingleAndRelated } from '../../actionHooks/singlePageActionHooks';
import SinglePage from './SinglePage';
import "./SinglePage.css";

const SinglePageContainer = ({ match: { params: { category, id } } }) => {
  const [state, setState] = useStore('singlePageState');
  console.log("render singlepage")
  const categories = [
    "characters",
    "people",
    "planets",
    "species",
    "starships",
    "vehicles",
    "films",
    "residents",
    "pilots"
  ];

  const fetchSingleAndRelated = useFetchSingleAndRelated(categories);

  // Must clean up state on unmount
  useEffect(() => {
      return(() => {
        setState(prevState => ({ element: null, related: {}, loading:false, category: null, id: null }));
      })
  }, [])

  useEffect(() => {
    setState(prevState => ({ element: null, related: {}, loading:true, category: null, id: null }));
    fetchSingleAndRelated(category, id);
  }, [category, id])

  return (
    <SinglePage
      category={category}
      element={state.element}
      id={id}
      loading={state.loading}
      categories={categories}
      related={state.related}
    />
  )
};

export default SinglePageContainer;