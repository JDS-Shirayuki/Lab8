const formatVolumeIconPath = require('../assets/scripts/main');

describe('Change to level icon when volume changed', () => {
    level0();
    level1();
    level2();
    level3();
});

function level0() {
    test('Change to level 0 icon when volume is 0', () => {
        expect(formatVolumeIconPath(0)).toMatch(
            './assets/media/icons/volume-level-0.svg');
    });
}

function level1() {
    test('Change to level 1 icon when volume reaches 1', () => {
        expect(formatVolumeIconPath(1)).toMatch(
            './assets/media/icons/volume-level-1.svg');
    });
    test('Change to level 1 icon when volume reaches 33', () => {
        expect(formatVolumeIconPath(33)).toMatch(
            './assets/media/icons/volume-level-1.svg');
    });
}

function level2() {
    test('Change to level 2 icon when volume reaches 34', () => {
        expect(formatVolumeIconPath(34)).toMatch(
            './assets/media/icons/volume-level-2.svg');
    });
    test('Change to level 2 icon when volume reaches 66', () => {
        expect(formatVolumeIconPath(66)).toMatch(
            './assets/media/icons/volume-level-2.svg');
    });
}

function level3() {
    test('Change to level 3 icon when volume reaches 67', () => {
        expect(formatVolumeIconPath(67)).toMatch(
            './assets/media/icons/volume-level-3.svg');
    });
    test('Change to level 3 icon when volume reaches 100', () => {
        expect(formatVolumeIconPath(100)).toMatch(
            './assets/media/icons/volume-level-3.svg');
    });
}