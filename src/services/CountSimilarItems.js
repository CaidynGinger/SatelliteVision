

export default function CountSimilarItems(array) {
    const counts = {};
    array.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
    console.log(counts)
    return counts
}