## 1. 两数之和

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
