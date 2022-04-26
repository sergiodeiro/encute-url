/**
 *
 * @param {*} bornDate date of bith yyyy-mm-dd
 * @param {*} maxAge maxAge. A bornDate older than maxAge will return false
 */
const isUserOlderThanMaxAge = (bornDate, maxAge) => {
  const max_year = new Date().getFullYear() - maxAge;
  const _month = new Date().getMonth();
  const _day = new Date().getDate();
  const maxdate = new Date(max_year, _month, _day);

  const bornDateArray = bornDate.split('-');
  const bornDateObj = new Date(
    Number(bornDateArray[0]),
    Number(bornDateArray[1]) - 1,
    Number(bornDateArray[2]),
  );

  if (bornDateObj >= maxdate) {
    return false;
  }
  return true;
};

export {isUserOlderThanMaxAge};
