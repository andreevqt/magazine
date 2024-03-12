const makePage = (value: number) => value;

const makePagination = (currentPage: number, totalPages: number, limit: number) => {
  const items: Array<string | number> = [];

  if (totalPages <= 1) {
    return items;
  }

  if (totalPages <= limit) {
    for (let i = 1; i <= totalPages; i++) {
      items.push(makePage(i));
    }
  } else {
    let slidingStart;
    let slidingEnd;

    const numAdjacents = Math.floor((limit - 3) / 2);

    if (currentPage + numAdjacents > totalPages) {
      slidingStart = totalPages - limit + 2;
    } else {
      slidingStart = currentPage - numAdjacents;
    }

    if (slidingStart < 2) {
      slidingStart = 2;
    }

    slidingEnd = slidingStart + limit - 3;
    if (slidingEnd >= totalPages) {
      slidingEnd = totalPages - 1;
    }

    items.push(makePage(1));
    if (slidingStart > 2) {
      items.push(`...`);
    }

    for (let i = slidingStart; i <= slidingEnd; i++) {
      items.push(makePage(i));
    }
    if (slidingEnd < totalPages - 1) {
      items.push(`...`);
    }

    items.push(makePage(totalPages));
  }

  return items;
};

export {makePagination};
