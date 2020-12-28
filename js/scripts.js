
window.onload = () => {


    const tl = anime.timeline({
        duration: 1000,
        easing: 'linear'
    })

    tl
    .add({
        targets: '.koromon.s',
        scale: [
            {value: 1, duration: 0},
            {value: 1, duration: 300}
        ],
        opacity: [
            {value: 1, duration: 1},
            {value: 1, duration: 300},
            {value: 0, duration: 1}
        ]
        
    })
    .add({
        targets: '.koromon.se',
        scale: [
            {value: 0.9, duration: 0},
            {value: 0.9, duration: 300}
        ],
        opacity: [
            {value: 1, duration: 1},
            {value: 1, duration: 300},
            {value: 0, duration: 1}
        ]
    })
    .add({
        targets: '.koromon.e',
        scale: [
            {value: 0.8, duration: 0},
            {value: 0.8, duration: 300}
        ],
        opacity: [
            {value: 1, duration: 1},
            {value: 1, duration: 300},
            {value: 0, duration: 1}
        ]
    })
    .add({
        targets: '.koromon.ne',
        scale: [
            {value: 0.7, duration: 0},
            {value: 0.7, duration: 300}
        ],
        opacity: [
            {value: 1, duration: 1},
            {value: 1, duration: 300},
            {value: 0, duration: 1}
        ]
    })
    .add({
        targets: '.koromon.n',
        scale: [
            {value: 0.6, duration: 0},
            {value: 0.6, duration: 300}
        ],
        opacity: [
            {value: 1, duration: 1},
            {value: 1, duration: 300},
            {value: 0, duration: 1}
        ]
    })
    .add({
        targets: '.koromon.nw',
        scale: [
            {value: 0.5, duration: 0},
            {value: 0.5, duration: 300}
        ],
        opacity: [
            {value: 1, duration: 1},
            {value: 1, duration: 300},
            {value: 0, duration: 1}
        ]
    })
    .add({
        targets: '.koromon.w',
        scale: [
            {value: 0.5, duration: 0},
            {value: 0.5, duration: 300}
        ],
        opacity: [
            {value: 1, duration: 1},
            {value: 1, duration: 300},
            {value: 0, duration: 1}
        ]
    })
    .add({
        targets: '.koromon.sw',
        scale: [
            {value: 0.5, duration: 0},
            {value: 0.5, duration: 280}
        ],
        opacity: [
            {value: 1, duration: 1},
            {value: 1, duration: 280},
            {value: 0, duration: 1}
        ]
    })
    .add({
        targets: '.koromon.s',
        scale: [
            {value: 0.5, duration: 0},
            {value: 0.5, duration: 200}
        ],
        opacity: [
            {value: 1, duration: 1},
            {value: 1, duration: 200},
            {value: 0, duration: 1}
        ]
    })
    .add({
        targets: '.koromon.se',
        scale: [
            {value: 0.5, duration: 0},
            {value: 0.5, duration: 200}
        ],
        opacity: [
            {value: 1, duration: 1},
            {value: 1, duration: 200},
            {value: 0, duration: 1}
        ]
    })
    .add({
        targets: '.koromon.e',
        scale: [
            {value: 0.5, duration: 0},
            {value: 0.5, duration: 200}
        ],
        opacity: [
            {value: 1, duration: 1},
            {value: 1, duration: 200},
            {value: 0, duration: 1}
        ]
    })
    .add({
        targets: '.koromon.ne',
        scale: [
            {value: 0.5, duration: 0},
            {value: 0.5, duration: 200}
        ],
        opacity: [
            {value: 1, duration: 1},
            {value: 1, duration: 200},
            {value: 0, duration: 1}
        ]
    })
    .add({
        targets: '.koromon.n',
        scale: [
            {value: 0.5, duration: 0},
            {value: 0.5, duration: 200}
        ],
        opacity: [
            {value: 1, duration: 1},
            {value: 1, duration: 200},
            {value: 0, duration: 1}
        ]
    })
    .add({
        targets: '.koromon.nw',
        scale: [
            {value: 0.5, duration: 0},
            {value: 0.5, duration: 200}
        ],
        opacity: [
            {value: 1, duration: 1},
            {value: 1, duration: 200},
            {value: 0, duration: 1}
        ]
    })
    .add({
        targets: '.koromon.w',
        scale: [
            {value: 0.5, duration: 0},
            {value: 0.5, duration: 200}
        ],
        opacity: [
            {value: 1, duration: 1},
            {value: 1, duration: 200},
            {value: 0, duration: 1}
        ]
    })
    .add({
        targets: '.koromon.sw',
        scale: [
            {value: 0.5, duration: 0},
            {value: 0.5, duration: 200}
        ],
        opacity: [
            {value: 1, duration: 1},
            {value: 1, duration: 200},
            {value: 0, duration: 1}
        ]
    })
    .add({
        targets: '.koromon.s',
        scale: [
            {value: 0.5, duration: 0},
            {value: 0.5, duration: 150}
        ],
        opacity: [
            {value: 1, duration: 1},
            {value: 1, duration: 150},
            {value: 0, duration: 1}
        ]
    })
    .add({
        targets: '.koromon.se',
        scale: [
            {value: 0.5, duration: 0},
            {value: 0.5, duration: 150}
        ],
        opacity: [
            {value: 1, duration: 1},
            {value: 1, duration: 150},
            {value: 0, duration: 1}
        ]
    })
    .add({
        targets: '.koromon.e',
        scale: [
            {value: 0.5, duration: 0},
            {value: 0.5, duration: 150}
        ],
        opacity: [
            {value: 1, duration: 1},
            {value: 1, duration: 150},
            {value: 0, duration: 1}
        ]
    })
    .add({
        targets: '.koromon.ne',
        scale: [
            {value: 0.5, duration: 0},
            {value: 0.5, duration: 150}
        ],
        opacity: [
            {value: 1, duration: 1},
            {value: 1, duration: 150},
            {value: 0, duration: 1}
        ]
    })
    .add({
        targets: '.koromon.n',
        scale: [
            {value: 0.5, duration: 0},
            {value: 0.5, duration: 150}
        ],
        opacity: [
            {value: 1, duration: 1},
            {value: 1, duration: 150},
            {value: 0, duration: 1}
        ]
    })
    .add({
        targets: '.koromon.nw',
        scale: [
            {value: 0.5, duration: 0},
            {value: 0.5, duration: 150}
        ],
        opacity: [
            {value: 1, duration: 1},
            {value: 1, duration: 150},
            {value: 0, duration: 1}
        ]
    })
    .add({
        targets: '.koromon.w',
        scale: [
            {value: 0.5, duration: 0},
            {value: 0.5, duration: 150}
        ],
        opacity: [
            {value: 1, duration: 1},
            {value: 1, duration: 150},
            {value: 0, duration: 1}
        ]
    })
    .add({
        targets: '.koromon.sw',
        scale: [
            {value: 0.5, duration: 0},
            {value: 0.5, duration: 150}
        ],
        opacity: [
            {value: 1, duration: 1},
            {value: 1, duration: 150},
            {value: 0, duration: 1}
        ]
    })
    .add({
        targets: '.koromon.s',
        scale: [
            {value: 0.5, duration: 0},
            {value: 0.5, duration: 100}
        ],
        opacity: [
            {value: 1, duration: 1},
            {value: 1, duration: 100},
            {value: 0, duration: 1}
        ]
    })
    .add({
        targets: '.koromon.se',
        scale: [
            {value: 0.5, duration: 0},
            {value: 0.5, duration: 100}
        ],
        opacity: [
            {value: 1, duration: 1},
            {value: 1, duration: 100},
            {value: 0, duration: 1}
        ]
    })
    .add({
        targets: '.koromon.e',
        scale: [
            {value: 0.5, duration: 0},
            {value: 0.5, duration: 100}
        ],
        opacity: [
            {value: 1, duration: 1},
            {value: 1, duration: 100},
            {value: 0, duration: 1}
        ]
    })
    .add({
        targets: '.koromon.ne',
        scale: [
            {value: 0.5, duration: 0},
            {value: 0.5, duration: 100}
        ],
        opacity: [
            {value: 1, duration: 1},
            {value: 1, duration: 100},
            {value: 0, duration: 1}
        ]
    })
    .add({
        targets: '.koromon.n',
        scale: [
            {value: 0.5, duration: 0},
            {value: 0.5, duration: 100}
        ],
        opacity: [
            {value: 1, duration: 1},
            {value: 1, duration: 100},
            {value: 0, duration: 1}
        ]
    })
    .add({
        targets: '.koromon.nw',
        scale: [
            {value: 0.5, duration: 0},
            {value: 0.6, duration: 100}
        ],
        opacity: [
            {value: 1, duration: 1},
            {value: 1, duration: 100},
            {value: 0, duration: 1}
        ]
    })
    .add({
        targets: '.koromon.w',
        scale: [
            {value: 0.7, duration: 0},
            {value: 0.8, duration: 100}
        ],
        opacity: [
            {value: 1, duration: 1},
            {value: 1, duration: 100},
            {value: 0, duration: 1}
        ]
    })
    .add({
        targets: '.koromon.sw',
        scale: [
            {value: 0.9, duration: 0},
            {value: 1, duration: 100}
        ],
        opacity: [
            {value: 1, duration: 1},
            {value: 1, duration: 100},
            {value: 0, duration: 1}
        ]
    })
    .add({
        targets: '.koromon.s',
        scale: [
            {value: 1.1, duration: 0},
            {value: 1.2, duration: 100}
        ],
        opacity: [
            {value: 1, duration: 1},
            {value: 1, duration: 100},
            {value: 0, duration: 1}
        ]
    })
    .add({
        targets: '.koromon.se',
        scale: [
            {value: 1.3, duration: 0},
            {value: 1.4, duration: 100}
        ],
        opacity: [
            {value: 1, duration: 1},
            {value: 1, duration: 100},
            {value: 0, duration: 1}
        ]
    })
    .add({
        targets: '.koromon.e',
        scale: [
            {value: 1.5, duration: 0},
            {value: 1.6, duration: 100}
        ],
        opacity: [
            {value: 1, duration: 1},
            {value: 1, duration: 100},
            {value: 0, duration: 1}
        ]
    })
    .add({
        targets: '.koromon.ne',
        scale: [
            {value: 1.7, duration: 0},
            {value: 1.8, duration: 100}
        ],
        opacity: [
            {value: 1, duration: 1},
            {value: 1, duration: 100},
            {value: 0, duration: 1}
        ]
    })
    .add({
        targets: '.koromon.n',
        scale: [
            {value: 1.9, duration: 0},
            {value: 5, duration: 50}
        ],
        opacity: [
            {value: 1, duration: 1},
            {value: 1, duration: 100},
            // {value: 0, duration: 1}
        ]
    })

    // anime({
    //     targets: koromon,
    //     src: resources(directions),
    //     duration: 800,
    //     easing: 'linear',
    //     round: 1
    // })
}