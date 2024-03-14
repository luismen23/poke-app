import { FaSearch } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'

export default function Search({
  changeIcon,
  inputRef,
  searchParams,
  handleChange,
  handleClick,
}) {
  return (
    <form
      className='flex bg-white gap-1 border rounded-md hover:border-yellow-500/90 hover:border hover:shadow-md hover:shadow-yellow-500/70 justify-between p-1 z-10'
      id='input'
    >
      <input
        name='input'
        ref={inputRef}
        placeholder=' Search by name, nº or type'
        className=' placeholder-slate-600 placeholder-opacity-50 text-slate-900 placeholder:text-xs md:placeholder:text-sm px-1 bg-transparent focus:outline-none w-[10rem] md:w-[18rem] '
        onChange={event => handleChange(event.target.value)}
        defaultValue={searchParams.get('search')?.toString()}
      />
      <button
        className='text-black hover:bg-yellow-500/50 rounded-md '
        onClick={handleClick}
      >
        {changeIcon ? (
          <IoMdClose size={20} className='m-1' />
        ) : (
          <FaSearch size={20} className='m-1' />
        )}
      </button>
    </form>
  )
}
