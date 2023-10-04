function Heading({title, subTitle}) {
  return (
    <div className="text-center text-maroonDark space-y-1">
      <h1 className="font-semibold font-garamond italic text-6xl capitalize">{title}</h1>
      <p className="font-nunito font-light text-2xl">{subTitle}</p>
    </div>
  )
}

export default Heading