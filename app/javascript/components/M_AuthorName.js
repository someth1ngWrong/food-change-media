import React from 'react'
import A_TextTitle from './A_TextTitle'
import M_AuthorLogo from './M_AuthorLogo'

const M_AuthorName = ({authorLogo, text}) => {
  return (
    <div className="main-label-conainer">
      <M_AuthorLogo authorLogo={authorLogo} />
      <div className="author-main-label">
        <A_TextTitle title={text} />
      </div>
    </div>
  )
}

export default M_AuthorName
