const { to, set, registerPlugin } = gsap

registerPlugin(MorphSVGPlugin)

let getVar = key => getComputedStyle(document.documentElement).getPropertyValue(key)

const sidebar = document.querySelector('aside')

sidebar.querySelectorAll('button').forEach(button => {
    button.addEventListener('pointerenter', e => {
        to(button, {
            '--c-background': getVar('--c-hover'),
            '--c-color': getVar('--c-active'),
            duration: .15
        })
    })
    button.addEventListener('pointermove', e => {
        to(button, {
            '--c-background': getVar('--c-hover'),
            '--c-color': getVar('--c-active'),
            duration: .15
        })
    })
    button.addEventListener('pointerleave', e => {
        to(button, {
            '--c-background': getVar('--c-sidebar'),
            '--c-color': button.classList.contains('active') || sidebar.animating === button ? getVar('--c-active') : getVar('--c-default'),
            duration: .15
        })
    })
})

sidebar.querySelectorAll('.home').forEach(button => wrap(button, () => {
    to(button, {
        keyframes: [{
            '--icon-fill-size': '12px',
            '--icon-outline-s': .9,
            '--icon-outline-o': 0,
            '--icon-house-s': .85,
            duration: .2
        }, {
            '--icon-house-s': 1,
            duration: .65,
            ease: 'elastic.out(1, .65)',
            onStart() {
                to(button, {
                    keyframes: [{
                        '--icon-feather-right-s': 1,
                        duration: .1,
                        delay: .2,
                        onStart() {
                            to(button, {
                                keyframes: [{
                                    '--icon-feather-right-x': '0px',
                                    '--icon-feather-right-r': '-16deg',
                                    duration: .4
                                }, {
                                    '--icon-feather-right-x': '-9px',
                                    '--icon-feather-right-r': '16deg',
                                    duration: .4
                                }, {
                                    '--icon-feather-right-x': '3px',
                                    '--icon-feather-right-r': '0deg',
                                    duration: .4
                                }, {
                                    '--icon-feather-right-o': 0,
                                    duration: .15
                                }]
                            })
                        }
                    }, {
                        '--icon-feather-right-y': '10px',
                        duration: 1.2
                    }]
                })
                to(button, {
                    keyframes: [{
                        '--icon-feather-left-s': 1,
                        duration: .1,
                        onStart() {
                            to(button, {
                                keyframes: [{
                                    '--icon-feather-left-x': '-14px',
                                    '--icon-feather-left-r': '16deg',
                                    duration: .4
                                }, {
                                    '--icon-feather-left-x': '-10px',
                                    '--icon-feather-left-r': '-12deg',
                                    duration: .4
                                }, {
                                    '--icon-feather-left-x': '-14px',
                                    '--icon-feather-left-r': '0deg',
                                    duration: .4
                                }, {
                                    '--icon-feather-left-o': 0,
                                    duration: .15
                                }]
                            })
                        }
                    }, {
                        '--icon-feather-left-y': '10px',
                        duration: 1.2
                    }]
                })
            },
            onComplete() {
                button.classList.add('active')
                sidebar.animating = false
            }
        }]
    })
}))

sidebar.querySelectorAll('.explore').forEach(button => wrap(button, () => {
    to(button, {
        '--icon-triangle-fill': getVar('--c-active'),
        '--icon-stroke': '2px',
        duration: .15
    })
    to(button, {
        '--icon-r': '360deg',
        duration: 1.2,
        ease: 'elastic(1, .95)',
        clearProps: true,
        onComplete() {
            button.classList.add('active')
            sidebar.animating = false
        }
    })
}))

sidebar.querySelectorAll('.notifications').forEach(button => wrap(button, () => {
    to(button, {
        duration: 1,
        keyframes: [{
            '--icon-r': '-12deg',
            '--icon-ring-x': '-2.5px',
            '--icon-bell-fill': getVar('--c-active'),
            '--icon-stroke': '2px'
        }, {
            '--icon-r': '12deg',
            '--icon-ring-x': '4.5px'
        }, {
            '--icon-r': '-12deg',
            '--icon-ring-x': '-4.5px'
        }, {
            '--icon-r': '12deg',
            '--icon-ring-x': '4.5px'
        }, {
            '--icon-r': '0deg',
            '--icon-ring-x': '0px',
            onComplete() {
                button.classList.add('active')
                sidebar.animating = false
            }
        }]
    })
}))

sidebar.querySelectorAll('.messages').forEach(button => wrap(button, () => {
    to(button, {
        keyframes: [{
            '--icon-fill': getVar('--c-active'),
            '--icon-stroke': getVar('--c-sidebar'),
            duration: .15
        }, {
            '--top-r': '180deg',
            duration: .3
        }, {
            '--top-r': '0deg',
            duration: .25,
            onComplete() {
                button.classList.add('active')
                sidebar.animating = false
            }
        }]
    })
}))

