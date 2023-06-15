const discount =(originalPrice, actualPrice)=>{
    const num = originalPrice - actualPrice
    const discount = (num/originalPrice) * 100
    return discount.toFixed(0)
}

export default discount