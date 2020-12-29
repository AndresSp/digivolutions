
window.onload = () => {
    const andressp = document.querySelector('#andressp')
    const nameDivs = document.querySelectorAll('.name')
    const nameDivUpside = document.querySelectorAll('.name.upside')
    const nameDivDownside = document.querySelectorAll('.name.downside')

    setTimeout(() => {
        nameDivs.forEach((nameDiv) => nameDiv.textContent = "AGUMON")
    }, 6500)
    anime({
        targets: nameDivUpside,
        translateX: [-400, 600],
        easing: 'linear',
        direction: 'alternate',
        delay: anime.stagger(500, {from: 'center'}),
        duration: 5000
     })

     anime({
        targets: nameDivDownside[0],
        translateX: [-400, 600],
        easing: 'linear',
        direction: 'alternate',
        delay: 1000,
        duration: 5000
     })

     anime({
        targets: nameDivDownside[1],
        translateX: [-400, 600],
        easing: 'linear',
        direction: 'alternate',
        delay: 2000,
        duration: 5000
     })

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
            {value: 0, duration: 1}
        ]
    })
//agumon
    .add({
        targets: '.agumon.s',
        scale: [
            {value: 5, duration: 0},
            {value: 1.9, duration: 50}
        ],
        opacity: [
            {value: 1, duration: 1},
            {value: 1, duration: 100},
            {value: 0, duration: 1}
        ]
    })
    .add({
        targets: '.agumon.se',
        scale: [
            {value: 1.8, duration: 0},
            {value: 1.7, duration: 100}
        ],
        opacity: [
            {value: 1, duration: 1},
            {value: 1, duration: 100},
            {value: 0, duration: 1}
        ]
    })
    .add({
        targets: '.agumon.e',
        scale: [
            {value: 1.6, duration: 0},
            {value: 1.5, duration: 100}
        ],
        opacity: [
            {value: 1, duration: 1},
            {value: 1, duration: 100},
            {value: 0, duration: 1}
        ]
    })
    .add({
        targets: '.agumon.ne',
        scale: [
            {value: 1.4, duration: 0},
            {value: 1.3, duration: 100}
        ],
        opacity: [
            {value: 1, duration: 1},
            {value: 1, duration: 100},
            {value: 0, duration: 1}
        ]
    })
    .add({
        targets: '.agumon.n',
        scale: [
            {value: 1.2, duration: 0},
            {value: 1, duration: 100}
        ],
        opacity: [
            {value: 1, duration: 1},
            {value: 1, duration: 100},
            {value: 0, duration: 1}
        ]
    })
    .add({
        targets: '.agumon.nw',
        scale: [
            {value: 1, duration: 0},
            {value: 1, duration: 100}
        ],
        opacity: [
            {value: 1, duration: 1},
            {value: 1, duration: 100},
            {value: 0, duration: 1}
        ]
    })
    .add({
        targets: '.agumon.w',
        scale: [
            {value: 1, duration: 0},
            {value: 1, duration: 100}
        ],
        opacity: [
            {value: 1, duration: 1},
            {value: 1, duration: 100},
            {value: 0, duration: 1}
        ]
    })
    .add({
        targets: '.agumon.sw',
        scale: [
            {value: 0.9, duration: 0},
            {value: 0.9, duration: 100}
        ],
        opacity: [
            {value: 1, duration: 1},
            {value: 1, duration: 100},
            {value: 0, duration: 1}
        ]
    })
    .add({
        targets: '.agumon.s',
        scale: [
            {value: 0.8, duration: 0},
            {value: 0.8, duration: 100}
        ],
        opacity: [
            {value: 1, duration: 1},
            {value: 1, duration: 100},
            {value: 1, duration: 1}
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