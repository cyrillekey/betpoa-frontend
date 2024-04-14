export const currencyFormat = ({amount,currency}:{amount: number,currency: 'KES' | 'USD' | 'EUR'}) => {
    return new Intl.NumberFormat('en-KE',{currency,style:'currency',}).format(amount)
}