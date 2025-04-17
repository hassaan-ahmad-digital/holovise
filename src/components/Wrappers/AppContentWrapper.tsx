'use client'

import { cn } from '@/lib/utils'
import React, { HTMLAttributes, useEffect, useState } from 'react'

type HeaderIdType = 'app-header-1' | 'app-header-2' | 'app-header-3'

export default function AppContentWrapper({
  children,
  headerId,
  className
}: {
  children: React.ReactNode
  headerId: HeaderIdType
  className?: HTMLAttributes<HTMLDivElement>['className']
}) {
  const [headerHeight, setHeaderHeight] = useState<number>(0)

  useEffect(() => {
    const header = document.getElementById(headerId)
    
    // Calculate initial height
    const calculateHeight = () => {
      if (header) {
        setHeaderHeight(header.offsetHeight)
      }
    }
    
    // Call immediately for initial height
    calculateHeight()
    
    // Setup resize listener
    window.addEventListener('resize', calculateHeight)
    
    return () => {
      window.removeEventListener('resize', calculateHeight)
    }
  }, [headerId]) // Add headerId as dependency
  
  return (
    <div style={{ paddingTop: `${headerHeight}px` }} className={cn('', className)}>
      {children}
    </div>
  )
}
