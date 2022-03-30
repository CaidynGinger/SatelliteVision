export default function MakeListUnique(array) {
    var unique = array.filter((v, i, a) => a.indexOf(v) === i);
    return unique.sort()
}
