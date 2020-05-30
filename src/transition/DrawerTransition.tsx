import './DrawerTransition.css'

import React, { ReactNode } from 'react'
import { CSSTransition } from 'react-transition-group'

interface Props {
  children: ReactNode
  in: boolean
  timeout?: number
  isMountOnEnter?: boolean
  onEnter?: () => void
  onExited?: () => void
}

const DRAWER = 'drawer'

const DrawerTransition = (props: Props) => {
  return (
    <CSSTransition
      classNames={DRAWER}
      timeout={props.timeout || 400}
      in={props.in}
      mountOnEnter={props.isMountOnEnter}
      onEnter={props.onEnter}
      onExited={props.onExited}
    >
      {props.children}
    </CSSTransition>
  )
}

export default DrawerTransition
