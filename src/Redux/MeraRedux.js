import { Action } from 'history'
import React from 'react'

import { configureStore } from '@reduxjs/toolkit'

const MeraRedux = () => {
  const SpeakAction = (text)=>{
    return{
        type:'SPEAK',
        text
    }
   
  }
  //step2
  const SpeakReducer = (state={},action)=>{
    switch (action.type) {
        case 'SPEAK':
            return{text:action.text}
    
        default:
          return state
    }
  }
  const store = configureStore(SpeakReducer)
store.subscribe(()=>{console.log('store changed')
console.log(store.getState())
})
  //step4
  store.dispatch(SpeakAction('hello lingam'))
  store.dispatch(SpeakAction('hello lingams'))
  return (
    <div>MeraRedux</div>
  )
}

export default MeraRedux