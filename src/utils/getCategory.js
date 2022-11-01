function getCategory(num) {
  switch (num) {
    case 0:
      return "카테고리 선택";
    case 1:
      return "전자/가전제품";
    case 2:
      return "가구/인테리어";
    case 3:
      return "패션/잡화";
    case 4:
      return "삽니다";
    default:
      return "";
  }
}

export default getCategory;
