const direction = 'top1';

function wherelook(direction) {

    switch (direction) {
        case 'top':
            return 'look at the top';
        case 'bottom':
            return 'look at the bottom';
        case 'left':
            return 'look at the left';
        case 'right':
            return 'look at the right';
        default:
            return 'lool ahead';
    }
}

console.log(wherelook('left'));