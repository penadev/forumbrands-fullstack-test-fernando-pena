export function getDays(date) {
  const oneday = 1000 * 60 * 60 * 24;
  const arrivedDate = new Date(date);
  const currentDate = new Date();
  return (Math.round(currentDate.getTime() - arrivedDate.getTime()) / oneday).toFixed(0);
}

export function getAdopter(id, data) {
  const adopter = data?.find((adopter) => adopter.id === id);
  return adopter?.name + ', ' + adopter?.state;
}
