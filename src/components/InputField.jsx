const InputField = ({ value, type, placeholder}) => {
  return (
      <input
        value={value}
        type={type}
        placeholder={placeholder}
        className='input-field'
        required
      />
  )
}

export default InputField