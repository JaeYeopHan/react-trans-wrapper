import './PagingTransition.css'

import React, { ReactNode, useEffect } from 'react'
import { RouteComponentProps } from 'react-router'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

interface Props {
  children: ReactNode
  in: boolean
  timeout?: number
  isMountOnEnter?: boolean
  unmountOnExit?: boolean
  onEnter?: () => void
  onExited?: () => void
  routerProps: RouteComponentProps
}

export enum HISTORY_ACTION_TYPE {
  POP = 'POP',
  PUSH = 'PUSH',
}

const SLIDE = 'slide'

const PagingTransition = (props: Props) => {
  const { location, history } = props.routerProps
  const isBack = history.action === HISTORY_ACTION_TYPE.POP

  useEffect(() => {
    const rootElement = document.querySelector('#root')

    if (rootElement == null) {
      console.warn('Cannot find root element')

      return
    }

    if (isBack) {
      rootElement.classList.add('isBack')
    }

    return () => {
      rootElement.classList.remove('isBack')
    }
  }, [isBack])

  return (
    <TransitionGroup component={null}>
      <CSSTransition
        classNames={SLIDE}
        in={false}
        timeout={props.timeout || 400}
        key={location.key}
        mountOnEnter={props.isMountOnEnter}
        onEnter={props.onEnter}
        onExited={props.onExited}
        unmountOnExit={props.unmountOnExit}
      >
        {props.children}
      </CSSTransition>
    </TransitionGroup>
  )
}

export default PagingTransition
