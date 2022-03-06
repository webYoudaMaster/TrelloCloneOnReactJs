import React from 'react';
import TrelelloApp from './components/TrelelloWorkingWindow/TrelelloApp/TrelelloApp';
import AskingNameModalWindow from './components/AskingNameModalWindow/AskingNameModalWindow';
import './styles/App.css'
import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from './types';
import { RootState } from './store/appStore/store';


function App() {
  let [_, setUserNameInLocalStorage] = useState<string>();
  const userName = useAppSelector((state: RootState) => state.userName.userName);
  const store = useAppSelector((state:RootState) => state)  
  console.log(store)
  useEffect(()=>{
        setUserNameInLocalStorage(userName)
  }, [userName])
  
  return Boolean(userName) ? (<TrelelloApp /> ) : 
    (
      <AskingNameModalWindow/>
    );
}

export default App;
