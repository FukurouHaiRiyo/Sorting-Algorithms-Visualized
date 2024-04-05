import { SWAP } from '../constants';
import {swap} from '../util';

const heapSort = async(arr, length) => {
    let m = [];

    for(let index = Math.ceil(length / 2) - 1; index >= 0; index--) {
        await heap(m, arr, length, index);
    }

    for(let index = length - 1; index >= 0; index--) {
        m.push([index, 0, SWAP]);
        await swap(arr, index, 0);
        await heap(m, arr, index, 0);
    }

    return m;
}

const heap = async (m, arr, length, index) => {
    let max = index;
    let left = 2 * index + 1, right = 2 * index + 2;

    if (left < length && arr[left] < arr[max]) {
        max = left;
    }

    if(right < length && arr[right] > arr[max]) {
        max = right
    }

    if (max !== index) {
        m.push([index, max, SWAP]);
        await swap(arr, index, max);
        await heap(m, arr, length, index);
    }
}