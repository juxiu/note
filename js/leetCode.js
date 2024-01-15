

let s = 'ababa'


// function longestPalindrome(s) {
//     let n = s.length;
//     //n的长度小于2 则一定是  直接返回
//     if (n < 2) {
//         return s
//     }
//     // 用dp[i][j]表示  s[i...j]是否是回文字符串
//     // dp是一个二维数组
//     let dp = new Array(n).fill(0).map(() => new Array(n).fill(false));
//     for (let i = 0; i < n; i++) {
//         dp[i][i] = true;
//     }
//     let maxLen = 1;
//     let begin = 0;
//     let charArray = s.split('');
//     for (let L = 2; L <= n; L++) {
//         /**
//          * L = 1 即为长度为 1 的子串  代码块下的 for 则是枚举所有长度为 1的子串
//          */
//         for (let i = 0; i < n; i++) {
//             // 由 L 和 i 可以确定右边界，即 j - i + 1 = L 得
//             /**
//              * 子串的长度  L = j - i  + 1
//              * 子串的长度最长为 n
//              */
//             let j = L + i - 1
//             if (j >= n) {
//                 break
//             }
//             //子串首位字母不相同  则不可能为回文  则 dp[i][j] = false
//             if (charArray[i] !== charArray[j]) {
//                 dp[i][j] = false;
//             } else {
//                 // 子串首位字母相同  且长度小于 3  则是回文
//                 if (j - i < 3) {
//                     dp[i][j] = true;
//                 } else {
//                     // 子串首位相同 且长度 >3 是否回文取决于 去除首尾之后字串是否是回文
//                     dp[i][j] = dp[i + 1][j - 1]
//                 }
//             }
//             // 只要 dp[i][L] == true 成立，就表示子串 s[i..L] 是回文，此时记录回文长度和起始位置
//             if (dp[i][j] && j - i + 1 > maxLen) {
//                 maxLen = j - i + 1
//                 begin = i
//             }
//         }
//     }
//     return s.substring(begin, begin + maxLen)
// }

// console.log(longestPalindrome(s));

let fun = (s) => {
    let n = s.length;
    if (n < 2) {
        return s
    }
    let begin = 0
        , maxLen = 1

    let dp = new Array(n).fill(false).map(_ => new Array(n).fill(false))
    let charArray = s.split('')
    for (let L = 2; L <= n; L++) {
        for (let i = 0; i < n; i++) {
            let j = L + i - 1
            if (charArray[i] != charArray[j]) {
                dp[i][j] = false
            } else {
                if (j - i < 3) {
                    dp[i][j] = true
                } else {
                    dp[i][j] = dp[i + 1][j - 1]
                }
            }
            if (dp[i][j] && j - i + 1 > maxLen) {
                maxLen = j - i + 1
                begin = i
            }
        }
    }
    return s.substring(begin, begin + maxLen)
}

console.log(fun(s));