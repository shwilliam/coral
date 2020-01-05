import React from 'react'

const Feature = ({
  title,
  description,
  imgSrc,
  imgAlt,
  imgStyle,
  featureStyles,
  ...props
}) => (
  <section className={featureStyles} {...props}>
    <h2>{title}</h2>
    <p>{description}</p>
    <img className={imgStyle} src={imgSrc} alt={imgAlt} />
  </section>
)

export default Feature
