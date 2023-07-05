function extractClassName(sessionTitle) {
  if (sessionTitle.includes("September")) {
    return "2022-09";
  } else if (sessionTitle.includes("Januar")) {
    return "2023-01";
  } else if (sessionTitle.includes("Maerz")) {
    return "2022-03";
  } else if (sessionTitle.includes("März")) {
    return "2022-03";
  } else {
    return null;
  }
}
