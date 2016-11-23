const { nl2a, nl2at } = require('.');
const assert = require('assert');

const a = ['aaa', 'bbb', 'ccc'];
const b = ['aaa 1', 'bbb 2', 'ccc 3'];
const c = ['    aaa', '    bbb', '    ccc'];

assert.deepEqual(
    nl2a`
aaa
bbb
ccc
`, a);

assert.deepEqual(
    nl2a`
aaa ${1}
bbb ${1+1}
ccc ${1+2}`, b
);

assert.deepEqual(
    nl2a`
    aaa
    bbb
    ccc
`, c
);

assert.deepEqual(
    nl2at`
    aaa
    bbb
    ccc
`, a
);

assert.deepEqual(
    nl2at`
aaa ${1}
bbb ${1+1}
ccc ${1+2}`, b
);