sidebar.querySelectorAll('.bookmark').forEach(button => wrap(button, () => {
    to(button, {
        '--icon-default-y': '-20px',
        duration: .3
    })

    to(button, {
        keyframes: [{
            '--icon-background-y': '-5px',
            duration: .1,
            delay: .12
        }, {
            '--icon-background-y': '0px',
            duration: .16
        }]
    })

    to(button.querySelector('.corner'), {
        keyframes: [{
            morphSVG: 'M5.68047 3H11.9995H18.3186C20.7497 3 21.9299 9 19.2215 9H4.77786C2.06991 9 3.24972 3 5.68047 3Z',
            duration: .15
        }, {
            morphSVG: 'M4.36835 6C4.36835 6 5.71509 10.7143 12.0001 10.7143C18.2852 10.7143 19.6316 6 19.6316 6C23.6719 6 21.8766 12 19.1829 12H4.81702C2.12365 12 0.327912 6 4.36835 6Z',
            duration: .125
        }, {
            morphSVG: {
                shape: 'M4 20.3665C4.00001 20.8781 4.60713 21.1779 5.04898 20.8845L12 15.95L18.951 20.8845C19.3929 21.1779 20 20.8781 20 20.3664V15L4 14.9999V20.3665Z',
                shapeIndex: 6
            },
            duration: .6,
            ease: 'elastic.out(1, .75)',
            clearProps: true,
            onStart() {
                set(button, {
                    '--icon-corner-fill': getVar('--c-active'),
                    delay: .05
                })
            },
            onComplete() {
                button.classList.add('active')
                sidebar.animating = false
            }
        }]
    })
}))

sidebar.querySelectorAll('.lists').forEach(button => wrap(button, () => {
    to(button, {
        keyframes: [{
            '--icon-line-top': '10px',
            '--icon-line-middle': '10px',
            '--icon-line-bottom': '5px',
            duration: .15
        }, {
            '--icon-fill': getVar('--c-active'),
            '--icon-line': getVar('--c-sidebar'),
            '--icon-pencil-o': 1,
            duration: .15
        }, {
            '--icon-line-top': '0px',
            '--icon-pencil-x': '10px',
            duration: .15,
            onStart() {
                to(button, {
                    duration: .15,
                    keyframes: [{
                        '--icon-pencil-r': '40deg',
                    }, {
                        '--icon-pencil-r': '50deg',
                    }, {
                        '--icon-pencil-r': '45deg',
                    }]
                })
            }
        }, {
            '--icon-pencil-y': '4px',
            '--icon-pencil-x': '0px',
            duration: .1
        }, {
            '--icon-line-middle': '0px',
            '--icon-pencil-x': '10px',
            duration: .15,
            onStart() {
                to(button, {
                    duration: .15,
                    keyframes: [{
                        '--icon-pencil-r': '40deg',
                    }, {
                        '--icon-pencil-r': '50deg',
                    }, {
                        '--icon-pencil-r': '45deg',
                    }]
                })
            }
        }, {
            '--icon-pencil-y': '8px',
            '--icon-pencil-x': '0px',
            duration: .1
        }, {
            '--icon-pencil-x': '5px',
            '--icon-line-bottom': '0px',
            duration: .15
        }, {
            '--icon-pencil-o': 0,
            '--icon-pencil-x': '10px',
            duration: .1,
            clearProps: true,
            onComplete() {
                button.classList.add('active')
                sidebar.animating = false
            }
        }]
    })
}))

sidebar.querySelectorAll('.profile').forEach(button => wrap(button, () => {
    to(button, {
        keyframes: [{
            '--icon-fill': getVar('--c-active'),
            duration: .15
        }, {
            '--icon-r': '-20deg',
            duration: .15
        }, {
            '--icon-r': '20deg',
            duration: .15
        }, {
            '--icon-r': '0deg',
            duration: .2
        }, {
            duration: .15,
            clearProps: true,
            onComplete() {
                button.classList.add('active')
                sidebar.animating = false
            }
        }]
    })
}))

function wrap(button, callback) {
    button.addEventListener('click', e => {
        if(sidebar.animating || button.classList.contains('active')) {
            return;
        }
        sidebar.animating = button

        sidebar.querySelectorAll('button.active').forEach(active => {
            active.classList.remove('active')
            active.removeAttribute('style')
            if(active.querySelector('.corner')) {
                set(active.querySelector('.corner'), {
                    morphSVG: 'M5.5 3L12 3.01L18.5 3V3.01H5.5V3Z'
                })
            }
        })

        set(button, {
            '--c-color': getVar('--c-active')
        })

        return callback()

    })
}