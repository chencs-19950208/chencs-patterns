// try...catch  async await 可以通过try ... catch 来捕获异常
!(async function () {
  const p = Promise.reject('err'); 

  try {
    const res = await p;
  } catch(err) {
    console.log(err)
  }
})()