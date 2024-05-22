import React, {useEffect} from 'react';
import Loading from './components/Loading';
import {Routes, Route} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { asyncPreloadProcess } from './states/isPreload/action';
import { asyncUnsetAuthUser } from './states/authUser/action';

function App() {
  const {
    authUser = null,
    isPreload = false
  } = useSelector((states) = states)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess())
  }, [dispatch])

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser())
  }

  if (isPreload) {
    return null;
  }

  if(authUser === null) {
    return (
      <>
        <Loading />
        <main>
          <Routes>
            <Route path="/*" element={<IntroPage />} />
          </Routes>
        </main>
      </>
    )
  }

}
  
export default App;
