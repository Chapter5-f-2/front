function getStatus(num) {
  switch (num) {
    case 0:
      return "판매중";
    case 1:
      return "예약중";
    default:
      return "거래완료";
  }
}

export default getStatus;
