## [1. 两数之和](https://leetcode.cn/problems/two-sum)

> 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target 的那 两个 整数，并返回它们的数组下标。

```js
var twoSum = function (nums, target) {
  const mapState = new Map()
  for (let index = 0; index < nums.length; index++) {
    mapState.set(nums[index], index)
  }
  for (let index = 0; index < nums.length; index++) {
    const el = nums[index]
    const findNum = target - el
    if (mapState.has(findNum) && mapState.get(findNum) !== index) {
      return [index, mapState.get(findNum)]
    }
  }
  return new Error("no find")
}
```

## [2. 两数相加](https://leetcode.cn/problems/add-two-numbers)
```js
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
var addTwoNumbers = function (l1, l2) {
    let head = new ListNode(0) 
    let currentNode = head
    let step = 0
    while (l1 || l2||step) {
        let l1Cur = l1 ? l1.val : 0
        let l2Cur = l2 ? l2.val : 0
        let sum = l1Cur + l2Cur + step
        step = sum >= 10 ? 1 : 0
        sum = sum >= 10 ? sum - 10 : sum
        currentNode.next = new ListNode(sum)
        currentNode = currentNode.next
        l1 = l1 ? l1.next : null
        l2 = l2 ? l2.next : null
    }
    return head.next
};
```

## [3. 无重复最长子串](https://leetcode.cn/problems/longest-substring-without-repeating-characters)
```js
var lengthOfLongestSubstring = function (s) {
    let temp = ''
    let max = ''
    let index = 0 //右指针
    while (index < s.length) {
        let cur = s[index]
        if (!temp.includes(cur)) {
            // 不重复 追加
            temp += cur
        } else {
            // 重复 移动左指针至重复位置
            temp = temp.slice(temp.indexOf(cur) + 1) + cur
        }
        if (max.length < temp.length) {
            max = temp
        }
        index++
    }
    return max.length

};
``` 

## [4. 寻找两个正序数组的中位数](https://leetcode.cn/problems/median-of-two-sorted-arr)

-- 待完成

## [5. 最长回文子串(动态规划)](https://leetcode.cn/problems/longest-palindromic-substring)
```js

function longestPalindrome(s) {
    let n = s.length;
    //n的长度小于2 则一定是  直接返回
    if (n < 2) {
        return s
    }
    // 用dp[i][j]表示  s[i...j]是否是回文字符串
    // dp是一个二维数组  描述i,j坐标是否是回文字符串
    let dp = new Array(n).fill(0).map(() => new Array(n).fill(false));
    // 初始化dp数组 单个字符串一定是回文字符串
    // for (let i = 0; i < n; i++) {
    //     dp[i][i] = true;
    // }
    let maxLen = 1;
    let begin = 0;
    let charArray = s.split('');
    for (let L = 2; L <= n; L++) {
        /**
         * L = 1 即为长度为 1 的子串  代码块下的 for 则是枚举所有长度为 1的子串
         */
        for (let i = 0; i < n; i++) {
            // 由 L 和 i 可以确定右边界，即 j - i + 1 = L 得
            /**
             * 子串的长度  L = j - i  + 1
             * 子串的长度最长为 n
             */
            let j = L + i - 1
            if (j >= n) {
                break
            }
            //子串首位字母不相同  则不可能为回文  则 dp[i][j] = false
            if (charArray[i] !== charArray[j]) {
                dp[i][j] = false;
            } else {
                // 子串首位字母相同  且长度小于 3  则是回文
                if (j - i < 3) {
                    dp[i][j] = true;
                } else {
                    // 子串首位相同 且长度 >3 是否回文取决于 去除首尾之后字串是否是回文
                    dp[i][j] = dp[i + 1][j - 1]
                }
            }
            // 只要 dp[i][L] == true 成立，就表示子串 s[i..L] 是回文，此时记录回文长度和起始位置
            if (dp[i][j] && j - i + 1 > maxLen) {
                maxLen = j - i + 1
                begin = i
            }
        }
    }
    return s.substring(begin, begin + maxLen)
}
```