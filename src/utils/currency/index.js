

export const currencyFormat = (price, { locate = 'es-CO', ...options }= {}) => {
    const currency = new Intl.NumberFormat(locate, {
        currency: 'COP', ...options, style: 'currency'  
    })

    return currency.format(price)
}