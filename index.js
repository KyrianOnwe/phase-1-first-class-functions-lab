// Code your solution in this file!

function returnFirstTwoDrivers(drivers){
  const newArray = drivers.slice(0, 2);
  return newArray;
}
function returnLastTwoDrivers(drivers){
  const backArray = drivers.slice(2);
  return backArray;
}
function selectingDrivers(){
  const firstArray = returnFirstTwoDrivers();
  const secondArray = returnLastTwoDrivers();
  const bigArray = firstArray + secondArray;
  return bigArray;
}
