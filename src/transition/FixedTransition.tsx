import './FixedTransition.css'

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

const FIXED = 'fixed'

const FixedTransition = (props: Props) => {
  return (
    <>
      {props.children}
      <CSSTransition
        classNames={FIXED}
        timeout={props.timeout || 300}
        in={props.in}
        mountOnEnter={props.isMountOnEnter}
        onEnter={props.onEnter}
        onExited={props.onExited}
      >
        {props.children}
      </CSSTransition>
    </>
  )
}

export default FixedTransition
