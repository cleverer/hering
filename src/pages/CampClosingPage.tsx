// import styled from '@emotion/styled'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Section, { SectionT } from '../components/Section'

type Props = {
  section: SectionT
}

function CampClosingPage(props: Props) {
  const section = props.section
  if (!section) return null

  return <Section section={section} icon={<FontAwesomeIcon icon="book"/>} />
}
export default CampClosingPage
