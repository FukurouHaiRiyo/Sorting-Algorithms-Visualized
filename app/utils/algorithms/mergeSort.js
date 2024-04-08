import { CHANGE_VALUE } from '../constants';

export const mergeSort = async(arr, length) => {
    let m = [];

    await divide(arr, m, 0, length - 1);

    return m;
}

const divide = async(arr, m, start, end) => {
    if(start < end) {
        let mid = Math.floor((end + start) / 2);
        await divide(arr, m, start, mid);
        await divide(arr, m, mid+1, end);
        await merge(arr, m, start, mid, end);
    }
}

export const merge = async(arr, m, start, mid, end) => {
    let sortedArr = [];
    let i = start, j = mid + 1;

    while(i <= mid && j <= mid) {
        if(arr[i] <= arr[j])
            sortedArr.push(arr[i++]);
        else 
            sortedArr.push(arr[j++]);
    }

    while (i <= mid) {
        sortedArr.push(arr[i++]);
    }

    while(j <= end) {
        sortedArr.push(arr[j++]);
    }

    let idx = [];

    for(let i = start; i <= end; i++) {
        idx.push(i);
    }

    for(let i = start; i <= end; i++) {
        arr[i] = sortedArr[i-start];
        m.push([i, arr[i], CHANGE_VALUE, idx]);
    }
}

export default mergeSort;
