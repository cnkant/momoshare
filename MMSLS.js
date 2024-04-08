/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
 "https://www.maimemo.com/share/page?uid=15567869&pid=6f42e1b220045d9d746d0158bb27b07a&tid=488a10b5085ba705336c12f3102ffb7d"

  ]
=====================以上为范例！=====================

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=15567869&pid=8857acd4681c74ca221e995152d7e1de&tid=b09a047c1552caded144e75e029c62ca"


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
