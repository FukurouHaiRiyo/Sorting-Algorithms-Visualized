import { SWAP } from '../constants';
import {swap} from '../util';

const insertionSort = async(arr, length) => {
    let m = [];

    for(let index = 0; index < length - 1; index++) {
        let j = index;

        while(j >= 0 && arr[j] > arr[j+1]) {
            await swap(arr, j, j + 1);
            m.push([j, j + 1, SWAP]);
            j--;
        }
    }

    return m;
}