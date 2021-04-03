import React from 'react'
import O_Contacts from './O_Contacts'
import O_DescriptionAuthorInformation from './O_DescriptionAuthorInformation'
import O_Footer from './O_Footer'
import O_InformationAuthor from './O_InformationAuthor'

const Author = () => {
  return (
    <div className="main-author-screen">
      <O_DescriptionAuthorInformation />
      <div className="author-spacing">
        <O_InformationAuthor/>
      </div>
      <O_Contacts/>
      <O_Footer />
    </div>
  )
}

export default Author
