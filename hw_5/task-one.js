// Objects for testing 
const rectangle0 = {};
const rectangle1 = {
  side_a: 2,
  side_b: 4,
  extra_info: {
    p: 12,
    s: 8,
    info: {
      fill: true,
    },
  },
};
const rectangle2 = {
  side_a: 2,
  side_b: 4,
  extra_info: {
    p: 12,
    s: 8,
    info: {
      fill: true,
    },
  },
};
const rectangle3 = {
  side_a: 2,
  side_b: 6,
};
const rectangle4 = {
  side_a: 22,
  side_b: 44,
  unnecessary: 'some unnecessary info',
  extra_info: {
    fill: false,
  },
};

function isObj(obj) {
  return obj !== null && typeof obj === 'object';
}

// ----------------------------------------------------------
// Для перевірки чи порожній об’єкт
// ----------------------------------------------------------

function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}

console.log('Is object empty? ', isObjectEmpty(rectangle0));
console.log('Is object empty? ', isObjectEmpty(rectangle1));

// ----------------------------------------------------------
// Порівнює два об'єкти.
// ----------------------------------------------------------


function areObjectsEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    const val1 = obj1[key];
    const val2 = obj2[key];
    const areObjects = isObj(val1) && isObj(val2);
    if (
      (areObjects && !areObjectsEqual(val1, val2)) ||
      (!areObjects && val1 !== val2)
    ) {
      return false;
    }
  }
  return true;
}

console.log('Are objects equal? ', areObjectsEqual(rectangle0, rectangle1));
console.log('Are objects equal? ', areObjectsEqual(rectangle1, rectangle2));
console.log('Are objects equal? ', areObjectsEqual(rectangle1, rectangle3));

// ----------------------------------------------------------
// Знаходить перетин об'єктів і повертає об'єкт перетинів
// ----------------------------------------------------------


function findConcurrencesInObjects(obj1, obj2) {
  let result = {};
  for (const key in obj1) {
    const val1 = obj1[key];
    const val2 = obj2[key];
    const areObjects = isObj(val1) && isObj(val2);
    if (!areObjects && val1 === val2) {
      result[key] = val1;
    } else if (areObjects) {
      result[key] = findConcurrencesInObjects(val1, val2);
    }
  }
  return result;
}

console.log(
  'Concurrences in objects ',
  findConcurrencesInObjects(rectangle1, rectangle3),
);
console.log(
  'Concurrences in objects ',
  findConcurrencesInObjects(rectangle1, rectangle2),
);
console.log(
  'Concurrences in objects ',
  findConcurrencesInObjects(rectangle1, rectangle4),
);

// ----------------------------------------------------------
// Знаходить значення за заданим ключем
// ----------------------------------------------------------


function findValueByKey(obj, key) {
  let result = null;
  if (obj.hasOwnProperty(key)) {
    result = `${key}: ${obj[key]}`;
    return result;
  }
  for (const key_i in obj) {
    const val1 = obj[key_i];
    if (isObj(val1)) {
      result = findValueByKey(val1, key);
    }
  }
  return result;
}

console.log('Find Value: ', findValueByKey(rectangle1, 'fill'));
console.log('Find Value: ', findValueByKey(rectangle2, 'side_b'));
console.log('Find Value: ', findValueByKey(rectangle3, 'fill'));
