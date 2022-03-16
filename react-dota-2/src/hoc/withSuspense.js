import React from 'react'
import "./withSuspense.css"

export const withSuspense = (Component) => {
    return (props) => {
        return <React.Suspense fallback={<div className='suspencedDiv'>Loading...</div>}>
                    <Component {...props} />
                </React.Suspense>
    }
}