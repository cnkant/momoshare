/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
 "https://www.maimemo.com/share/page?uid=15567869&pid=01c723220cf8d9e859f6239a2c9c94f3&tid=c6b9d87b1b6bcb1d3f8f597f2bae83ff"

  ]
=====================以上为范例！=====================

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=15567869&pid=a3356d0e563c96c1e2ca01303fe70983&tid=858eb6b4290988050ff02683ee35fcbd",
    "https://www.maimemo.com/share/page?uid=14652781&pid=a3356d0e563c96c1e2ca01303fe70983&tid=79ec343b3b00a4778670ecea4d758db4",
    "https://www.maimemo.com/share/page?uid=15567869&pid=2ffa64518d9d179594e3a779b52eb850&tid=d71689804d72a62d213da1b95360c931"


  ]
  /**
   * 生成随机数字
   * @param {number} min 最小值（包含）
   * @param {number} max 最大值（不包含）
   */
  function randomNumber(min = 0, max = 100) {
    return Math.min(Math.floor(min + Math.random() * (max - min)), max);
  }
  const MMSL_random = MMSLS[randomNumber(0, MMSLS.length)];
  
  module.exports = {
    MMSL_random
  }
