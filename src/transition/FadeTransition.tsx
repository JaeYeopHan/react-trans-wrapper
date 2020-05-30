import './FadeTransition.css'

import React, { ReactNode } from 'react'
import { CSSTransition } from 'react-transition-group'

interface Props {
  children: ReactNode
  in: boolean
  isMountOnEnter?: boolean
  onEnter?: () => void
  onExited?: () => void
}

const FADE = 'fade'

const FadeTransition = (props: Props) => {
  return (
    <CSSTransition
      classNames={FADE}
      timeout={300}
      in={props.in}
      appear
      mountOnEnter={props.isMountOnEnter}
      onEnter={props.onEnter}
      onExited={props.onExited}
    >
      {props.children}
    </CSSTransition>
  )
}

export default FadeTransition
