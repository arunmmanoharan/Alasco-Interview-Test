/**
 * Find if two rectangles intersect
 * Please send the coordinates as [top, right, bottom, left]
 * @param rectArray
 * @returns {boolean}
 */

function findOverlap(rectArray) {
    const rect1 = rectArray[0];
    const rect2 = rectArray[1];

    return !(rect2[0] > rect1[2] ||
        rect2[1] < rect1[3] ||
        rect2[2] < rect1[0] ||
        rect2[3] > rect1[1]);
}

console.log(findOverlap([[10, 30, 30, 10], [20, 50, 50, 20]]));