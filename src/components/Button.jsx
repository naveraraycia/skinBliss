function Button({children, variant, size}) {
  return (
    <button className={`${size === 'small' ? 'py-3 px-5 text-sm' : 'py-3 px-10 text-xl'} flex duration-300 ${variant === 'maroon' ? 'bg-maroonLight' : 'bg-maroonLightest'} font-garamond text-white hover:cursor-pointer hover:bg-pinkHover`}>{children}</button>
  )
}

export default Button