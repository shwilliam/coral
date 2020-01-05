import React from 'react'
import {Icon} from 'antd'

const Developer = ({
  developerStyles,
  imgStyle,
  imgSrc,
  name,
  linkStyles,
  githubLink,
  websiteLink,
  ...props
}) => (
  <section className={developerStyles} {...props}>
    <img className={imgStyle} src={imgSrc} alt={name} />
    <h2>{name}</h2>
    <a className={linkStyles} href={githubLink}>
      <Icon type="github" />
    </a>
    <a className={linkStyles} href={websiteLink}>
      <Icon type="link" />
    </a>
  </section>
)

export default Developer
