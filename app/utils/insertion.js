import swap from "./util";

const InsertionSort = (arr) => {
    const copy = [...arr];
    const anim = [];

    for (let i = 1; i < copy.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            anim.push([[j, j + 1], false]);

            if (copy[j+1] < copy[j]) {
                anim.push([[j, copy[j + 1]], true]);
                anim.push([[j + 1, copy[j]], true]);
                swap(copy, j, j + 1);
            }
        }
    }

    return anim;
}

export default InsertionSort;