const InputField = ({ type, placeholder }) => {

  return (
      <input
        type={type}
        placeholder={placeholder}
        className='input-field'
        required
      />
  )
}

export default InputField