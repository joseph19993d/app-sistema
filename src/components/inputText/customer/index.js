import classNames from 'classnames'
import { Eye, EyeSlash, WarningCircle } from '@phosphor-icons/react'
import colors from 'tailwindcss/colors'

export default function InputText ({ className, errorMessage, type = 'text', options, value, ...props }) {
  const isSelect = type === 'select'

  return (
    <div className='min-h-[60px]  '>
      <div className='flex relative justify-center'>

        <input
          className={classNames('inputs inputs  !pr-[40px] bg-black bg-opacity-30 placeholder-purple-500 border-none border-purple-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 !pr-[40px] text-white',
           className,
            {
            'outline outline-2 outline-red-200': errorMessage !== null
          })}
          type={type}
          {...props}
          value={value}
        />

        <div className='absolute right-3 top-3' style={{ userSelect: 'none' }}>
          {errorMessage && <WarningCircle size={20} color={colors.red[200]} />}

        </div>

      </div>

      {errorMessage && <span className='text-sm text-sm text-red-200 ml-1'>{errorMessage}</span>}
    </div>
  )
}

export function InputFilter ({ className, errorMessage, type = 'text', options, value, ...props }) {
  const isSelect = type === 'select'

  return (
    <div className='min-h-[60px] '>
      <div className='flex relative justify-center'>

        <input
          className={classNames('inputs !pr-[40px]', className, {
            'outline outline-2 outline-red-400': errorMessage !== null
          })}
          type={type}
          {...props}
          
        />

        <input className='text-center
          absolute
          btn 
          border-blue-900 border-1
          bg-gradient-to-r from-blue-500 to-blue-900 hover:from-pink-500 hover:to-yellow-500
          right-3
          top-2
          max-w-[70px] '
          defaultValue='filtrar'
          value='Filtrar' 
          type='submit'  
        />

        <div className='absolute right-3 top-3' style={{ userSelect: 'none' }}>
          {errorMessage && <WarningCircle size={20} color={colors.red[600]} />}

        </div>

      </div>

      {errorMessage && <span className='text-sm text-sm text-red-600 ml-1'>{errorMessage}</span>}
    </div>
  )
}

export function InputAndSelect ({ className, errorMessage, type = 'text', options, value, ...props }) {
  const isSelect = type === 'select'

  return (
    <div className='min-h-[60px] '>
      <div className='flex relative justify-center'>

        <input
          className={classNames('inputs !pr-[40px]', className, {
            'outline outline-2 outline-red-400': errorMessage !== null
          })}
          type={type}
          {...props}
          
        />


        <div className='absolute right-3 top-3' style={{ userSelect: 'none' }}>
          {errorMessage && <WarningCircle size={20} color={colors.red[600]} />}

        </div>

      </div>

      {errorMessage && <span className='text-sm text-sm text-red-600 ml-1'>{errorMessage}</span>}
    </div>
  )
}