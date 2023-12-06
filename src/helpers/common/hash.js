//Credits (modified code): Bob Jenkins (http://www.burtleburtle.net/bob/hash/doobs.html)
//See also: https://en.wikipedia.org/wiki/Jenkins_hash_function
//Takes a string of any size and returns an avalanching hash string of 8 hex characters.
export function jenkinsOneAtATimeHash(keyString) {
    let hash = 0;
    for (let charIndex = 0; charIndex < keyString.length; ++charIndex) {
        hash += keyString.charCodeAt(charIndex);
        hash += hash << 10;
        hash ^= hash >> 6;
    }
    hash += hash << 3;
    hash ^= hash >> 11;
    // 0xFFFFFFFF, the maximum 32 bit unsigned integer value, used here as a mask.
    return (((hash + (hash << 15)) & 0xFFFFFFFF) >>> 0).toString(16)
}

/**
 * @param {string} str
 * @return {number}
 */
export function hashcode(str) {
    let hash = 0;
    for (const char of str) {
        hash = Math.imul(31, hash) + char | 0;
    }
    return hash;
}