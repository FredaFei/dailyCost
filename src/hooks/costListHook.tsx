import { useContext, useEffect } from 'react';
import AppContext from '../context';
import { getCostList } from '../api/home';

export default function() {
  const { state, dispatch } = useContext(AppContext);
  useEffect(() => {
    getCostList({ type: 0 }).then(res => {
      dispatch({ type: 'setCostList', costList: res.result })
    }, err => {
      console.log(err);
    })
  }, [])

  return {
    costList: state.costList,
  };
}