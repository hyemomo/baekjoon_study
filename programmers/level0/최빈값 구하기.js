function solution(array) {
  const countMap = new Map();
  for (const ch of array) {
    if (countMap.has(ch)) {
      const v = countMap.get(ch);
      countMap.set(ch, v=1);
    } else {
      countMap.set(ch, 1);
    }
  }
   let maxCount = 0;
   let answer = -1;
   let isDuplicate = false;

   for (const [key, value] of countMap) {
     if (value > maxCount) {
       maxCount = value;
       answer = key;
       isDuplicate = false;
     } else if (value === maxCount) {
       isDuplicate = true;
     }
   }

   return isDuplicate ? -1 : answer;
}
