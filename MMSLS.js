/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
 "https://www.maimemo.com/share/page?uid=15567869&pid=dccf5d6c7ad1582ad54b5bc0f91b5ba5&tid=68c752d3e04aad0cd196807a48a9e9b7"

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
