export const View = () =>
  svg({ class: 'Logo', viewBox: '0 0 512 444' }, [
    path({ d: 'M512 444L256 0 0 444z', fill: '#663695' }),
    circle({ cx: '256', cy: '294', r: '130', fill: '#fff' }),
    circle({ cx: '256', cy: '281', r: '40', fill: '#663695' }),
    path({
      d:
        'M256 350v44m24-44l1 13c1 27 29 27 29-7m-160-72s46-47 106-47c59 0 106 47 106 47s-47 43-106 43c-60 0-106-43-106-43zm65-75a134 134 0 0189 2',
      class: 'stroke',
    }),
    path({
      d: 'M256 81v53m184 270l-43-29M72 404l43-29',
      class: 'stroke white',
    }),
  ])

export const style = {
  '.stroke': {
    fill: 'none',
    stroke: '#663695',
    strokeWidth: '15',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',

    '&.white': {
      fill: '#ffffff',
    },
  },
}
