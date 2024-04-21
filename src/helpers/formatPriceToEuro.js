function formatPriceToEuro(price) {
  if (typeof price !== 'number') {
    return 'Invalid input';
  }

  return price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
  });
}

export default formatPriceToEuro;
