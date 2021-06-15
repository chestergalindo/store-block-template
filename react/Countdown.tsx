import React from 'react'

interface CountdownProps {
  targetDate: string
}

const Countdown: StorefrontFunctionComponent<CountdownProps> = ({targetDate,}) => {
  return (
    <h1> 
      {targetDate} 
    </h1>
  )
}

Countdown.schema = {
  title: 'editor.countdown.title',
  description: 'editor.countdown.description',
  type: 'object',
  properties: {
    targetDate: {
      title: 'Final date',
      description: 'Final date used in the countdown',
      type: 'string',
      default: 'null'
    }, 
  },
}

export default Countdown
