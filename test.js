const func = (nums, n) => {
    const ans = [];

    for(let i = 0; i < n; i++){
        ans.push(nums[i]);
        ans.push(nums[n+i]);
    }

    return ans;
}

func([2,5,1,3,4,7], 3)


