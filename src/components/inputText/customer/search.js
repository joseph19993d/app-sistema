import classNames from 'classnames'
import { Eye, EyeSlash, WarningCircle } from '@phosphor-icons/react'
import colors from 'tailwindcss/colors'

export default function InputText ({ className, errorMessage, type = 'text', options, value, ...props }) {
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
