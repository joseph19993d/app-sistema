import classNames from 'classnames'
import { useState, useCallback } from 'react'
import { Eye, EyeSlash, WarningCircle } from '@phosphor-icons/react'
import colors from 'tailwindcss/colors'
export default function InputText ({ className, errorMessage, type = 'text', ...props }) {
  const [showPassword, setShowPassword] = useState(false)
  const isPassword = type === 'password'
  const currentType = isPassword ? (showPassword ? 'text' : 'password') : type
  const handleShowPassword = useCallback(() => setShowPassword(state => !state), [])
  return (

    <div className='min-h-[60px]'>
      <div className='flex relative justify-center'>
        <input
          className={classNames('inputs !pr-[40px]', className, {
            'outline outline-2 outline-red-400': errorMessage !== null
          })}
          type={currentType}
          {...props}
        />

        <div className='absolute right-3 top-3' style={{ userSelect: 'none' }}>
          {isPassword
            ? (
              <div>

                {showPassword
                  ? <Eye onClick={handleShowPassword} size={24} color={colors.slate[500]} />
                  : <EyeSlash onClick={handleShowPassword} size={24} color={colors.slate[400]} />}

              </div>

              )
            : errorMessage && <WarningCircle size={20} color={colors.red[600]} />}

        </div>

      </div>

      {errorMessage && <span className='text-sm text-red-600 ml-1'>{errorMessage}</span>}
    </div>
  )
}
