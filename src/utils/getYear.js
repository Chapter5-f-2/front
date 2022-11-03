const getYear = (num) => {
    switch (num) {
      case 1:
        return "10월";
      case 2:
        return "11월";
      case 3:
        return "12월";
      default:
        return;
    }
  };
  export default getYear;