export default [
    {
        id: 1,
        wzor: [
            [2, 9, 7, 1, 8, 3, 4, 5, 6],
            [1, 8, 4, 2, 5, 6, 3, 7, 9],
            [5, 6, 3, 7, 4, 9, 2, 8, 1],
            [3, 5, 2, 4, 9, 1, 7, 6, 8],
            [7, 4, 6, 5, 2, 8, 9, 1, 3],
            [8, 1, 9, 3, 6, 7, 5, 2, 4],
            [9, 2, 8, 6, 3, 5, 1, 4, 7],
            [4, 3, 1, 8, 7, 2, 6, 9, 5],
            [6, 7, 5, 9, 1, 4, 8, 3, 2]
        ],
        setup: [
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, 2, null, null, null, null, 9],
            [5, 6, 3, 7, 4, null, null, null, null],
            [null, null, 2, null, 9, null, null, null, 8],
            [null, 4, null, null, null, null, null, 1, 3],
            [8, null, null, null, 6, null, 5, null, null],
            [9, 2, null, null, 3, null, null, 4, 7],
            [null, null, 1, null, null, null, 6, 9, null],
            [6, null, 5, 9, null, 4, null, null, 2]
        ]
    },
    {
        id: 2,
        wzor: [
            [7, 2, 5, 1, 6, 9, 3, 8, 4],
            [6, 4, 9, 2, 3, 8, 1, 5, 7],
            [8, 1, 3, 4, 5, 7, 2, 6, 9],
            [1, 6, 2, 9, 4, 3, 5, 7, 8],
            [9, 3, 4, 7, 8, 5, 6, 1, 2],
            [5, 7, 8, 6, 1, 2, 9, 4, 3],
            [2, 5, 1, 8, 9, 4, 7, 3, 6],
            [3, 8, 7, 5, 2, 6, 4, 9, 1],
            [4, 9, 6, 3, 7, 1, 8, 2, 5]
        ],
        setup: [
            [7, 2, null, null, 6, 9, null, null, 4],
            [null, null, 9, null, 3, null, null, 5, null],
            [8, null, null, 4, null, null, 2, 6, null],
            [null, 6, null, 9, null, null, null, null, 8],
            [null, 3, null, null, 8, null, null, 1, null],
            [5, null, null, null, null, 2, null, 4, null],
            [null, 5, 1, null, null, 4, null, null, 6],
            [null, 8, null, null, 2, null, 4, null, null],
            [4, null, null, 3, 7, null, null, 2, 5]
        ]
    },
    {
        id: 3,
        wzor: [
            [1, 2, 5, 4, 9, 6, 8, 3, 7],
            [9, 8, 7, 5, 3, 2, 6, 4, 1],
            [6, 4, 3, 8, 7, 1, 9, 5, 2],
            [8, 9, 6, 7, 5, 4, 2, 1, 3],
            [7, 5, 2, 9, 1, 3, 4, 8, 6],
            [4, 3, 1, 6, 2, 8, 7, 9, 5],
            [5, 7, 8, 3, 6, 9, 1, 2, 4],
            [3, 1, 9, 2, 4, 7, 5, 6, 8],
            [2, 6, 4, 1, 8, 5, 3, 7, 9]
        ],
        setup: [
            [1, null, null, null, null, null, null, 3, 7],
            [null, 8, null, null, null, null, null, null, null],
            [6, null, null, null, 7, null, null, 5, 2],
            [null, null, null, 7, null, 4, null, 1, 3],
            [7, 5, null, null, 1, 3, null, null, null],
            [null, null, null, 6, null, null, null, 9, null],
            [null, null, null, null, 6, null, 1, null, null],
            [3, null, 9, null, null, null, null, 6, null],
            [null, null, null, null, 8, null, null, null, 9]
        ]
    }
]