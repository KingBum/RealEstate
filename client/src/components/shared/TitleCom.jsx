import React from 'react'

export default function TitleCom({title, subtitle}) {
  return (
    <div className='wrapperTitleCom'>
        <div className="titleCom">{title}</div>
        <div className="subCom">{subtitle}</div>
    </div>
  )
}
