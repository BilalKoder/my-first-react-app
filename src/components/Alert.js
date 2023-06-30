import React from 'react'

export default function Alert(props) {
    return (
      <div className={`alert alert-${props?.alert?.type}  fade show`} role="alert">
        {props?.alert?.message}
      </div>
    );
  }
  