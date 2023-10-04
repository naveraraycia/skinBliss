function Button({children, variant}) {
  return (
    <button className={`py-3 px-10 flex duration-300 ${variant === 'maroon' ? 'bg-maroonLight' : 'bg-maroonLightest'} font-garamond text-white text-xl hover:cursor-pointer hover:bg-pinkHover`}>{children}</button>
  )
}

export default Button