type FormTitleProps = {
    title: string
}
export default function FormTitle({ title }: FormTitleProps) {
  return (
    <h1 className="form__title">{title}</h1>
  )
}
