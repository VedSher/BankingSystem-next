'use client';
import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div>
        <CountUp
            duration={1.0}
            end={amount}
            decimal="."
            decimals={2}
            prefix="₹"
        />
    </div>
  )
}

export default AnimatedCounter