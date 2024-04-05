import { SWAP } from '../constants';
import {swap} from '../util';

const bubbleSort = async (arr, length) => {
    let m = [];

    for(let i = 0; i < length - 1; i++) {
        for(let j = 0; j < length - i - 1; j++) {
            if (arr[i] > arr[j+1]) {
                await swap(arr, j, j + 1);
                m.push([j, j+1, SWAP]);
            } else {
                m.push([j, j + 1, !SWAP]);
            }
        }
    }

    return m;
}
