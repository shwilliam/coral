import React from 'react'
import {Icon} from 'antd'

const Developer = ({
  imgStyle,
  imgSrc,
  name,
  linkStyles,
  githubLink,
  websiteLink,
}) => (
  <>
    <img className={imgStyle} src={imgSrc} alt={name} />
    <h2>{name}</h2>
    <a className={linkStyles} href={githubLink}>
      <Icon type="github" />
    </a>
    <a className={linkStyles} href={websiteLink}>
      <Icon type="link" />
    </a>
  </>
)

export default Developer
