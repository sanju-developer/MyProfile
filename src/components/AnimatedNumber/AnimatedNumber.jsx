import React from 'react'
import { useSpring, animated } from 'react-spring'
import './AnimatedNumber.scss'
import PropTypes from 'prop-types'

function AnimatedNumber(props) {
  const staticProps = useSpring({
    to: { number: props.number },
    from: { number: 0 },
    delay: 1000,
  })

  return props.type === 'simple-number' ? (
    <animated.span>{staticProps.number.interpolate(val => `${Math.floor(val)}`)}</animated.span>
  ) : (
    <animated.span className="animated-number">
      {staticProps.number.interpolate(val => `Visit: ${Math.floor(val)} ✌️`)}
    </animated.span>
  )
}

export default AnimatedNumber

AnimatedNumber.propTypes = {
  number: PropTypes.any,
  type: PropTypes.string,
}

AnimatedNumber.defaultProps = {
  number: undefined,
  type: undefined,
}
