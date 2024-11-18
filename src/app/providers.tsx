/**
 * Next Provider template
 * @author Denys Ostroverkh
 * @Published Nov 17, 2024
 * @modified Nov 17, 2024
 */

"use client"

import { Provider } from 'react-redux'
import { store } from '@/store'
import { ReactNode } from 'react'

const Providers = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>
    {children}
  </Provider>
}

export default Providers