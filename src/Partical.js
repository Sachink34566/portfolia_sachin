// const Partical = {
//   autoPlay: true,
//   background: {
//     color: { value: "#000" },
//   },
//   fullScreen: {
//     enable: true,
//     zIndex: -1,
//   },
//   particles: {
//     number: {
//       value: 100,
//       density: {
//         enable: true,
//         value_area: 800,
//       },
//     },
//     color: { value: "#ff0000" },
//     shape: {
//       type: "circle",
//       stroke: { width: 0, color: "#000" },
//       polygon: { nb_sides: 5 },
//     },
//     opacity: {
//       value: 0.5,
//       random: false,
//       anim: { enable: false },
//     },
//     size: {
//       value: { min: 1, max: 5 },
//       random: true,
//       anim: { enable: false },
//     },
//     move: {
//       enable: true,
//       speed: 2,
//       direction: "none",
//       random: false,
//       straight: false,
//       outModes: {
//         default: "out",
//       },
//       bounce: false,
//       attract: { enable: false },
//     },
//   },
//   interactivity: {
//     detectsOn: "canvas",
//     events: {
//       onHover: {
//         enable: true,
//         mode: "repulse",
//       },
//       onClick: {
//         enable: true,
//         mode: "push",
//       },
//       resize: true,
//     },
//     modes: {
//       grab: {
//         distance: 400,
//         links: { opacity: 1 },
//       },
//       bubble: {
//         distance: 400,
//         size: 40,
//         duration: 2,
//         opacity: 8,
//         speed: 3,
//       },
//       repulse: {
//         distance: 200,
//         duration: 1,
//       },
//       push: {
//         quantity: 4,
//       },
//       remove: {
//         quantity: 2,
//       },
//     },
//   },
//   detectRetina: true,
// };

// export default Partical;




const Partical = {
  particles: {
    number: {
      value: 50,
    },
    size: {
      value: 5,
    },
    move: {
      enable: true,
      speed: 2,
    },
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "grab",
      },
    },
  },
};


export default Partical;