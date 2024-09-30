// function that recieves a callback function and console logs the time it takes to execute the callback function
export async function timer(name: string, callback: () => any) {
  console.time(name);
  const result = await callback();

  console.timeEnd(name);
  return result;
}
