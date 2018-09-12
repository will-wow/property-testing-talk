orderBook => {
  const bestPrice = 
    findBestPrice(orderBook, "sell");

  _.forEach(orderBook.sell, order => {
      expect(order.limitPrice)
        .to.be.at.least(bestPrice);
  });
  return true;
};
