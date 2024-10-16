type SectionHeadingProps = {
  heading: string
}

export default function SectionHeading({heading}: SectionHeadingProps) {
  return (
    <h2 className="section-heading">{heading}</h2>
  )
}
