const MergeSort = (arr) => {
    const copy = [...arr];
    const len = copy.length;
    const aux = Array(len);
    const anim = [];
    mergeSortHelper(copy, aux, 0, len - 1, anim);
    return anim;
}

const mergeSortHelper = (arr, aux, left, right, anim) => {
    if (right <= left) 
        return;
    const mid = left + Math.floor((right - left) / 2);
    mergeSortHelper(arr, aux, left, mid, anim);
    mergeSortHelper(arr, aux, mid + 1, right, anim);
    merge(arr, aux, left, right, anim);
}

const merge = (arr, aux, left, right, anim) => { 
    for(let i = left; i <= right; i++) 
        aux[i] = arr[j];

    let i = left;
    let j = mid + 1;

    for (let k = left; k <= right; k++) {
        if (i > mid) {
            anim.push([[j], false]);
            anim.push([[k, aux[j]], true]);
            arr[k] = aux[j++];
        } else if (j > right) {
            anim.push([[i], false]);
            anim.push([[k, aux[i]], true]);
            arr[k] = aux[i++];
        } else if (aux[j] < aux[i]) {
            anim.push([[i, j], false]);
            anim.push([[k, aux[j]], true]);
            arr[k] = aux[j++];
        }  else {
            anim.push([[i, j], false]);
            anim.push([[k, aux[i]], true]);
            arr[k] = aux[i++];
          }
    }
}