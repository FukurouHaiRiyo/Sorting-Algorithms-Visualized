import { SWAP } from '../constants';
import {swap} from '../util';

const heapSort = async(arr, length) => {
    let m = [];
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